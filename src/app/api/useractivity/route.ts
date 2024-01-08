import prisma from "@/services/prismadb";
import { NextResponse } from "next/server";

export async function GET(req:Request){
    try {
        const salesBySegment = await prisma.ecommerce_data.groupBy({
            by: ['customer_segment'],
            _sum: {
              sales_per_order: true,
            },
    
            
              
          });
    
          const totalOrdersByShippingType = await prisma.ecommerce_data.groupBy({
            by: ['shipping_type'],
            _sum: {
                order_quantity:true
            },
          });

          const totalSales=salesBySegment.map((data)=>({
            name:data.customer_segment,
            total_quantity:data._sum.sales_per_order
          }))

          const totalOrder=totalOrdersByShippingType.map((data)=>({
            name:data.shipping_type,
            total_quantity:data._sum.order_quantity
          }))


          const result={
            totalSales,
            totalOrder
          }

          return NextResponse.json(result)
    } catch (error) {
        return NextResponse.error()
    }
}