import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { Input } from '../ui/input';

export default function SignUpForm({ className, ...props }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    retypePassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setError(''); // Clear errors on input change
    setSuccess(false); // Reset success message
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(formData);
    // Validate passwords match
    if (formData.password !== formData.retypePassword) {
      return setError('Passwords do not match.');
    }

    try {
      const response = await axios.post('http://localhost:3000/auth/register', {
        username: formData.username,
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password,
        retypePassword: formData.retypePassword,
      });

      if (response.status === 201) {
        setSuccess(true);
        setError('');
        setFormData({
          first_name: '',
          last_name: '',
          username: '',
          email: '',
          password: '',
          retypePassword: '',
        });
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'An error occurred. Please try again.';
      setError(errorMessage);
      setSuccess(false);
    }
  };
  
  return (
    <div className={`flex flex-col gap-6 ${className}`} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>Create an account to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {/* Error Message */}
            {error && (
              <div className="px-4 py-2 text-sm text-red-900 bg-red-200 rounded mb-4">
                <p>{error}</p>
              </div>
            )}
            {/* Success Message */}
            {success && (
              <div className="px-4 py-2 text-sm text-green-900 bg-green-200 rounded mb-4">
                <p>Registration successful! You can now log in.</p>
              </div>
            )}

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
  },
  {
    name: 'retypePassword',
    type: 'password',
    label: 'Re-enter Password',
  },
];
