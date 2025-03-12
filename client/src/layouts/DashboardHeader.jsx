import { useLocation } from 'react-router';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/ui/app-sidebar';
import { Outlet } from 'react-router';
function DashboardHeader() {
  const location = useLocation();


  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-3 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
          </div>
        </div>

        {/* CONTENT */}
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default DashboardHeader;
