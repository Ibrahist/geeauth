import React from "react";
import { requireUnAuth } from "@/lib/auth-guard";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  await requireUnAuth();
  return (
    <div className="flex justify-center items-center h-screen">{children}</div>
  );
};

export default AuthLayout;
