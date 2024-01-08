import prisma from "@/services/prismadb";
import { NextResponse } from "next/server";


export async function GET(req:Request){
    try {
        const TopFiveData=await prisma.ecommerce_data.groupBy({
            by:['product_name'],
            _sum:{
                sales_per_order:true
            },
            orderBy: {
                _sum: {
                  sales_per_order: 'desc',
                },
              },
              take: 5,
        })
        const responseArray = TopFiveData.map(item => ({
            product_name: item.product_name,
            total_sales: item._sum.sales_per_order,
          }));
        return NextResponse.json(responseArray)
    } catch (error) {
        return NextResponse.error()
    }
}