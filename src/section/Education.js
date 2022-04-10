import { CheckIcon } from '@heroicons/react/outline';

const riwayatpendidikan = [
  {
    id: 1,
    name: 'Universitas Putra Indonesia',
    jurusan: 'S1 - Teknik Informatika',
    ipk: '3.73',
    tahunlulus: '2019',
    description:
      'Perancangan dan Implementasi Aplikasi Pelayanan dan Informasi Berbasis Web Mobile Desa Mekarjaya dengan Metodologi Extream Programming. Pelayanan App Android dengan Kotlin dan Web App admin dengan Framework Codeignaiter serta database MySQL',
    href: '#',
    price: '3.73',
    status: 'out-for-delivery',
    date: 'January 5, 2021',
    datetime: '2021-01-05',
    imageSrc: '/assets/unpi2.png',
    imageAlt: 'Logo Universitas Putra Indonesia',
  },
  {
    id: 2,
    name: 'SMK Kujang Pilawa',
    jurusan: 'Rekayasa Perangkat Lunak',
    tahunlulus: '2013',
    ipk: '9.89',
    description:
      'Perancangan dan Implementasi Sistem Informasi Administrasi siswa berbasis web dengan menggunakan PHP, CSS dan database MySQL menggunakan metodologi waterfall pada SMK Kujang Pilawa 2013',
    href: '#',
    price: '3.73',
    status: 'out-for-delivery',
    date: 'January 5, 2021',
    datetime: '2021-01-05',
    imageSrc: '/assets/kujang3.png',
    imageAlt: 'Logo SMK Kujang Pilawa',
  },
  // More orders...
];

export default function Education() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 sm:px-6 sm:py-6">
        <div className="px-4 sm:px-0">
          <h1 className="text-2xl font-extrabold tracking-tight text-sky-600 sm:text-3xl">
            Riwayat Pendidikan
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Merupakan riwayat pendidikan yang pernah saya tempuh
          </p>
        </div>

        <div className="my-4 mx-4">
          <div className="space-y-4 sm:space-y-2">
            {riwayatpendidikan.map((product) => (
              <div key={product.id} className="flex py-2 sm:py-2">
                <div className="flex-1 lg:flex lg:flex-col">
                  <div className="lg:flex-col">
                    <div className="sm:flex">
                      <div>
                        <h4 className="text-2xl text-sky-600 font-semibold">
                          {product.name}
                        </h4>
                        <h4 className="text-lg text-gray-900">
                          {product.jurusan} - GPA. {product.ipk}
                        </h4>
                        <p className="mt-1 font-medium text-gray-500 sm:mt-0">
                          Tahun Lulus : {product.tahunlulus}
                        </p>
                        <p className="mt-2 text-sm text-gray-500 text-justify sm:block">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-5 flex-shrink-0 sm:m-0 sm:mr-6 order-first">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="col-start-2 col-end-3 sm:col-start-1 sm:row-start-1 sm:row-span-2 w-20 h-20 rounded-lg object-center object-cover sm:w-30 sm:h-30 lg:w-36 lg:h-36"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
