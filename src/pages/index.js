import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Next.js Azure AD SSO with MFA</h1>
      {!session ? (
        <>
          <p>You are not signed in</p>
          <button onClick={() => signIn("azure-ad")}>Sign in</button>
        </>
      ) : (
        <>
          <p>Welcome, {session.user?.name}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
}
