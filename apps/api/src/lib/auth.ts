import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { organization, apiKey } from "better-auth/plugins";
import db from "./db";
import { stripe } from "@better-auth/stripe";
import { stripeClient } from "./stripe";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  trustedOrigins: ["http://localhost:5173"],
  secret: process.env.BETTER_AUTH_SECRET!,
  plugins: [
    // https://github.com/better-auth/better-auth/issues/1861
    organization() as ReturnType<typeof organization>,
    apiKey(),
    // stripe({
    //   stripeClient,
    //   stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
    //   createCustomerOnSignUp: true,
    // }),
  ],
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
});
