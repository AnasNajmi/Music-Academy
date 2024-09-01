'use client'
import Link from "next/link"
import { Button } from "./ui/moving-border"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinar = [
    {
      title: "Understanding Music Theory",
      description: "Dive deep into the fundamentals of music theory and enhance your musical skills",
      slug: "Understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "Mastering Guitar Techniques",
      description: "Learn advanced guitar techniques from expert musicians and elevate your playing.",
      slug: "Mastering-guitar-techniques",
      isFeatured: true,
    },
    {
      title: "Introduction to Jazz Improvisation",
      description: "Explore the art of jazz improvisation and develop your improvisational skills.",
      slug: "Introduction-to-jazz-improvisation",
      isFeatured: true,
    },
    {
      title: "Voice Training Techniques",
      description: "Discover effective vocal training techniques to improve your singing abilities.",
      slug: "Voice-training-techniques",
      isFeatured: true,
    },
    {
      title: "Composition Masterclass",
      description: "Unlock the secrets of composition with tips from renowned composers.",
      slug: "Composition-masterclass",
      isFeatured: true,
    },
    {
      title: "Music Production Essentials",
      description: "Learn the basics of music production, from recording to mixing and mastering your tracks.",
      slug: "Music-production-essentials",
      isFeatured: true,
    }
  ];




  return (
    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px/-6">
         
         <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold 
            tracking-wide uppercase">FEATURED WEBINARS</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">ENHANCE YOUR MUSICAL JOURNEY</p>
         </div>
         
         <div className="mt-10 text-center">
          <HoverEffect items={featuredWebinar.map(webinar =>(
            {
              title: webinar.title,
              description: webinar.description,
              link: '/',
            }
          ))} />

         </div>
         
         <div className="mt-10 text-center">
            <Link href={'/courses'}>
            <Button borderRadius="1.75rem"
        className="bg-white dark:bg-slate-800 text-black
         dark:text-white border-neutral-200 dark:border-slate-500"
            >
                View All Webinars</Button>

            </Link>
         </div>

            
        </div>
      
    </div>
  )
}

export default UpcomingWebinars
