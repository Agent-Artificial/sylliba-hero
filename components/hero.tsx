/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/fdNaBH3qcQy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:



To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoLogoYoutube } from "react-icons/io5";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export function hero() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-900 to-violet-600">
      <header className="py-4 px-4 md:px-6">
        <nav className="flex justify-between items-center">
          <div>
            <Link
              href="#hero"
              className="flex items-center gap-2 hover:3000"
              prefetch={false}
            >
              <Image src="/logo.png" alt="Sylliba" width={32} height={32} />
              <span className="sr-only"></span>
              <span className="text-white font-bold">Sylliba</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              href="#hero"
              className="text-white hover:text-violet-200"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#introduction"
              className="text-white hover:text-violet-200"
              prefetch={false}
            >
              Intro
            </Link>
            <Link
              href="#product"
              className="text-white hover:text-violet-200"
              prefetch={false}
            >
              Product
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-violet-200"
              prefetch={false}
            >
              About
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <section id="hero" className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                  <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
                    Sylliba
                  </span>
                  <br></br>
                  <span className="text-white bg-clip-text">
                    Global understand{" "}
                  </span>
                </h1>
                <p className="mt-4 text-xl text-violet-200">
                  Translate audio and text content in over 76 languages. Built
                  on the back of the Web3 infrastructure we are connecting
                  inference and communication through web3.
                </p>
                <div className="mt-8">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:bg-gradient-to-l"
                  >
                    <Link href="https://translation-cellium.ngrok.app">Get Started</Link>
                  </Button>
                </div>
              </div>
              <div>
                <Image
                  src="/network.png"
                  width={500}
                  height={400}
                  alt="Introduction"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="introduction" className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>                <Image
                  src="/block.png"
                  width={600}
                  height={500}
                  alt="Web3 Translation"
                  className="mx-auto"
                />

              </div>
              <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  Introduction
                </h2>
                <p className="mt-4 text-lg text-violet-200">
                  Sylliba is a simple translation application that can translate
                  your audio. But behind the simple application is a deep
                  learning model trained to speak in 76 languages run on a web3
                  subnet. Sylliba is the first step in a distributed compute
                  network that provides multi modal tooling for AI Agents.
                  Through the Cellium Network; A chain agnostic network of AI
                  tooling, we are connecting blockchains and inference together.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="product" className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  How it works
                </h2>
                <p className="mt-4 text-lg text-violet-200">
                  We are focused on providing intuitive and simple UIs to our
                  tooling for users of all skill levels. Simply select your
                  source language, target lanaguage, input and output modes and
                  hit translate. Within seconds you will have a translation of
                  your content. Sylliba is meant to be a simplified and
                  intuitive user experience. For advanced users and developers,
                  Sylliba can be used as an API.
                </p>
              </div>
              <div>                
                <Image
                  src="/net.png"
                  width={500}
                  height={400}
                  alt="neural network"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
              <Image
                  src="/waves.png"
                  width={500}
                  height={400}
                  alt="waves"
                  className="mx-auto"
                />
              </div>
              <div>                
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  About Us
                </h2>
                <p className="mt-4 text-lg text-violet-200">
                  Out team is comprised of developers, creators, and AI
                  enthusiasts. We found our footing building AI infrastructure
                  in the web3 space. We noticed a lack of user interfaces and
                  noticed the siloed nature of the AI tools currently being
                  offered. We wanted to build an agent framework with different
                  inference types as tooling for our selves and realized we
                  could provide a better and more integrated user experience
                  across multiple chains.
                </p>

              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 px-4 md:px-6 bg-indigo-900">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-white">&copy; 2024 Sylliba. MIT Licensed.</div>
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-4">
              <Link
                href="https://www.youtube.com/@project_eden_ai"
                className="text-white hover:text-violet-200"
                prefetch={false}
              >
                <BsYoutube className="h-6 w-6" />
              </Link>
              <Link
                href="https://x.com/project_eden_ai"
                className="text-white hover:text-violet-200"
                prefetch={false}
              >
                <BsTwitterX className="h-6 w-6" />
              </Link>
              <Link
                href="https://github.com/Agent-Artificial/Sylliba-Subnet"
                className="text-white hover:text-violet-200"
                prefetch={false}
              >
                <FaGithub className="h-6 w-6" />
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}