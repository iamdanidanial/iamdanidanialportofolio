/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { DownloadIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const navigation = [
  {
    judul: 'Beranda',
    href: '/',
  },
  {
    judul: 'Projects',
    href: '/projects',
  },
  {
    judul: 'Pengalaman',
    href: '/experience',
  },
  {
    judul: 'Tentang',
    href: '/about',
  },
];

export default function Header() {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-sky-500 shadow-md sticky top-0 z-10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-sky-500 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-600">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-12 w-auto"
                    src="/assets/logokecil.png"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-12 w-auto"
                    src="/assets/logo.png"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8 text-white font-semibold items-center px-1 pt-1 text-lg">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {navigation.map((nav) => (
                    <Link href={nav.href} key={nav.judul}>
                      <a className="border-transparent hover:text-sky-700 inline-flex items-center p-1 text-white font-semibold text-lg">
                        {nav.judul}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a
                    href="https://drive.google.com/file/d/1hLMyImxLA7O-ghuzom64ZgfsSokLAU0a/view?usp=sharing"
                    target="blank"
                  >
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-sky-700 bg-white  shadow-sm hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <DownloadIcon
                        className="-ml-1 mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      <span>Download Resume</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div>
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {navigation.map((nav) => (
                <Link href={nav.href} key={nav.judul}>
                  <a className="border-transparent text-white bg-sky-600 hover:bg-gray-50 hover:border-sky-700 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
                    {nav.judul}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
