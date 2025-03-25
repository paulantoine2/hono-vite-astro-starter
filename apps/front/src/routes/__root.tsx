import { Toaster } from "@/components/ui/sonner";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <header>
        <h1>My App</h1>
      </header>
      <hr />
      <Outlet />
      <Toaster richColors />
      <TanStackRouterDevtools />
    </>
  ),
});
