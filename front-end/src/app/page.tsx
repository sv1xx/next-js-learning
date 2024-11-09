import Sidebar from "@/components/sidebar/Sidebar";
import AuthPage from "./auth/page";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center h-[100dvh]">
      {/* <Sidebar /> */}
      <AuthPage type="REGISTER" />
    </div>
  );
}
