import prisma from "@/services/prismadb";

import { NextResponse } from "next/server";


export async function GET(req:Request){
    try {
        const Citydata=await prisma.ecommerce_data.groupBy({
            by:['customer_city'],
            _sum:{
                sales_per_order:true
            },
            orderBy:{
                customer_city:'desc'
            }
            ,take:10
        })
        const Statedata=await prisma.ecommerce_data.groupBy({
            by:['customer_state'],
            _sum:{
                sales_per_order:true
            }
        })

        const Categorydata=await prisma.ecommerce_data.groupBy({
            by:['category_name'],
            _sum:{
                sales_per_order:true
            }
        })

        const Regiondata=await prisma.ecommerce_data.groupBy({
            by:['customer_region'],
            _sum:{
                sales_per_order:true
            }
        })

        const formattedResultCity= Citydata.map((result) => ({
            name: result.customer_city,
            total_quantity: result._sum?.sales_per_order || 0,
          }));
          const formattedResultState= Statedata.map((result) => ({
            name: result.customer_state,
            total_quantity: result._sum?.sales_per_order || 0,
          }));
          const formattedResultCategory= Categorydata.map((result) => ({
            name: result.category_name,
            total_quantity: result._sum?.sales_per_order || 0,
          }));

          const formattedResultRegion= Regiondata.map((result) => ({
            name: result.customer_region,
            total_quantity: result._sum?.sales_per_order || 0,
          }));

          const result={
            formattedResultState,
            formattedResultCity,
            formattedResultRegion,
            formattedResultCategory
          }

          return NextResponse.json(result)
    } catch (error) {
        return NextResponse.error()
    }


}