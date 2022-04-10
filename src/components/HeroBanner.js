import React from 'react';

export default function HeroBanner({ judul, deskripsi, image }) {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" src={image} alt="" />
        <div
          className="absolute inset-0 bg-sky-700 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-5xl">
          {judul}
        </h1>
        <p className="mt-6 text-xl text-sky-100 max-w-3xl">{deskripsi}</p>
      </div>
    </div>
  );
}
