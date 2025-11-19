"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

function Page() {
  // Use the useUserAuth to get user object, login, logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  console.log(user);

  return (
    <main className="m-10">
      {user ? (
        <section className="flex-col flex justify-center items-center h-screen">
          <div className="flex-col flex justify-center items-center h-screen">
            <h1 className="text-5xl font-bold">Welcome, {user.displayName}!</h1>
            <p>{user.email}</p>
            <Link
              href="./week-9/shopping-list"
              className="hover:text-blue-400 hover:underline text-2xl font-bold"
            >
              Visit our shopping list!
            </Link>
            <div>
              <button
                type="button"
                onClick={handleSignOut}
                className="bg-blue-500 rounded-lg pt-2 pb-2 pl-4 pr-4 text-white m-4 hover:bg-blue-600 active:bg-blue-700"
              >
                Logout
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section>
          <div className="flex-col flex justify-center items-center h-screen">
            <h1 className="text-5xl font-bold pb-5">
              Welcome! Please log in with your GitHub!
            </h1>
            <Link
              href="./week-9/shopping-list"
              className="hover:text-blue-400 hover:underline text-2xl font-bold pb-10"
            >
              Visit our shopping list!
            </Link>
            <button
              type="button"
              onClick={handleSignIn}
              className="bg-blue-500 rounded-lg pt-2 pb-2 pl-4 pr-4 text-white m-4 hover:bg-blue-600 cursor-pointer active:bg-blue-700"
            >
              Login
            </button>
          </div>
        </section>
      )}
    </main>
  );
}

export default Page;
