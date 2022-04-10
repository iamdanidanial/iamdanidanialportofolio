const webdevelopment = [
  {
    id: 1,
    name: 'Good Resto',
    href: 'https://goodresto-74686.web.app/',
    description:
      'Project ini dibuat dengan menggunakan Framework Webpack dan Rest API dari Dicoding dengan fitur menampilkan data restoran, Detail restoran dan membuat Favorit Restoran',
    imageSrc: '/assets/projects/goodrestoo.png',
    imageAlt: 'Logo Good Resto',
  },
  {
    id: 2,
    name: 'Premier League',
    href: 'https://premier-league-pwa-danidanial.web.app/',
    description:
      'Project ini dibuat dengan menggunakan Framework Webpack dan Rest API dari football-data.org dengan fiture menampilkan data pertandingan, Standing dan team',
    imageSrc: '/assets/projects/premierleague.png',
    imageAlt: 'Logo Premier League',
  },

  {
    id: 3,
    name: 'My Moviee',
    href: 'https://mymovie-ac673.web.app/',
    description:
      'Project ini dibuat dengan menggunakan Framework Webpack dan Rest API dari https://www.themoviedb.org/ dengan fiture menampilkan data Movie',
    imageSrc: '/assets/projects/movieee.png',
    imageAlt: 'Logo My Moviee',
  },

  {
    id: 4,
    name: 'Memory Game: 10 Bali Baru',
    href: 'https://memorygamebddchallenge.web.app/',
    description:
      'Project ini dibuat dengan menggunakan HTML, Css dan JavaScript untuk mengikuti BDD Challenge dari Dicoding, dan keluar sebagai salah satu pemenang',
    imageSrc: '/assets/projects/memoryyy.png',
    imageAlt: 'Logo Memory Game: 10 Bali Baru',
  },

  {
    id: 6,
    name: 'Pokedex Learn',
    href: 'https://pokedexlearn.vercel.app/',
    description:
      'Project ini merupakan informasi tentang seluruh Pokemon Universe, dengan data yang diambil dari API',
    imageSrc: '/assets/projects/pokedex.png',
    imageAlt: 'Logo Pokedex Learn ',
  },
  {
    id: 7,
    name: 'Best Anime',
    href: 'https://bestanime.vercel.app/',
    description:
      'Project ini merupakan informasi tentang seluruh Serial dan Film Anime, dengan data yang diambil dari API',
    imageSrc: '/assets/projects/bestanime.png',
    imageAlt: 'Logo Best Anime',
  },
  {
    id: 8,
    name: 'Bansos Jabar',
    href: 'https://bansosjabar.vercel.app/',
    description:
      'Project ini merupakan tugas dalam prosess rekrutment Jabar Digital Service dengan menggunakan API Statis Daerah Indonesia menggunakan Framework NextJS',
    imageSrc: '/assets/projects/bansorjabar.png',
    imageAlt: 'Logo Bansos Jabar ',
  },
  {
    id: 9,
    name: 'Asrama Hewan',
    href: 'https://asramahewan.vercel.app/',
    description:
      'Project ini merupakan landing page company asrama hewan dibuat dengan menggunakan Framework Next JS ',
    imageSrc: '/assets/projects/asramahewan.png',
    imageAlt: 'Logo Asrama Hewan ',
  },
  {
    id: 10,
    name: 'Dani Bakers',
    href: 'https://danibakers.vercel.app/',
    description:
      'Project ini merupakan landing page company Dani Bakers dibuat dengan menggunakan Framework Next JS',
    imageSrc: '/assets/projects/danibakers.png',
    imageAlt: 'Logo ',
  },
];

const androidDevelopments = [
  {
    id: 1,
    name: 'Github User Finder',
    href: 'https://drive.google.com/file/d/1ahNTvmzDCrQqdGl_q_TWvYns6lZeMyR2/view',
    description:
      'Project ini dibuat dengan menggunakan Java.., Applikasi android yang dibuat untuk menuntaskan kelas Fundamental Android pada Dicoding Academy, bertujuan untuk mencari Github User',
    imageSrc: '/assets/projects/git.png',
    imageAlt: 'logo Github Finder',
  },

  {
    id: 1,
    name: 'Good Movies',
    href: 'https://drive.google.com/file/d/1ea7XSkEt2Pa_mypsHDDL1dZRF0jW5eBO/view',
    description:
      'Project ini dibuat dengan menggunakan Java, Aplikasi android yang dibuat untuk submisson peertama pada kelas Android Jetpack Pro di Dicoding Academy',
    imageSrc: '/assets/projects/moviee.png',
    imageAlt: 'Logo Good Movies',
  },
];

export default function ProjectApps() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:py-6  sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative pb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-start">
            <span className="pr-3 bg-white text-3xl font-medium text-sky-900">
              Web Deveopment
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {webdevelopment.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-52">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center sm:w-full sm:h-full"
                />
              </div>
              <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href} rel="noreferrer" target="_blank">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500 text-justify">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:py-6  sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative pb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-start">
            <span className="pr-3 bg-white text-3xl font-medium text-sky-900">
              Applikasi Mobile
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {androidDevelopments.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-52">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center  sm:w-full sm:h-full"
                />
              </div>
              <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href} rel="noreferrer" target="_blank">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative pb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-start">
            <span className="pr-3 bg-white text-3xl font-medium text-sky-900">
              Rest API Development (Back-End)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {BackEndDevelopments.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-52">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center sm:w-full sm:h-full"
                />
              </div>
              <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500 text-justify">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
