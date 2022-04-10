import Image from 'next/image';

/* This example requires Tailwind CSS v2.0+ */
const tectStacks = [
  {
    name: 'Next JS',
    imageUrl: '/assets/techstack/nextjss.png',
  },
  {
    name: 'React JS',
    imageUrl: '/assets/techstack/react.png',
  },

  {
    name: 'Webpack',
    imageUrl: '/assets/techstack/webpack.png',
  },
  {
    name: 'HTML',
    imageUrl: '/assets/techstack/html.png',
  },

  {
    name: 'css',
    imageUrl: '/assets/techstack/css.png',
  },
  {
    name: 'Javascript',
    imageUrl: '/assets/techstack/js.png',
  },
  {
    name: 'tailwind CSS',
    imageUrl: '/assets/techstack/tailwindd.png',
  },
  {
    name: 'Postgresql',
    imageUrl: '/assets/techstack/postgresql.png',
  },

  {
    name: 'mysql',
    imageUrl: '/assets/techstack/mysql.png',
  },
  {
    name: 'figma',
    imageUrl: '/assets/techstack/figma.png',
  },
  {
    name: 'Canva',
    imageUrl: '/assets/techstack/canvar.png',
  },

  {
    name: 'Github',
    imageUrl: '/assets/techstack/github.png',
  },
  {
    name: 'Node JS',
    imageUrl: '/assets/techstack/node.png',
  },
  {
    name: 'Hapi',
    imageUrl: '/assets/techstack/hapi.png',
  },
  {
    name: 'aws',
    imageUrl: '/assets/techstack/aws.png',
  },
  {
    name: 'Google Cloud',
    imageUrl: '/assets/techstack/gcp.png',
  },
  {
    name: 'Flutter',
    imageUrl: '/assets/techstack/flutter.png',
  },
  {
    name: 'Kotlin',
    imageUrl: '/assets/techstack/kotlin.png',
  },
  {
    name: 'Devops',
    imageUrl: '/assets/techstack/cicd.png',
  },

  {
    name: 'Microsoft Office',
    imageUrl: '/assets/techstack/office.png',
  },

  // More people...
];

export default function TechStack() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-12">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="mt-2 text-4xl font-extrabold text-sky-700 tracking-tight sm:text-5xl">
              Technology Stack
            </h2>
            <p className="mt-2 text-lg text-gray-900 tracking-tight sm:text-xl">
              Inilah beberapa teknologi yang sering saya gunakan untuk membuat
              berbagai Applikasi.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-7xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-5"
          >
            {tectStacks.map((techStack) => (
              <li key={techStack.name}>
                <div className="space-y-4 border-2 p-4 text-white uppercase rounded-3xl shadow-sky-500 shadow-md">
                  <Image
                    className="mx-auto h-20 w-20 lg:w-24 lg:h-24 rounded-xl object-contain"
                    width={75}
                    height={75}
                    src={techStack.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-xs font-semibold lg:text-sm text-sky-700">
                      <h3>{techStack.name}</h3>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
