import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server/routers/index.js";  // Remove .js

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

async function main() {
  console.log("👋 Client starting...");

  try {
    const result = await trpc.todo.createTodo.mutate({
      title: "Hit the gym",
      description: "Morning workout session",
    });

    console.log("✅ Response from server:", result);
  } catch (err) {
    console.error("❌ Error calling server:", err);
  }
}

main();