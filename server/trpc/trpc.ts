import {initTRPC } from "@trpc/server"
import { Context } from "vm";

const t =initTRPC.context<Context>().create();  // <> this is the generic  

export const router = t.router;
export const procedure = t.procedure