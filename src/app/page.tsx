import { UserButton } from "@clerk/nextjs";
import { auth, getAuth } from "@clerk/nextjs/server";

export default function HomePage() {
  auth().protect();
  const { userID } = auth();

  return (
    <main>
      <UserButton />
      <h1>hello</h1>
    </main>
  );
}
