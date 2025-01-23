import React from 'react'
import DashboardHeader from './DashboardHeader'
import DashboardFooter from './DashboardFooter'
import { Outlet } from 'react-router'

function DashboardLayout() {
  return (
    <div>
        <DashboardHeader />
        <Outlet />
        <DashboardFooter />
    </div>
  )
}

export default DashboardLayout
