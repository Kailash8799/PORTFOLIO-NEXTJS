import About from "@/components/About";
import Bottomnav from "@/components/Bottomnav";
import Contact from "@/components/Contact";
import Mainpage from "@/components/Mainpage";
import Project from "@/components/Project";
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
  const [aboutmodal, setaboutmodal] = useState(false);
  const [aboutmodalanimation, setaboutmodalanimation] = useState(false);
  const [contactmodal, setcontactmodal] = useState(false);
  const [contactmodalanimation, setcontactmodalanimation] = useState(false);
  const [projectmodal, setprojectmodal] = useState(false);
  const [projectmodalanimation, setprojectmodalanimation] = useState(false);
  const [fullscreen,setfullscreen] = useState(false)

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

  function openFullscreen() {
    if (window.document !== undefined) {
      let elem = window.document.body;
      if (document.fullscreenElement) {
        document.exitFullscreen();
        setfullscreen(false)
        return;
    }
      if (elem.requestFullscreen) {
        setfullscreen(true)
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        setfullscreen(true)
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        setfullscreen(true)
        elem.msRequestFullscreen();
      }
    }
  }
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
          // openFullscreen()
        }}
        className="fixed top-0 w-screen h-screen"
      >
        {aboutmodal && (
          <About
            aboutmodalanimation={aboutmodalanimation}
            setaboutmodalanimation={setaboutmodalanimation}
            setaboutmodal={setaboutmodal}
            setprojectmodal={setprojectmodal}
            setprojectmodalanimation={setprojectmodalanimation}
            setcontactmodal={setcontactmodal}
            setcontactmodalanimation={setcontactmodalanimation}
          />
        )}
        {contactmodal && (
          <Contact
            aboutmodalanimation={aboutmodalanimation}
            setaboutmodalanimation={setaboutmodalanimation}
            setaboutmodal={setaboutmodal}
            setprojectmodal={setprojectmodal}
            setprojectmodalanimation={setprojectmodalanimation}
            setcontactmodal={setcontactmodal}
            contactmodal={contactmodal}
            contactmodalanimation={contactmodalanimation}
            setcontactmodalanimation={setcontactmodalanimation}
          />
        )}
        {projectmodal && (
          <Project
            setaboutmodal={setaboutmodal}
            setaboutmodalanimation={setaboutmodalanimation}
            projectmodal={projectmodal}
            setprojectmodal={setprojectmodal}
            projectmodalanimation={projectmodalanimation}
            setprojectmodalanimation={setprojectmodalanimation}
          />
        )}
        {alertmodal && (
          <TopAlert
            setAlertmodal={setAlertmodal}
            setAlertmodalanimation={setAlertmodalanimation}
            alertmodalanimation={alertmodalanimation}
            alertmodal={alertmodal}
          />
        )}
        <TopNavbar
          modal={modal}
          setModal={setModal}
          setaboutmodal={setaboutmodal}
          setaboutmodalanimation={setaboutmodalanimation}
          setcontactmodal={setcontactmodal}
          setcontactmodalanimation={setcontactmodalanimation}
          setprojectmodal={setprojectmodal}
          setprojectmodalanimation={setprojectmodalanimation}
        />
        <Mainpage
          fullscreen={fullscreen}
          openFullscreen={openFullscreen}
          setprojectmodal={setprojectmodal}
          setprojectmodalanimation={setprojectmodalanimation}
        />
        <div className="items-center justify-center text-center">
          <Bottomnav
            setprojectmodal={setprojectmodal}
            setprojectmodalanimation={setprojectmodalanimation}
          />
        </div>
      </main>
    </>
  );
}
