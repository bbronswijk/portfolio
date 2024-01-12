import { type ReactNode, useState } from 'react';


interface ComponentProps {
  children: ReactNode[];
}

export default ({ children }: ComponentProps) => {
  const [client, setClient] = useState('vanderlande');

  return (
    <section className="grid md:grid-cols-2 mb-12">
      <div className={`tech-stack relative ${client}`}>
        {children}
      </div>

      <ul className="list-none">
        <li className="grid grid-cols-experience mb-8" onMouseOver={() => setClient('vanderlande')}>
          <small className="text-gray-500">March 2022 - current</small>
          <h3 className="text-xl font-bold">Vanderlande</h3>
          <small className="text-gray-500 col-start-2 leading-3 mb-3">Senior JavaScript Developer</small>
          <p className="col-start-2 text-sm leading-6">
            Fulfilled the senior frontend role within the team and coached junior developers. Worked on a process
            mining tool for the baggage handling system of large airports.
          </p>
        </li>
        <li className="grid grid-cols-experience mb-6" onMouseOver={() => setClient('hoogendoorn')}>
          <small className="text-gray-500">Sept 2022 - Feb 2022</small>
          <h3 className="text-xl font-bold">Hoogendoorn Growth Management</h3>
          <small className="text-gray-500 col-start-2 leading-3 mb-3">Senior JavaScript Developer</small>
          <p className="col-start-2 text-sm leading-6">
            Created an visual configurator for greenhouses using canvas.js
            Improved overall css architecture and responsive design
          </p>
        </li>
        <li className="grid grid-cols-experience mb-6" onMouseOver={() => setClient('letsgrow')}>
          <small className="text-gray-500">Apr 2021 - Dec 2022</small>
          <h3 className="text-xl font-bold">Let's Grow</h3>
          <small className="text-gray-500 col-start-2 leading-3 mb-3">Senior JavaScript Developer</small>
          <p className="col-start-2 text-sm leading-6">
            Setup a chart configurator with a complex user flow. Gave presentations to teach team members about the workings of Angular and RXJS
            Build a sophisticated dashboard for Greenhouse
            automation, with lots of views, reports, graphs and customizable content.
          </p>
        </li>
        <li className="grid grid-cols-experience mb-6" onMouseOver={() => setClient('lyceo-fe')}>
          <small className="text-gray-500">Sept 2018 - Mar 2021</small>
          <h3 className="text-xl font-bold">Lyceo</h3>
          <small className="text-gray-500 col-start-2 leading-3 mb-3">JavaScript Developer</small>
          <p className="col-start-2 text-sm leading-6">
            Authority within the team with regards to frontend. Worked on a complex scheduling application in
            Angular. Also created various apps in
            Ionic. Did full stack work on a homework institute tool with a Laravel API and a Vue.js frontend.
          </p>
        </li>
        <li className="grid grid-cols-experience mb-6" onMouseOver={() => setClient('lyceo-wp')}>
          <small className="text-gray-500">Sept 2017 - aug 2018</small>
          <h3 className="text-xl font-bold">Lyceo</h3>
          <small className="text-gray-500 col-start-2 leading-3 mb-3">Wordpress Developer</small>
          <p className="col-start-2 text-sm leading-6">
            Setup a mature infrastructure for the hosting of 15 wordpress websites on AWS,
            including automatic updates, security checks and monitoring. For the complexer webshops I set up a React
            frontend in TypeScript.
          </p>
        </li>
        <li className="grid grid-cols-experience mb-6" onMouseOver={() => setClient('freelance')}>
          <small className="text-gray-500">Apr 2014 - Feb 2018</small>
          <h3 className="text-xl font-bold">Freelance Webdeveloper</h3>
          <p className="col-start-2 text-sm leading-6">
            During my studies at the TU Delft, I worked as a freelance web developer. I designed and developed
            tailored
            wordpress websites. Apart from that I developed a frontend for a various dashboards, using javascript
            and scss.
          </p>
        </li>

      </ul>
    </section>
  );
};
