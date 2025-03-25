import { Hono } from "hono";
import { cors } from "hono/cors";
import { auth } from "./lib/auth";

export const app = new Hono()
  .use(
    cors({
      origin: ["http://localhost:5173"],
      allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    })
  )
  .on(["POST", "GET"], "/api/auth/*", (c) => {
    return auth.handler(c.req.raw);
  });
