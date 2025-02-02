import { redirect } from "next/navigation";

const Homepage = () => {
  redirect("/auth/login");
  // Redirect to login until landing page is ready

  return null;
};

export default Homepage;
