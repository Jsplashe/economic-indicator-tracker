import { redirect } from "next/navigation"

export default function Home() {
  // Redirect to login page on home page
  redirect("/login")
}

