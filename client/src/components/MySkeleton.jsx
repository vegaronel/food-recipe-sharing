import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function MySkeleton() {
  return (
    <div className="flex flex-col space-y-3 ">
      <Skeleton className="h-[125px] max-w-[400px] w-full rounded-xl bg-red-200" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-red-200" />
        <Skeleton className="h-4 w-[200px] bg-red-200" />
      </div>
    </div>
  );
}

export default MySkeleton;
