 
import { router } from "../trpc/trpc";
import { createRoute } from "./create";
import { signupRoute } from "./signup";

export const appRouter= router({
    todo:createRoute,
    signupRoute:signupRoute
})

export type AppRouter= typeof appRouter