// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./pokemon";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("api.", exampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
