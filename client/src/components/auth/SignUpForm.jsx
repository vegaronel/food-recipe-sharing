import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Input } from '../ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

export default function SignUpForm({ className, ...props }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    retypePassword: '',
  });

  const [message, setMessage] = useState({
    error: false,
    success: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setMessage({
      error: '',
      success: false,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);
    try {
      const fetchData = async () => {
        const URL = import.meta.env.VITE_API_URL;
        const response = await fetch(`${URL}/api/auth/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          setMessage({ ...message, error: true });
          return;
        }
        setFormData({
          first_name: '',
          last_name: '',
          username: '',
          email: '',
          password: '',
          retypePassword: '',
        })
        setMessage({ ...message, success: true });
      };
      fetchData();
    } catch (error) {
      setMessage({ ...message, error: true });
    }
   
  };

  return (
    <div className={`flex flex-col gap-6 ${className}`} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>Create an account to get started</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {message.success && (
            <Alert className="gap-2 bg-green-100 text-green-800 border border-green-300">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Registration successful. Please login to continue.
              </AlertDescription>
            </Alert>
          )}
          {message.error && (
            <Alert className="gap-2 bg-red-100 text-red-800 border border-red-300">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Email already in used</AlertTitle>
              <AlertDescription>Please change the email address.</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              {formInput.map((item, index) => (
                <Input
                  key={index}
                  name={item.name}
                  label={item.label}
                  type={item.type}
                  placeholder={item.placeholder}
                  value={formData[item.name]}
                  onChange={handleChange}
                />
              ))}
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <Link to="/login" className="underline underline-offset-4 hover:text-primary">
                Log in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

const formInput = [
  {
    name: 'username',
    type: 'text',
    placeholder: 'johndoe123',
    label: 'Username',
  },
  {
    name: 'first_name',
    type: 'text',
    label: 'First Name',
    placeholder: 'John',
  },
  {
    name: 'last_name',
    type: 'text',
    label: 'Last Name',
    placeholder: 'Doe',
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'john@example.com',
    label: 'Email',
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
  },
  {
    name: 'retypePassword',
    type: 'password',
    label: 'Re-enter Password',
    placeholder: 'Re-enter your password',
  },
];
