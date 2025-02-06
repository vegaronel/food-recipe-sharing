import React from 'react'
import { cn } from '@/lib/utils'

function MyButton({ children, className, ...props }) {
  return (
    <button className={cn(`
        bg-accent 
        text-white 
        hover:bg-accent-hover 
        px-4 py-2 ` , 
        className)} 
        {...props}>{children}</button>
  )
}

export default MyButton
