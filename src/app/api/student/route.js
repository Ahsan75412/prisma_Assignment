import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";




//create api for single student




export async function POST(req, res) {

    try {
        const prisma = new PrismaClient();



        let reqBody = await req.json()
        console.log('Request Body:', reqBody);

        let result = await prisma.students.create({
            data: reqBody
        })

        return NextResponse.json({ status: 'success', data: result })

    } catch (e) {
        return NextResponse.json({ status: 'fail', data: e.toString() })

    }
}








// creating many  student at once 




export async function POST(req, res) {

    try {
        const prisma = new PrismaClient();

     

        let reqBody = await req.json()

        let result = await prisma.students.createMany({
            data: reqBody
        })

        return NextResponse.json({ status: 'success', data: result })

    } catch (e) {
        return NextResponse.json({ status: 'fail', data: e.toString()})

    }
}





//***********Delete a single student ***********




export async function POST (req , res){

       try{
        const prisma = new PrismaClient();


       let reqBody = await req.json()

     
        let result = await prisma.students.delete({
            where:reqBody
        })

        return NextResponse.json({status:'success' , data:result})

       }catch(e){
        return NextResponse.json({status:'fail' , data: e.toString()})

       }
}







//***********Update a data***********




export async function POST (req , res){

       try{
        const prisma = new PrismaClient();

       let reqBody = await req.json()


        let result = await prisma.students.update({
            where:{id:reqBody['id']},
            data:{age:reqBody['age']}
        })

        return NextResponse.json({status:'success' , data:result})

       }catch(e){
        return NextResponse.json({status:'fail' , data: e.toString()})

       }
}











// Create API to Show Data of a Single Student:




export async function GET (req , res){

       try{
        const prisma = new PrismaClient();

     
        let result = await prisma.students.findUnique({
            where:{id:2}, 
        
        })

        return NextResponse.json({status:'success' , data:result})

       }catch(e){
        return NextResponse.json({status:'fail' , data: e.toString()})

       }
}









//****Get Data to find from db many student** */


export async function GET (req , res){

       try{
        const prisma = new PrismaClient();

        let result = await prisma.students.findMany({
            where:{id:1}, 
            select:{courses:true , grade:true}
        })

        return NextResponse.json({status:'success' , data:result})

       }catch(e){
        return NextResponse.json({status:'fail' , data:e})

       }
}
