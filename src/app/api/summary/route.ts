import prisma from "@/services/prismadb";
import { NextResponse } from "next/server";

export async function GET(req:Request){
    try {
        const data=await prisma.ecommerce_data.aggregate({
            _sum:{
                sales_per_order:true,
                profit_per_order:true,
                order_quantity:true
            }
        })


       
        const totalSales=ChangeToMillion(data._sum.sales_per_order || 0)
        const totalProfit=Math.round(data._sum.profit_per_order || 0 *100)/100 
        const totalOrder=data._sum.order_quantity

        const profitMargin=Math.round(((totalProfit/totalSales)*100)*100)/100




        const totals = {
            totalSales,
            totalProfit,
            totalOrder,
            profitMargin,
           
          };

        
      
          return NextResponse.json(totals);
    } catch (error) {
        return NextResponse.error()
    }
}

function ChangeToMillion(value:number) {
    const millionRepresentation = parseFloat((value / 1000000).toFixed(2));
    return millionRepresentation;
  }