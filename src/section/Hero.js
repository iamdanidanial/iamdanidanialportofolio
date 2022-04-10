import Image from 'next/image';
import React from 'react';
import Button from '../atoms/Button';

export default function Hero() {
  return (
    <div>
      {/* Hero card */}
      <div className="relative overflow-hidden">
        <div className="min-h-full absolute inset-x-0 bottom-0 bg-gray-100" />
        <div className="mx-auto">
          <div className="relative shadow-xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="/assets/danicover.jpg"
                alt="People working on laptops"
              />
              <div className="absolute inset-0 bg-sky-700 mix-blend-multiply" />
            </div>
            <div className="relative max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-20 lg:px-32">
              <p className="text-white text-xl">Selamat datang, saya</p>
              <h1 className="text-4xl tracking-tight sm:text-5xl font-bold lg:text-7xl mt-6 text-white">
                Dani Danial
              </h1>
              <h3 className="text-3xl tracking-tight sm:text-3xl font-bold lg:text-7xl mt-2 text-sky-300">
                Front-End Web dan Mobile Apps Developers
              </h3>
              <p className="mt-6 max-w-lg text-xl text-white sm:max-w-2xl">
                Hello, Nama Saya Dani Danial seorang full stack developers
                berasal dari Kabupaten Cianjur, Indonesia
              </p>

              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://drive.google.com/file/d/1hLMyImxLA7O-ghuzom64ZgfsSokLAU0a/view?usp=sharing"
                    target="blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Download Resume
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="https://github.com/iamdanidanial"
                    target="blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className=" max-w-screen-xl flex lg:flex-row items-center mx-auto mt-20  flex-col-reverse">

    //   <div className="prose prose-lg lg:m-1 m-4">
    //     <p>Welcome, I am</p>
    //     <p className="text-sky-600 text-7xl font-bold">Dani Danial.</p>
    //     <p className="text-sky-400 text-5xl font-light">
    //       Front End Web dan Android Developers
    //     </p>
    //     <p className="mt-10 mb-10">
    //       I am a software developer based in Jawa Barat, Indonesia. specializing
    //       in building exceptional websites and mobile applications, and
    //       everything in between.
    //     </p>
    //     <Button title="Get in touch" />
    //   </div>
    //   <div className="text-center rounded">
    //     <Image src="/dani.jpg" alt="Tentang" width={300} height={300}></Image>
    //   </div>
    // </div>
  );
}
