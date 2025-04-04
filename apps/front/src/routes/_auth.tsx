import { authClient } from "@/lib/auth-client";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  // Before loading, authenticate the user via our auth context
  // This will also happen during prefetching (e.g. hovering over links, etc)
  beforeLoad: async ({ location }) => {
    // If the user is logged out, redirect them to the login page
    const { data } = await authClient.getSession();

    if (!data) {
      throw redirect({
        to: "/login",
        search: {
          // Use the current location to power a redirect after login
          // (Do not use `router.state.resolvedLocation` as it can
          // potentially lag behind the actual current location)
          redirect: location.href,
        },
      });
    }

    // Otherwise, return the user in context
    return {
      username: data.user.email,
    };
  },
});
