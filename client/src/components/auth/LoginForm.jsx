import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router';
import { Icons } from '@/components/ui/icons';
import { Link } from 'react-router';
import supabase from '@/helper/supabaseClient';

function LoginForm({ className, ...props }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error, data } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
        options: {
          emailRedirectTo: 'https://shareflavor.vercel.app/dashboard',
        },
      });

      if (error) {
        setMessage(error.message);
        setPassword("");
        return;
      }

      if (data) {
        localStorage.setItem("supabaseAuth", JSON.stringify({ user: data.user , session: data.session }))
      
        navigate("/dashboard")
        console.log(data);
        setMessage("Success Login");
        return null
      }
  
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`flex flex-col gap-6 max-w-lg mx-auto ${className}`} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          {message && <div className={`bg-green-100 text-green-900 p-2 rounded my-2`}>{message}</div>}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full hover:bg-slate-300">
                Login
              </Button>
            </div>
          </form>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <Button variant="outline" className="w-full" onClick={() => {}}>
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
          <div className="mt-4 text-center text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="underline underline-offset-4 hover:text-primary">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginForm;
