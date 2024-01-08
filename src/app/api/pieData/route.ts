import prisma from "@/services/prismadb";
import { NextResponse } from "next/server";
 export async function GET(req:Request){
    try {
        const StateSalesData=await prisma.ecommerce_data.groupBy({
            by:['customer_state'],
            _sum:{
                order_quantity:true
            },orderBy: {
                _sum: {
                  order_quantity: 'desc',
                },
              },
              take: 3,
            
        })
    
        const StateProfitData=await prisma.ecommerce_data.groupBy({
            by:['customer_state'],
            _sum:{
                profit_per_order:true
            },
            orderBy: {
                _sum: {
                  order_quantity: 'asc',
                },
              },
              take: 5,
        })
        
        const formattedResultSales = StateSalesData.map((result) => ({
            name: result.customer_state,
            total_quantity: result._sum?.order_quantity || 0,
          }));


          const formattedResultProfit = StateProfitData.map((result) => ({
            name: result.customer_state,
            total_quantity: result._sum?.profit_per_order || 0,
          }));
        
        const data={
            formattedResultSales,
            formattedResultProfit
        }

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.error()
    }
 }