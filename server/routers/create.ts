import{procedure, router} from "../trpc/trpc"
import {z} from "zod";
 
const  createInput=z.object({
    title:z.string().min(1,{message:"it should be corect min one word"}),
    description:z.string().min(1)
})
 export const createRoute=router({
    createTodo:procedure
    .input(createInput)
    .mutation(async(opt)=>{
        const title = opt.input.title
        const description=opt.input.description
           return {
        id:"3"
    }
    })
 
    
})

