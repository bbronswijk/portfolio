import { register } from 'swiper/element/bundle';

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
      </swiper-slide>
      <swiper-slide class="bg-blue-50 rounded-xl p-10 flex flex-col gap-6">
        <h3 className="text-xl font-bold">Cockpit</h3>
        <p className="flex-1 text-sm">
          Combining the data from the gitlab and tracking time to provide insights in the teams
          performance Combining the data from the gitlab and tracking time to provide insights in the teams
          performance
        </p>
      </swiper-slide>
      <swiper-slide class="bg-blue-50 rounded-xl p-10 flex flex-col gap-6">
        <h3 className="text-xl font-bold">Cockpit</h3>
        <p className="flex-1 text-sm">
          Combining the data from the gitlab and tracking time to provide insights in the teams
          performance Combining the data from the gitlab and tracking time to provide insights in the teams
          performance
        </p>
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
