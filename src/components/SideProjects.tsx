import { register } from 'swiper/element/bundle';
import laravelImage from '../images/laravel.png';
import ionicImage from '../images/ionic.png';
import nextJsImage from '../images/next-js.svg';
import prismaImage from '../images/prisma.png';
import postgresImage from '../images/postgresql.png';
import playwrightImage from '../images/playwright.png';
import trpcImage from '../images/trpc.svg';
import jestImage from '../images/jest.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const breakpoints = JSON.stringify({
  640: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
});

register();

export default () => {
  return (
    <swiper-container
      class="grid"
      slides-per-view="1"
      pagination={true}
      space-between="24"
      breakpoints={breakpoints}
    >
      <swiper-slide class="bg-blue-50 rounded-xl p-10 flex flex-col gap-6">
        <h3 className="text-xl font-bold">Cockpit</h3>
        <p className="flex-1 text-sm">
          Combining the data from the gitlab and tracking time to provide insights in the teams
          performance Combining the data from the gitlab and tracking time to provide insights in the teams
          performance
        </p>
        <footer className="flex gap-2">
          <div className="bg-white rounded-full p-2">
            <img src={ionicImage.src} alt="Ionic" height={24} width={24}/>
          </div>
          <div className="bg-white rounded-full p-2">
            <img src={laravelImage.src} alt="Laravel" height={24} width={24}/>
          </div>
          <div className="bg-white rounded-full p-2">
            <img src={postgresImage.src} alt="PostgresSql" height={24} width={24}/>
          </div>
        </footer>
      </swiper-slide>
      <swiper-slide class="bg-blue-50 rounded-xl p-10 flex flex-col gap-6">
        <h3 className="text-xl font-bold">Cockpit</h3>
        <p className="flex-1 text-sm">
          Combining the data from the gitlab and tracking time to provide insights in the teams
          performance Combining the data from the gitlab and tracking time to provide insights in the teams
          performance
        </p>
        <footer className="flex gap-2">
          <div className="bg-white rounded-full p-2">
            <img src={nextJsImage.src} alt="Nextjs" height={24} width={24}/>
          </div>
          <div className="bg-white rounded-full p-2">
            <img src={prismaImage.src} alt="Prisma" height={24} width={24}/>
          </div>
          <div className="bg-white rounded-full p-2">
            <img src={trpcImage.src} alt="tRPC" height={24} width={24}/>
          </div>
          <div className="bg-white rounded-full p-2">
            <img src={postgresImage.src} alt="PostgresSql" height={24} width={24}/>
          </div>
          <div className="bg-white rounded-full p-2 grayscale-80">
            <img src={playwrightImage.src} alt="Playwright" height={24} width={24}/>
          </div>
          <div className="bg-white rounded-full p-2">
            <img src={jestImage.src} alt="Jest" height={24} width={24}/>
          </div>
        </footer>
      </swiper-slide>
      <swiper-slide class="bg-blue-50 rounded-xl p-10 flex flex-col gap-6">
        <h3 className="text-xl font-bold">Cockpit</h3>
        <p className="flex-1 text-sm">
          Combining the data from the gitlab and tracking time to provide insights in the teams
          performance Combining the data from the gitlab and tracking time to provide insights in the teams
          performance
        </p>
        <footer className="flex gap-2">
          <div className="bg-white rounded-full p-2">
            <img src={nextJsImage.src} alt="NextJS" height={24} width={24}/>
          </div>
          <div className="bg-white rounded-full p-2">
            <img src={prismaImage.src} alt="Prisma" height={24} width={24}/>
          </div>
          <div className="bg-white rounded-full p-2">
            <img src={trpcImage.src} alt="tRPC" height={24} width={24}/>
          </div>
          <div className="bg-white rounded-full p-2">
            <img src={postgresImage.src} alt="PostgresSql" height={24} width={24}/>
          </div>
          <div className="bg-white rounded-full p-2 grayscale-80">
            <img src={playwrightImage.src} alt="Playwright" height={24} width={24}/>
          </div>
          <div className="bg-white rounded-full p-2">
            <img src={jestImage.src} alt="Jest" height={24} width={24}/>
          </div>
        </footer>
      </swiper-slide>
      <swiper-slide class="bg-blue-50 rounded-xl p-10 flex flex-col gap-6">
        <h3 className="text-xl font-bold">Cockpit</h3>
        <p className="flex-1 text-sm">
          Combining the data from the gitlab and tracking time to provide insights in the teams
          performance Combining the data from the gitlab and tracking time to provide insights in the teams
          performance
        </p>
        <footer className="flex gap-2">
          <div className="bg-white rounded-full p-2">
            <img src={ionicImage.src} alt="Ionic" height={24} width={24}/>
          </div>
          <div className="bg-white rounded-full p-2">
            <img src={laravelImage.src} alt="Laravel" height={24} width={24}/>
          </div>
        </footer>
      </swiper-slide>
    </swiper-container>
  );
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": any;
      "swiper-slide": any;
    }
  }
}
