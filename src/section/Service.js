import { urlObjectKeys } from 'next/dist/shared/lib/utils';
import Image from 'next/image';
import React from 'react';
import data from '../assets/newdata';
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Web Development',
    image: '/web.png',
    deskripsi:
      'Membuat web app sesuai kebutuhan anda dengan Library React JS dan Framewok Next JS',
  },
  {
    name: 'Tugas Kuliah',
    image: '/task.png',
    deskripsi:
      'Membantu menyelesaikan permasalahan tugas kuliah anda terkait dengan dev app',
  },
  {
    name: 'Landing Page',
    image: '/landing.png',
    deskripsi: 'Butuh landing page untuk company profile? atau web profile',
  },
  {
    name: 'Full stack App',
    image: '/full.png',
    deskripsi: 'butuh applikasi multiplatform? bisa anda dapatkan disini',
  },
  {
    name: 'Undangan Pernikahan',
    image: '/letter.png',
    deskripsi:
      'Mau undangan pernikahan Digital ? banyak pilihan template nya loh...',
  },
  {
    name: 'Portofolio',
    image: '/personal.png',
    deskripsi:
      'ingin punya portofolio yang menarik hfkdjaf hkjs fshkjf smfhskjfsdm skjhfls',
  },
];

export default function Service() {
  return (
    <div
      className="w-full relative inset-0 bg-no-repeat py-10 -z-10"
      style={{ backgroundImage: "url('/cerita-kiri.svg')" }}
    >
      <div className="relative py-16 sm:py-24 lg:py-2">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <p className="mt-2 text-3xl font-extrabold text-sky-700 tracking-tight sm:text-5xl">
            Service
          </p>
          <p className="mt-2 text-3xl text-gray-900 tracking-tight sm:text-3xl">
            Semua yang kamu butuhkan ada disini
          </p>
          <p className="mx-auto text-sm text-gray-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla in.
            Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
            condimentum id viverra nulla.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {data.service.map((feature) => (
                <div key={feature.judul} className="pt-6">
                  <div className="flow-root bg-sky-100 rounded-lg px-6 pb-8 shadow-md shadow-sky-500">
                    <div className="-mt-8">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-sky-300 rounded-md shadow-xl">
                          <Image
                            src={feature.image}
                            height={150}
                            width={150}
                            alt="nana"
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-sky-900 tracking-tight">
                        {feature.judul}
                      </h3>
                      {/* <p className="mt-5 text-base text-gray-500">
                        {feature.deskripsi}
                      </p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 -z-10">
        <Image
          src="/cerita-kanan.svg"
          alt="background"
          width={500}
          height={1000}
          objectFit="cover"
        ></Image>
      </div>
    </div>
  );
}
