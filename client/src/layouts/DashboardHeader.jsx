import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import { Outlet } from "react-router";

 function DashboardHeader() {
  return (
    <SidebarProvider>
    <AppSidebar />
    <main className='p-3 w-full'>
      <SidebarTrigger />
      {/* CONTENT */}
      <Outlet />
    </main>
  </SidebarProvider>
  )
}
export default DashboardHeader
