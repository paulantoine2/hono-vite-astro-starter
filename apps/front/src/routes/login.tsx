import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "../features/auth/login-form";
export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoginForm />
    </div>
  );
}
