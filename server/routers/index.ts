 
import { router } from "../trpc/trpc";
import { createRoute } from "./create";

export const appRouter= router({
    todo:createRoute
})

export type AppRouter= typeof appRouter