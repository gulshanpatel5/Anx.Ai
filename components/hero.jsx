
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className='w-full pt-36 md:pt-48 pb-10'>
        <div className='space-y-6 text-center'>
            <div className='space-y-6 mx-auto'>
                <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title'>
                    Your AI Career Coach for
                    <br/>
                    Professional success
                </h1>
                <p>
                    Unlock your potential with personalized career guidance powered by AI.
                </p>
            </div>

            <div>
              <Link href="/dashboard">
              <Button size="lg" className="px-8">
               Get Started
              </Button>
              </Link>
              <Link href='www.youtube.com'>
              <Button size={"lg"} variant="outline" className="px-8">
                Get started
              </Button>
              </Link> 
            </div>
            <div>
              <div>
                <Image
                src={"/banner.png"}
                width={1334}
                height={768}
                alt='Banner Anx'
                className='rounded-lg shadow-2xl border mx-auto'
                priority
                />
              </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection