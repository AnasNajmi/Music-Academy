'use client';

import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import Head from "next/head"; 

function Page() {
  return (
    <div className="w-screen h-screen bg-slate-800 pt-36">
      <Head>
        <title>Contact Us</title>
        {/* Any other metadata you need */}
      </Head>
      <div>
        <h1 className="font-bold text-2xl text-white mt-1 text-center">
          Contact Us
        </h1>

        <p className="text-white text-center mt-4">
          Contact Us now and tune your life&apos;s sound on the right track
        </p>

        <div className="flex justify-center mt-8">
          <input
            type="text"
            className="rounded-lg h-12 w-96 bg-slate-400 text-black p-4 font-bold placeholder-gray-600"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex justify-center mt-8">
          <textarea
            className="rounded-lg h-40 w-96 bg-slate-400 text-black p-4 font-bold placeholder-gray-600 resize-y"
            placeholder="Write your message here..."
          />
        </div>

        {/* Submit Now Button Section */}
        <div className="flex justify-center mt-6">
          <Link href="/">
            <Button
              borderRadius="1rem"
              className="bg-white text-black dark:bg-slate-600 dark:text-white border-neutral-200 dark:border-slate-500 px-6 py-2"
            >
              Submit Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Meteor effect */}
      <Meteors number={20} />
    </div>
  );
}

export default Page;
