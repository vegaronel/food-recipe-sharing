import { useLocation } from "react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { Outlet } from "react-router";
import { BreadCrumb } from "@/components/BreadCrumb";
import { Input } from "@/components/ui/input"


function DashboardHeader() {
  const location = useLocation();

  // Define breadcrumb paths for different pages
  const path = {
    Dashboard: [
      { label: "Dashboard", link: "/dashboard" }, // Only show "Dashboard" for the /dashboard route
    ],
    DashboardNested: [
      { label: "Dashboard", link: "/dashboard" },
      { label: "Docs", link: "/dashboard/docs" },
      { label: "Components", link: "/docs/components" },
    ],
    Profile: [
      { label: "Profile", link: "/dashboard/profile" },
      { label: "Settings", link: "/dashboard/profile/settings" },
      { label: "Account", link: "/dashboard/profile/account" },
    ],
  };

  // Determine the current page based on the route
  const getCurrentPage = () => {
    if (location.pathname === "/dashboard") {
      return "Dashboard"; // Only show "Dashboard" for the /dashboard route
    } else if (location.pathname.startsWith("/dashboard/profile")) {
      return "Profile";
    } else if (location.pathname.startsWith("/dashboard")) {
      return "DashboardNested"; // Use the nested breadcrumb for other /dashboard/* routes
    }
    return "Dashboard"; // Default to Dashboard
  };

  // Get the breadcrumb path for the current page
  const currentPath = path[getCurrentPage()];

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-3 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <BreadCrumb path={currentPath} />
          </div>
          <div className="flex items-center ">
          Search
            <Input />
        
          </div>
        </div>

        {/* CONTENT */}
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default DashboardHeader;
