import { createFileRoute } from "@tanstack/react-router";
import { SignupForm } from "../features/auth/signup-form";
export const Route = createFileRoute("/signup")({
  component: Signup,
});

function Signup() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignupForm />
    </div>
  );
}
