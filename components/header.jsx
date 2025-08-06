"use client";

import Link from 'next/link';
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { Button } from "@/components/ui/button";
import { useStoreUser } from '@/hooks/use-store-user';
import { BarLoader } from 'react-spinners';

const Header = () => {
  const path = usePathname();
  const  {isLoading} = useStoreUser();

  if(path.includes("/editor")){
    return null; // hide  header on editor page
  }

  return (
    <header className='fixed top-6 left-1/2 transform -translate-x-1/2 z-50 text-nowrap'>
      <div className='backdrop-blur-md bg-white/10 border-white/20 rounded-full px-8 py-3 flex items-center justify-center gap-8'>
        <Link href="/" className='mr-10 md:mr-20'>
          <Image src="/pexel.png"
            alt="pexel log"
            className="min-w-24 object-cover"
            width={96}
            height={24}
          />
        </Link>

        {path === '/' && <div className='hidden md:flex space-x-6'>

          <Link
            href="#features"
            className='text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer'
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className='text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer'
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className='text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer'
          >
            Features
          </Link>

        </div>}

        <div className='flex items-center gap-3 ml-10 md:ml-20'>
          <SignedOut>
              <SignInButton>
                <Button variant="glass" className="hidden sm:flex">Sign In</Button>
              </SignInButton>
              <SignUpButton>
                
                <Button variant="primary">Get Started</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
              appearance={{
                elements:{
                  avatarBox: "w-10 h-10",
                }
              }} 
              />
            </SignedIn>
        </div>

          {isLoading && <BarLoader/>}
          
      </div>
    </header>
  )
}

export default Header
