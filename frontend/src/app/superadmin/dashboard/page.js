"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function SuperAdminDashboard() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    if (user?.user?.role !== "superadmin") {
      router.push("/");
    }
  }, [user]);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Super Admin Dashboard
      </h1>
    </div>
  );
}