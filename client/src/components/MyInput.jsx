import React from 'react';
import { cn } from '@/lib/utils';

function MyInput({ className, ...props }) {
  return (
    <input
      type="text"
      className={cn(
        `
        px-4 
        py-2 
        w-full 
        bg-slate-200 
        focus:outline-none 
        rounded-l-lg
      `,
        className
      )}
      {...props}
    />
  );
}

export default MyInput;
