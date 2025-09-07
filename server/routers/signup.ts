import {router,procedure} from "../trpc/trpc"
import {z} from "zod"

const   signuptype=z.object({
    name:z.string(),
    email:z.email(),
    password:z.string().min(1)
})
export const signupRoute=router({
    signupProcedure:procedure
    .input(signuptype)
    .mutation((obj)=>{
        const {name,email,password}=obj.input;
        const token="13943"
        return {
            token
        }
    })
}) 