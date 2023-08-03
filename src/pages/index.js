import Bottomnav from "@/components/Bottomnav";
import TopNavbar from "@/components/TopNavbar";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [preloading, setPreloading] = useState(true);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    setTimeout(() => {
      setPreloading(false);
    }, 4000);
  }, []);

  if (preloading || !mounted)
    return (
      <div className="fixed top-0 right-0 z-50 w-screen h-screen bg-black">
        <div className="flex items-center justify-center w-full h-full ">
          <Image
            src={"/ios.png"}
            className="animate-pulse"
            alt="Compass Image"
            width={40}
            height={40}
          />
        </div>
      </div>
    );
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <main className="fixed top-0 w-screen h-screen backimg">
        <TopNavbar />
        <h1 className="">Hello</h1>
        <div className="items-center justify-center">
          <Bottomnav />
        </div>
      </main>
    </>
  );
}
