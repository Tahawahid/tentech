import type { Route } from "./+types/admin.dashboard";
import { AdminLayout } from "../components/Admin/AdminLayout";
import { Dashboard } from "../components/Admin/Dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard - Mascort Admin" },
    { name: "description", content: "Admin dashboard for Mascort" },
    { name: "robots", content: "noindex, nofollow" }
  ];
}

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <Dashboard />
    </AdminLayout>
  );
}