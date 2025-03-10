import React from 'react';
import LoginForm from '@/components/auth/LoginForm';

export default function Login() {
 
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <LoginForm />
    </div>
  );
}