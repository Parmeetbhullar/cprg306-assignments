"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (err) {
      console.error("Login error", err);
    }
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <main className="p-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Shopping List App</h1>

      {!user ? (
        <button
          onClick={handleLogin}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          Login with GitHub
        </button>
      ) : (
        <div className="space-y-3">
          <p>
          Signed in as <strong>{user.displayName}</strong> ({user.email})
          </p>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-800 transition block"
          >
            Sign out
          </button>
          <Link
            href="/week-10/shopping-list"
            className="bg-green-600 px-4 py-2 rounded hover:bg-green-800 transition inline-block"
          >
            Continue to your Shopping List
          </Link>
        </div>
      )}
    </main>
  );
}
