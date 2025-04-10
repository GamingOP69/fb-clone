
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an authentication service
    if (!email || !password) {
      toast({
        title: "Missing Information",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Login Attempted",
      description: "This is a clone. No actual login occurred.",
    });
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow p-4 md:p-6">
      <form onSubmit={handleLogin} className="space-y-4">
        <Input
          type="text"
          placeholder="Email address or phone number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 text-lg"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-12 text-lg"
        />
        <Button 
          type="submit" 
          className="w-full h-12 text-lg font-bold bg-facebook-blue hover:bg-facebook-blue/90"
        >
          Log In
        </Button>
        <div className="text-center">
          <a href="#" className="text-facebook-blue hover:underline text-sm">
            Forgotten password?
          </a>
        </div>
        <Separator className="my-4" />
        <div className="flex justify-center">
          <Button 
            type="button"
            className="bg-facebook-green hover:bg-facebook-green/90 text-white font-bold text-lg px-4 py-2"
          >
            Create New Account
          </Button>
        </div>
      </form>
      <div className="mt-6 text-center text-sm">
        <p><strong>Create a Page</strong> for a celebrity, brand or business.</p>
      </div>
    </div>
  );
};

export default LoginForm;
