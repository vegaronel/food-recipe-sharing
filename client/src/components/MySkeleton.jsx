import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

function MySkeleton() {
  return ( 
        <div className="flex flex-col space-y-3 ">
            <Skeleton className="h-[125px] w-[250px] rounded-xl bg-red-400" />
            <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-red-400" />
            <Skeleton className="h-4 w-[200px] bg-red-400" />
            </div>
        </div>
  )
}

export default MySkeleton
