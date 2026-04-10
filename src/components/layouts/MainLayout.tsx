import { Outlet } from "react-router-dom";
import { Header } from "../shared/Header";
import { Sidebar } from "../shared/Sidebar";

export const MainLayout = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <Header />
        <main className="overflow-y-auto bg-slate-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};