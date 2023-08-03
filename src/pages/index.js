import Bottomnav from "@/components/Bottomnav";
import Mainpage from "@/components/Mainpage";
import TopAlert from "@/components/TopAlert";
import TopNavbar from "@/components/TopNavbar";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [preloading, setPreloading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [modal, setModal] = useState(false);
  const [alertmodal, setAlertmodal] = useState(false);
  const [alertmodalanimation, setAlertmodalanimation] = useState(false);
  useEffect(() => {
    setMounted(true);
    setTimeout(() => {
      setPreloading(false);
    }, 4000);
    setTimeout(() => {
      setAlertmodal(true);
      setAlertmodalanimation(true);
    }, [5000]);
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
      <main
        onClick={() => {
          setModal(false);
        }}
        className="fixed top-0 w-screen h-screen"
      >
        {alertmodal && (
          <TopAlert
            setAlertmodal={setAlertmodal}
            setAlertmodalanimation={setAlertmodalanimation}
            alertmodalanimation={alertmodalanimation}
            alertmodal={alertmodal}
          />
        )}
        <TopNavbar modal={modal} setModal={setModal} />
        <Mainpage />
        <div className="items-center justify-center text-center">
          <Bottomnav />
        </div>
      </main>
    </>
  );
}
