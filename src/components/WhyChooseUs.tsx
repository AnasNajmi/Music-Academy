"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "Interactive Guitar & Piano Lessons",
      description:
        "Master the art of guitar and piano with our interactive lessons. Collaborate in real-time with skilled instructors and fellow musicians. Our platform enables you to refine your technique, explore new styles, and elevate your playing, whether you're a beginner or an advanced musician.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Image
            src="/images/piano-guitar.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Live Performance Feedback",
      description:
        "Receive instant feedback during your guitar and piano sessions. Track your progress with real-time corrections and suggestions from expert instructors. Say goodbye to uncertainty and embrace the clarity of immediate feedback, helping you to hone your skills efficiently.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/images/close-up-microphone-concert-stage-with-beautiful-lighting.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Collaborative Music Projects",
      description:
        "Join collaborative music projects focusing on guitar and piano. Our platform ensures seamless coordination with other musicians, so you're always aligned with the latest arrangements. Keep your creativity flowing as you harmonize and innovate with peers.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <Image
            src="/images/group-people-sound-mixer-station.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Expand Your Guitar & Piano Repertoire",
      description:
        "Explore an extensive repertoire of guitar and piano pieces, from classical masterpieces to contemporary hits. Our platform makes it easy to stay updated with the latest trends, helping you to diversify and deepen your musical knowledge and performance skills.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Image
            src="/images/headstock-classical-fingerboard-wood-fretboard.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];


function WhyChooseUs() {
  return (
    <div>
       <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs
