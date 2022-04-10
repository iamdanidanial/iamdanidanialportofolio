import Link from 'next/link';

const certifications = [
  {
    id: 1,
    judul: 'Menjadi Front-End Web Developer Expert',
    partner: 'Dicoding Indonesia',
    stack: 'Front-End Web',
    linkcertificate: 'https://www.dicoding.com',
    linksilabus: 'https://www.dicoding.com/academies/219/tutorials',
    linkpartner: 'https://www.dicoding.com',
    imageSrc: '/assets/frontend-expert.jpg',
    imageAlt: 'Logo Front End Expert',
  },
  {
    id: 2,
    judul: 'Membangun Progressive Web Application',
    partner: 'Dicoding Indonesia',
    stack: 'Front-End Web',
    linkcertificate: '',
    linksilabus: 'https://www.dicoding.com/academies/74/tutorials',
    linkpartner: 'https://www.dicoding.com',
    imageSrc: '/assets/frontend-profesional.jpg',
    imageAlt: 'Logo Membangun Progressive Web Application',
  },
  {
    id: 3,
    judul: 'Belajar Fundamental Front-End Web Development',
    partner: 'Dicoding Indonesia',
    stack: 'Front-End Web',
    linkcertificate: '',
    linksilabus: 'https://www.dicoding.com/academies/163/tutorials',
    linkpartner: 'https://www.dicoding.com',
    imageSrc: '/assets/frontend-fundamental.jpg',
    imageAlt: 'Logo Belajar Fundamental Front-End Web Development',
  },
  {
    id: 4,
    judul: 'Belajar Membuat Front-End Web untuk Pemula',
    partner: 'Dicoding Indonesia',
    stack: 'Front-End Web',
    linkcertificate: '',
    linksilabus: 'https://www.dicoding.com/academies/315/tutorials',
    linkpartner: 'https://www.dicoding.com',
    imageSrc: '/assets/frontend-pemula.jpg',
    imageAlt: 'Logo Belajar Membuat Front-End Web untuk Pemula',
  },

  {
    id: 5,
    judul: 'React JS Development bersama Sanbercode',
    partner: 'Jabar Coding Camp',
    stack: 'Front-End Web',
    linkcertificate: '',
    linksilabus: '',
    linkpartner: 'https://jabarcodingcamp.id/',
    imageSrc: '/assets/jabarcoding.png',
    imageAlt: 'Logo React JS Development bersama Sanbercode',
  },

  {
    id: 6,
    judul: 'Belajar Dasar Pemrograman dengan JavaScript',
    partner: 'Dicoding Indonesia',
    stack: 'Dasar Pemrograman',
    linkcertificate: '',
    linksilabus: 'https://www.dicoding.com/academies/256/tutorials',
    linkpartner: 'https://www.dicoding.com',
    imageSrc: '/assets/dasar-javascript.jpg',
    imageAlt: 'Logo Belajar Dasar Pemrograman dengan JavaScript',
  },
  {
    id: 7,
    judul: 'Pengenalan Data pada Pemrograman (Data 101)',
    partner: 'Dicoding Indonesia',
    stack: 'Dasar Pemrograman',
    linkcertificate: '',
    linksilabus: 'https://www.dicoding.com/academies/297/tutorials',
    linkpartner: 'https://www.dicoding.com',
    imageSrc: '/assets/dasar-data.jpg',
    imageAlt: 'Logo Pengenalan Data pada Pemrograman (Data 101)',
  },
  {
    id: 8,
    judul: 'Pengenalan ke Logika Pemrograman (Programming Logic 101)',
    partner: 'Dicoding Indonesia',
    stack: 'Dasar Pemrograman',
    linkcertificate: '',
    linksilabus: 'https://www.dicoding.com/academies/302/tutorials',
    linkpartner: 'https://www.dicoding.com',
    imageSrc: '/assets/dasar-logika.jpg',
    imageAlt: 'Logo Pengenalan ke Logika Pemrograman (Programming Logic 101)',
  },
  {
    id: 9,
    judul: 'Meniti Karier sebagai Software Developer',
    partner: 'Dicoding Indonesia',
    stack: 'Dasar Pemrograman',
    linkcertificate: '',
    linksilabus: 'https://www.dicoding.com/academies/292/tutorials',
    linkpartner: 'https://www.dicoding.com',
    imageSrc: '/assets/dasar-karir.jpg',
    imageAlt: 'Logo Meniti Karier sebagai Software Developer',
  },
  {
    id: 10,
    judul: 'Belajar Prinsip Dasar Pemrograman SOLID',
    partner: 'Dicoding Indonesia',
    stack: 'Dasar Pemrograman',
    linkcertificate: '',
    linksilabus: 'https://www.dicoding.com/academies/169/tutorials',
    linkpartner: 'https://www.dicoding.com',
    imageSrc: '/assets/dasar-solid.jpg',
    imageAlt: 'Logo Belajar Prinsip Dasar Pemrograman SOLID',
  },
  {
    id: 11,
    judul: 'Belajar Dasar Visualisasi Data (Pra-Visualisasi dan Data Visual)',
    partner: 'Dicoding Indonesia',
    stack: 'Dasar Pemrograman',
    linkcertificate: '',
    linksilabus: 'https://www.dicoding.com/academies/177/tutorials',
    linkpartner: 'https://www.dicoding.com',
    imageSrc: '/assets/dasar-visualisasi.jpg',
    imageAlt:
      'Logo Belajar Dasar Visualisasi Data (Pra-Visualisasi dan Data Visual)',
  },

  {
    id: 12,
    judul: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
    partner: 'Dicoding Indonesia',
    stack: 'Back End Dev',
    linkcertificate: '',
    linksilabus: 'https://www.dicoding.com/academies/261/tutorials',
    linkpartner: 'https://www.dicoding.com',
    imageSrc: '/assets/backend-pemula.jpg',
    imageAlt: 'Logo Belajar Membuat Aplikasi Back-End untuk Pemula',
  },

  {
    id: 13,
    judul: 'Menjadi Back-End Developer Expert',
    partner: 'Dicoding Indonesia',
    stack: 'Back End Dev',
    linkcertificate: '',
    linksilabus: 'https://www.dicoding.com/academies/276/tutorials',
    linkpartner: 'https://www.dicoding.com',
    imageSrc: '/assets/backend-expert.jpg',
    imageAlt: 'Menjadi Back-End Developer Expert Logo',
  },
  {
    id: 14,
    judul: 'Belajar Fundamental Aplikasi Back-End',
    partner: 'Dicoding Indonesia',
    stack: 'Back End Dev',
    linkcertificate: '',
    linksilabus: 'https://www.dicoding.com/academies/271/tutorials',
    linkpartner: 'https://www.dicoding.com',
    imageSrc: '/assets/backend-fundamental.jpg',
    imageAlt: 'Logo Belajar Fundamental Aplikasi Back-End',
  },

  {
    id: 15,
    judul: 'Belajar Android Jetpack Pro',
    partner: 'Dicoding Indonesia',
    stack: 'Android Dev',
    linkcertificate: '',
    linksilabus: 'https://www.dicoding.com/academies/129/tutorials',
    linkpartner: 'https://www.dicoding.com',
    imageSrc: '/assets/android-expert.jpg',
    imageAlt: 'Logo Belajar Android Jetpack Pro',
  },
  {
    id: 16,
    judul: 'Belajar Fundamental Aplikasi Android',
    partner: 'Dicoding Indonesia',
    stack: 'Android Dev',
    linkcertificate: '',
    linksilabus: 'https://www.dicoding.com/academies/14/tutorials',
    linkpartner: 'https://www.dicoding.com',
    imageSrc: '/assets/android-fundamental.jpg',
    imageAlt: 'Logo Belajar Fundamental Aplikasi Android',
  },
  {
    id: 17,
    judul: 'Belajar Membuat Aplikasi Android untuk Pemula',
    partner: 'Dicoding Indonesia',
    stack: 'Android Dev',
    linkcertificate: '',
    linksilabus: 'https://www.dicoding.com/academies/51/tutorials',
    linkpartner: 'https://www.dicoding.com',
    imageSrc: '/assets/android-pemula.jpg',
    imageAlt: 'Logo Belajar Membuat Aplikasi Android untuk Pemula',
  },
  {
    id: 18,
    judul: 'Memulai Pemrograman Dengan Kotlin',
    partner: 'Dicoding Indonesia',
    stack: 'Dasar Pemrograman',
    linkcertificate: '',
    linksilabus: 'https://www.dicoding.com/academies/80/tutorials',
    linkpartner: 'https://www.dicoding.com',
    imageSrc: '/assets/dasar-kotlin.jpg',
    imageAlt: 'Logo Memulai Pemrograman Dengan Kotlin',
  },
  {
    id: 19,
    judul: 'Memulai Pemrograman Dengan Dart',
    partner: 'Dicoding Indonesia',
    stack: 'Dasar Pemrograman',
    linkcertificate: '',
    linksilabus: 'https://www.dicoding.com/academies/191/tutorials',
    linkpartner: 'https://www.dicoding.com',
    imageSrc: '/assets/dasar-dart.jpg',
    imageAlt: 'Logo Memulai Pemrograman Dengan Dart',
  },

  // {
  //   id: 6,
  //   judul: '',
  //   partner: 'Dicoding Indonesia',
  //   stack: '',
  //   linkcertificate: '',
  //   linksilabus: '',
  //   linkpartner: 'https://www.dicoding.com',
  //   imageSrc: '/assets/j',
  //   imageAlt: '',
  // },
  // More products...
];

export default function Certification() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="px-4 sm:px-0">
          <h1 className="text-2xl font-extrabold tracking-tight text-sky-600 sm:text-3xl">
            Pelatihan Profesional
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Merupakan riwayat pendidikan yang pernah saya tempuh
          </p>
        </div>

        <div className="mt-4 space-y-4 sm:space-y-2">
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
            {certifications.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
              >
                <p className="absolute top-0 right-0 mt-40 text-sm text-white p-2 bg-sky-500 rounded-tl-2xl">
                  {product.stack}
                </p>
                <div className="bg-gray-200 sm:aspect-none sm:h-48">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-48 w-full object-center object-cover sm:w-full sm:h-48"
                  />
                </div>
                <div className="flex-1 p-4 space-y-2 flex flex-col">
                  <h3 className="text-sm font-medium text-sky-900">
                    <a
                      href={`https://${product.linkpartner}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {product.judul}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500">
                    Oleh: {product.partner}
                  </p>
                  <div className="flex flex-row justify-between">
                    <a
                      href={product.linkcertificate}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="py-2 px-6 font-sans shadow-sm text-white bg-sky-700 rounded-md hover:bg-blue-800 hover:text-white">
                        Sertifikat
                      </button>
                    </a>

                    <a
                      href={product.linksilabus}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="py-2 px-6 font-sans border-2 border-sky-800 rounded-md hover:bg-blue-800 hover:text-white">
                        Silabus
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
