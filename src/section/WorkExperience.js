import { CheckIcon } from '@heroicons/react/outline';

const riwayatpekerjaan = [
  {
    id: 1,
    name: 'PT Pou Yuen Indonesia',
    tahunmasuk: 'Agustus 2017',
    tahunkeluar: 'Mei 2020',
    description:
      'Memastikan absensi team member, membuat schedule dan target produksi, Meeting dan Updating schedule dengan management perusahaan serta Mengontrol pemasukan, pengeluaran dan stock material',
    href: '#',
    departement: 'Team Leader Product Planning Control',
    status: 'out-for-delivery',
    date: 'January 5, 2021',
    datetime: '2021-01-05',
    imageSrc: '/assets/pyi.png',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 2,
    name: 'Dinas Kependudukan dan Pencatatan Sipil Kabupaten Cianjur',
    tahunmasuk: 'Januari 2014',
    tahunkeluar: 'April 2017',
    description:
      'Mengelola database kependudukan Kabupaten Cianjur, dengan mengikuti Standard Operating Prosedure (SOP) dalam hal memasukan, mengubah dan menghapus data serta menerbitkan dokumen kependudukan yang diajukan oleh masyarakat dengan menggunakan Sistem Informasi Administrasi Kependuduk (SIAK).',
    href: '#',
    departement: 'Pengelola Sistem Informasi Administrasi Kependudukan',
    status: 'out-for-delivery',
    date: 'January 5, 2021',
    datetime: '2021-01-05',
    imageSrc: '/assets/disduk2.png',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  // More orders...
];

const riwayatlainya = [
  {
    id: 1,
    name: 'Indosat Ooredoo dan Dicoding Indonesia',
    tahunmasuk: 'Agustus 2021',
    tahunkeluar: 'November 2021',
    description:
      'Indosat Ooredoo Digital Camp (IDCamp) adalah sebuah program beasiswa dari Indosat Ooredoo untuk mencetak developer/programmer muda Indonesia yang siap bersaing di dunia ekonomi digital. Disini saya bertanggung jawab untuk menjadi referensi jawaban utama untuk pertanyaan peserta serta menjadi pendamping dan pembimbing pendukung untuk membantu peserta penerima beasiswa lulus dan menyelesaikan kelas Belajar fundamental front-end web developers.',
    href: 'https://idcamp.indosatooredoo.com/',
    departement: 'Fasilitator Indosat Ooredoo Digital Camp 2021',
    imageSrc: '/assets/idcamp-logo.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },

  {
    id: 2,
    name: 'Kemenparekraf dan Dicoding Indonesia',
    tahunmasuk: 'Mei 2021',
    tahunkeluar: 'Agustus 2021',
    description:
      'Baparekraf Developers Days adalah Pengembangan Talenta Digital Kreatif Kementerian Pariwisata dan Ekonomi Kreatif/Badan Pariwisata dan Ekonomi Kreatif adalah inisiatif dari Pemerintah untuk mengembangkan dan meningkatkan kapasitas pelaku ekonomi kreatif, khususnya pengembang aplikasi. Disini saya bertanggung jawab untuk menjadi referensi jawaban utama untuk pertanyaan peserta serta menjadi pendamping dan pembimbing pendukung untuk membantu peserta penerima beasiswa lulus dan menyelesaikan kelas Menjadi Front End Web Developers',
    href: 'https://bdd.kemenparekraf.go.id',
    departement: 'Fasilitator Baparekraf Developers Days 2021',
    imageSrc: '/assets/bdd.png',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },

  // More orders...
];

export default function WorkExperience() {
  return (
    <div className="bg-sky-50">
      <div className="max-w-7xl mx-auto py-16 sm:px-6 sm:py-6">
        <div className="px-4 sm:px-0">
          <h1 className="text-2xl font-extrabold tracking-tight text-sky-600 sm:text-3xl">
            Pengalaman Bekerja
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Merupakan riwayat pendidikan yang pernah saya tempuh
          </p>
        </div>

        <div className="my-4 mx-4">
          <div className="space-y-4 sm:space-y-2">
            {riwayatpekerjaan.map((product) => (
              <div key={product.id} className="flex py-2 sm:py-2">
                <div className="flex-1 lg:flex lg:flex-col">
                  <div className="lg:flex-col">
                    <div className="sm:flex">
                      <div>
                        <h4 className="text-2xl text-sky-600 font-semibold">
                          {product.name}
                        </h4>
                        <h4 className="text-lg text-gray-900">
                          {product.departement}
                        </h4>
                        <p className="mt-1 font-medium text-gray-500 sm:mt-0">
                          {product.tahunmasuk} s/d {product.tahunkeluar}
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

      <div className="max-w-7xl mx-auto py-16 sm:px-6 sm:py-6">
        <div className="px-4 sm:px-0">
          <h1 className="text-2xl font-extrabold tracking-tight text-sky-600 sm:text-3xl">
            Pengalaman Lainya
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Merupakan riwayat pendidikan yang pernah saya tempuh
          </p>
        </div>

        <div className="my-4 mx-4">
          <div className="space-y-4 sm:space-y-2">
            {riwayatlainya.map((product) => (
              <div key={product.id} className="flex py-2 sm:py-2">
                <div className="flex-1 lg:flex lg:flex-col">
                  <div className="lg:flex-col">
                    <div className="sm:flex">
                      <div>
                        <h4 className="text-2xl text-sky-600 font-semibold">
                          {product.name}
                        </h4>
                        <h4 className="text-lg text-gray-900">
                          {product.departement}
                        </h4>
                        <p className="mt-1 font-medium text-gray-500 sm:mt-0">
                          {product.tahunmasuk} s/d {product.tahunkeluar}
                        </p>
                        <p className="mt-2 text-sm text-gray-500 text-justify sm:block">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-5 flex-shrink-0 sm:m-0 sm:mr-6 order-first">
                  <a href={product.href} target="blank">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="col-start-2 col-end-3 sm:col-start-1 sm:row-start-1 sm:row-span-2 w-20 h-20 rounded-lg object-center object-cover sm:w-30 sm:h-30 lg:w-36 lg:h-36"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
