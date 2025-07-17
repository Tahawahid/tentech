import type { Route } from "./+types/admin.login";
import { LoginForm } from "../components/Admin/LoginForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Admin Login - Mascort" },
    { name: "description", content: "Admin login for Mascort team members" },
    { name: "robots", content: "noindex, nofollow" }
  ];
}

export default function AdminLogin() {
  return <LoginForm />;
}