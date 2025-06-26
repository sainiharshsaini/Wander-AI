"use client"

import Auth from "@/components/auth/Auth";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation"; 

export default function Home() {
  const { user, loading} = useAuth();
  const router = useRouter();

  if (!loading && user) {
    router.push("/dashboard");
    return null;
  }

  return (
    <div>
      {loading ? <h1>Loading...</h1> : <Auth/>}
    </div>
  );
}
