import prisma from "@/services/prismadb";
import { NextResponse } from "next/server";


export async function GET(req:Request){
   try {
    
    const totalRevenuePerState = await prisma.ecommerce_data.groupBy({
        by: ['customer_state'],
        _sum: {
          order_quantity: true,
          sales_per_order: true,
        },
      });

      const totalRevenuePerRegion = await prisma.ecommerce_data.groupBy({
        by: ['customer_region'],
        _sum: {
          order_quantity: true,
          sales_per_order: true,
        },
      });

      const totalProfitPerState=await prisma.ecommerce_data.groupBy({
        by:['customer_state'],
        _sum:{
            profit_per_order:true
        }
      })

      const resultProfit=totalProfitPerState.map((data)=>({
        name:data.customer_state,
        total_quantity:data._sum.profit_per_order
      }))
     const resultState= totalRevenuePerState.map((val)=>(
       {
        name:val.customer_state,
        total_quantity:(val._sum.sales_per_order ??0) * (val._sum.order_quantity ?? 0)
       }
      ))


      const resultRegion= totalRevenuePerRegion.map((val)=>(
        {
         name:val.customer_region,
         total_quantity:(val._sum.sales_per_order ??0) * (val._sum.order_quantity ?? 0)
        }
       ))


       const allResults={
        resultState,
        resultRegion,resultProfit
       }
      return NextResponse.json(allResults)
   } 
   catch (error) {
     return NextResponse.error()
   }
}