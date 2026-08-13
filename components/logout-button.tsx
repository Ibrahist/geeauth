"use client";
import React from "react";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
// import { useRouter } from "next/router";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function LogoutButton() {
  const router = useRouter();
  const onlogout = async () =>
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Log out succesfully");
          router.push("/login");
        },
      },
    });
  return (
    <Button variant={"destructive"} size={"lg"} onClick={onlogout}>
      Logout
    </Button>
  );
}

export default LogoutButton;
