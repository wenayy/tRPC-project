import { createHTTPServer } from "@trpc/server/adapters/standalone";

import{procedure, router} from "./trpc/trpc"
 

import {z} from "zod"
import { createRoute } from "./routers/create";
import { appRouter } from "./routers/index";

// const todotype=z.object({
//     title:z.string(),
//     description:z.string()
// })
// const appRouter=router({
// createTodo:procedure
// .input(todotype)
// .mutation(async(opts)=>{
//     const title=opts.input.title
//     const description=opts.input.description
// return {
//     id:"1"
// }
// })

// })


const server =createHTTPServer({
    router:appRouter,
    
})
server.listen(3000)

 
