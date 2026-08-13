// import { Button } from "@/components/ui/button"
import LogoutButton from "@/components/logout-button";
import { requireAuth } from "@/lib/auth-guard";
// import { authClient } from "@/lib/auth-client";
import Image from "next/image";

async function Home() {
  const session = await requireAuth();

  const { user } = session;
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-zinc-900 text-white space-y-4">
      <Image
        src={user.image!}
        alt="userimage"
        className="h-50 w-50 object-contain rounded-full"
        height={70}
        width={70}
      />
      <h2 className="text-3xl font-bold mt-t">{user.name}</h2>
      <p className="text-xl font-semibold text-zinc-200">{user.email}</p>
      <LogoutButton />
    </div>
  );
}

export default Home;
