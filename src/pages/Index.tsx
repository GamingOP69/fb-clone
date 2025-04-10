
import React from 'react';
import FacebookLogo from '@/components/FacebookLogo';
import LoginForm from '@/components/LoginForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-facebook-gray">
      <main className="flex-grow flex flex-col lg:flex-row items-center justify-center px-4 py-8 lg:py-32 max-w-6xl mx-auto gap-10">
        <div className="flex flex-col items-center lg:items-start lg:mr-8 mb-4 lg:mb-0 max-w-md">
          <FacebookLogo />
          <h2 className="text-xl lg:text-3xl mt-4 text-center lg:text-left">
            Connect with friends and the world around you on Facebook.
          </h2>
        </div>

        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
