import { auth0 } from "@lib/auth0";
import { redirect } from "next/navigation";
export default async function Home() {
  const  session  = await auth0.getSession();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <main>
      <h1>Welcome, {session.user.name}!</h1>
    </main>
  );
}
