import logo from './logo.svg';
import './App.css';
import './app/like-button.js';
import miImagen from './img/profile_pic.png';

import LikeButton from './app/like-button';

// function Header({ title }) {
//   return <h1>{title ? title : 'Default title'}</h1>;
// }

// function HomePage() {
//   const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

//   return (
//     <div>
//       <Header title="Develop. Preview. Ship." />
//       <ul>
//         {names.map((name) => (
//           <li key={name}>{name}</li>
//         ))}
//       </ul>
//       <LikeButton />
//     </div>
//   );
// }

// const people = [
//   {
//     name: 'Leslie Alexander',
//     role: 'Co-Founder / CEO',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
//   // More people...
// ]

// function Example() {
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
//         <div className="max-w-2xl">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
//           <p className="mt-6 text-lg leading-8 text-gray-600">
//             Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
//             suspendisse.
//           </p>
//         </div>
//         <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
//           {people.map((person) => (
//             <li key={person.name}>
//               <div className="flex items-center gap-x-6">
//                 <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
//                 <div>
//                   <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
//                   <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
    // <HomePage />
    // <Example/>
    <Portfolio />
    //   </header>

    // </div>
  );
}

function Portfolio() {
  return (
    <div className="relative text-gray-800 bg-gray-50">

      <header>
        <nav className="w-full">
          <div className="flex justify-between w-full px-16 py-8">
            <div>
              <ul
                className="flex flex-col text-left md:flex-row space-y-5 md:space-y-0 md:space-x-6 text-xl md:text-2xl">
                <li className="text-left">
                  <a href="#contact">
                    {/* Contact */}
                    Contacto
                  </a>
                </li>
                <li className="text-left">
                  <a href="#skills">
                    {/* Contact */}
                    Skills
                  </a>
                </li>
                <li className="text-left">
                  <a href="#certifications">
                    {/* Contact */}
                    Certificaciones
                  </a>
                </li>
                <li className="text-left">
                  <a href="#experience">
                    {/* Experience */}
                    Experiencia
                  </a>

                </li>
                <li className="text-left">
                  <a href="#education">
                    {/* Contact */}
                    Educación
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col md:flex-row items-end md:items-center md:space-x-4 space-y-4 md:space-y-0">
                <li>
                  <a href="https://github.com/JNathanae-l" target="_blank" aria-label="Github"
                    className="hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                    </svg>

                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/jesus-nathanael-monroy-lazcano-61b1a8224/" target="_blank" aria-label="linkedin"
                    className="hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                      <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"></path>
                    </svg>

                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center h-screen  -my-20 md:-mt-48 px-8">
        <div className="flex flex-col items-center justify-center text-center h-screen-half">
          <img className="md:hidden object-cover w-15 h-40 rounded-full mb-5 ring-2 ring-gray-500/50 ring-offset-[10px]"
            src={miImagen} alt="Your Name Here" />
          <h2 className="text-5xl sm:text-6xl lg:text-9xl">JESUS NATHANAEL MONROY LAZCANO</h2>
          <h3 className="font-light text-4xl sm:text-5xl lg:text-7xl">INGENIERO EN SISTEMAS COMPUTACIONALES</h3>
        </div>
      </section>
      <section className="flex items-center justify-between px-8 mb-20 tracking-wider">
        <div className="flex flex-col w-full md:w-1/3 space-y-12 text-center md:text-left">

          <div className="px-10 md:px-20">
            <h3 className="text-xl font-bold">Sobre mi</h3>
            {/* <h3 className="text-xl font-bold">Summary</h3> */}
            <br />
            <p className="w-full md:w-2/3">Soy un entusiasta de la especialidad en Comunicaciones Digitales con una sólida
              formación académica en Ingeniería de Sistemas Computacionales.Mi carrera profesional se destaca por la habilidad
              de fusionar la creatividad y el conocimiento técnico para transmitir conceptos tecnológicos de manera eficiente.
              Mis destrezas en producción de contenido y mi profundo entendimiento en sistemas computacionales me facilitan
              convertir temas intrincados en mensajes claros y atractivos para públicos diversos.</p>
          </div>
          <div className="px-10 md:px-20">
            <br />
            {/* <h3 className="text-xl font-bold">Contact</h3> */}
            <h3 id='contact' className="text-xl font-bold">Contacto</h3>
            <a className="text-xl hover:text-blue-600" href="mailto:natha_ml@icloud.com">natha_ml@icloud.com</a>
            <p> &#127474;&#127485; +52 55 6164 3539</p>
          </div>
          <div className="px-10 md:px-20">
            <br />
            {/* <h3 className="text-xl font-bold">Languages</h3> */}
            <h3 className="text-xl font-bold">Idiomas</h3>
            <p> &#127474;&#127485; Español: 5 / 5</p>
            <p> &#127482;&#127480; Inglés:    3 / 5</p>
          </div>
        </div>
        <img className="hidden md:block object-cover w-1/4 h-screen rounded-full ring-2 ring-gray-500/50 ring-offset-[30px]"
          src={miImagen} alt="Your Name Here" />
        <div className="hidden md:flex flex-col w-1/3 space-y-12 text-right">
          <div className="px-20">
            <h4 className="text-xl font-bold">Certificados</h4>
            {/* <h4 className="text-xl font-bold">Certificates</h4> */}
            <br />
            <p className="text-6xl">+17</p>
          </div>
          <div className="px-20">
            <h4 className="text-xl font-bold">Experiencia</h4>
            {/* <h4 className="text-xl font-bold">Experience</h4> */}
            <br />
            <p className="text-6xl">+5</p>
          </div>
          <div className="px-20">
            <h4 className="text-xl font-bold">Proyectos</h4>
            {/* <h4 className="text-xl font-bold">Projects</h4> */}
            <br />
            <p className="text-6xl">+4</p>
          </div>
          <div className="px-20">
            <h4 className="text-xl font-bold">Clientes</h4>
            {/* <h4 className="text-xl font-bold">Clients</h4> */}
            <br />
            <p className="text-6xl">+5</p>
          </div>
        </div>


      </section>
      {/* <hr className="border-gray-400 mx-44" />
      <br /> */}
      <hr className="border-gray-400 mx-44" />
      <section id="skills" className="px-20 mt-10">
        <h4 className="mb-8 text-3xl font-bold text-center md:text-left">Skills</h4>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              <a>
                <span className="text-lg"><strong>Desarrollador</strong></span>
              </a>
              <a >
                <span class=" text-lg bg-gray-300 text-black-500 w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Web(html5, css3, js, bs4,react,tailwind)
              </a>
              <a >
                <span class=" text-lg bg-gray-300 text-black-500 w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Python
              </a>
              <a >
                <span class=" text-lg bg-gray-300 text-black-500 w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Java
              </a>
              <a >
                <span class=" text-lg bg-gray-300 text-black-500 w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>R / R Studio
              </a>
              <a >
                <span class=" text-lg bg-gray-300 text-black-500 w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Windows Server 2016
              </a>
              <a >
                <span class=" text-lg bg-gray-300 text-black-500 w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>AWS(EC2)
              </a>
              <a >
                <span class=" text-lg bg-gray-300 text-black-500 w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Linux
              </a>
              <a >
                <span class=" text-lg bg-gray-300 text-black-500 w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Kotlin
              </a>
              <a >
                <span class=" text-lg bg-gray-300 text-black-500 w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Laravel / PHP
              </a>
              <a >
                <span class=" text-lg bg-gray-300 text-black-500 w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Swift
              </a>
              <a >
                <span class=" text-lg bg-gray-300 text-black-500 w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>MySQL
              </a>
              <a >
                <span class=" text-lg bg-gray-300 text-black-500 w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>React, NodeJS, NextJS(en ruta de aprendizaje y reforzamiento)
              </a>
            </nav>

          </div>
          <div>
            {/*  */}
            <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              <a>
                <span className="text-lg"><strong>Community Manager</strong></span>
              </a>
              <a >
                <span class=" text-lg bg-gray-300 text-black-500 w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Community Manager
              </a>
              <a >
                <span class=" text-lg bg-gray-300 text-black-500 w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Desing UX / UI
              </a>
              <a >
                <span class=" text-lg bg-gray-300 text-black-500 w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Figma
              </a>
              <a >
                <span class=" text-lg bg-gray-300 text-black-500 w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Vectornator
              </a>
              <a >
                <span class=" text-lg bg-gray-300 text-black-500 w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Capcut
              </a>
              <a >
                <span class=" text-lg bg-gray-300 text-black-500 w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>DaVinci Resolve
              </a>
              <a >
                <span class=" text-lg bg-gray-300 text-black-500 w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>Spark AR Studio / META
              </a>
              <a >
                <span class=" text-lg bg-gray-300 text-black-500 w-4 h-4 mr-2  rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>GIMP
              </a>
            </nav>
            {/*  */}
           
          </div>


        </div>
      </section>
      <br />
      <hr className="border-gray-400 mx-44" />
      <section id="certifications" className="px-20 mt-10">
        {/* <h4 className="mb-8 text-3xl font-bold text-center md:text-left">Certifications</h4> */}
        <h4 className="mb-8 text-3xl font-bold text-center md:text-left">Certificaciones</h4>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl font-bold">Cisco</h5>
            <h6 className="text-lg font-bold">Cisco Netacad</h6>
            <p>2019 - 2021</p>
          </div>
          <div className="flex flex-col col-span-4">
            <ul>
              <li>
                CA-21-03-CSE
              </li>
              <li>
                Cybersecurity Essentials
              </li>
              <li>
                Fundamentos de NDG Linux.
              </li>
              <li>
                Fundamentos-09-2017B
              </li>
              <li>
                CCNA R&S: Introduction to Networks

              </li>
              <li>
                CV-2019-06-R&S-B1-ISC
              </li>
              <li>
                CCNA R&S: Scaling Networks
              </li>
              <li>
                RC 2019A
              </li>
              <li>
                CCNA R&S: Routing and Switching Essentials
              </li>
              <li>
                CA-21-03-ENSA
              </li>
              <li>
                CCNAv7: Enterprise Networking, Security, and Automation
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">Santander</h5>
            <h6 className="text-lg font-bold">Online</h6>
            <p>2019</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>Curso de Emprendimiento: de la idea al negocio por Santander y la Universidad Nacional Autónoma de México (UNAM).</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">Fundación Carlos Slim</h5>
            <h6 className="text-lg font-bold">Online</h6>
            <p>2022</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>Administrador de la nube.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">Coursera</h5>
            <h6 className="text-lg font-bold">Online</h6>
            <p>2023</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>Foundations of User Experience (UX) Design.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">Fundación Telefónica Movistar</h5>
            <h6 className="text-lg font-bold">Online</h6>
            <p>2023</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>Networking y Marketing Personal.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">ALURA</h5>
            <h6 className="text-lg font-bold">Oracle One</h6>
            <p>2023</p>
          </div>
          <div className="flex flex-col col-span-4">
            <ul>
              <li>BUSINESS AGILITY G5.</li>
              <li> ONE DESARROLLO PERSONAL G5 - ONE.</li>
            </ul>
          </div>
        </div>
      </section>
      <hr className="border-gray-400 mx-44" />

      <section id="experience" className="px-20 mt-10">
        {/* <h4 className="mb-8 text-3xl font-bold text-center md:text-left">Experience</h4> */}
        <h4 className="mb-8 text-3xl font-bold text-center md:text-left">Experiencia</h4>
        <p className="mb-8 text-2xl font-medium text-center ">Detrás de las exitosas soluciones de programación y algoritmos inteligentes, hay una trinidad de brillantez en la codificación.</p>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl font-bold">VICO </h5>
            <h6 className="text-lg font-bold">(prototipo de Android)</h6>
            <p>2017</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>Desarrollo de una aplicación móvil utilizando Kotlin, un lenguaje de programación para Android.</p>
<p>Utilización de SQLite para el almacenamiento local de datos en la aplicación.</p>
<p>Integración de Firebase Realtime Database para almacenar y sincronizar datos en tiempo real entre usuarios y dispositivos.</p>
<p>Uso de la API de Routes para la navegación y manejo de rutas dentro de la aplicación.</p>
<p>Control de versiones del código con Git.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">NENI </h5>
            <h6 className="text-lg font-bold">(prototipo de Android con Flutter)</h6>
            <p>2018</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>Desarrollo de una aplicación móvil utilizando Flutter y Dart.</p>
<p>Utilización de SQLite para la gestión de datos local en la aplicación.</p> 
<p>Integración de Firebase Realtime Database para almacenamiento y sincronización de datos en tiempo real.</p> 
<p>Uso de la API de Geolocalización para obtener y manejar la ubicación del usuario.</p> 
<p>Pruebas de la aplicación utilizando herramientas de Testing.</p> 
<p>Control de versiones del código con Git.</p> 
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">Nutrete </h5>
            <h6 className="text-lg font-bold">(Aplicación web)</h6>
            <p>2019</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>Desarrollo de una aplicación web utilizando tecnologías front-end como HTML5, CSS3 y JavaScript.</p>
<p> Implementación del back-end utilizando Express y Node.js para la lógica del servidor y la comunicación con la base de datos.</p>
<p>Utilización de una base de datos para almacenar datos utilizando SQL y Monitoreo con PM2 para gestionar y mantener la aplicación en funcionamiento.</p>
<p>Soporte remoto para ayudar a los usuarios con problemas técnicos o consultas relacionadas con la aplicación.</p>
<p>Control de versiones del código con Git.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">LINUX SOLARIS 11 y RED HAT ENTERPRISE LINUX 8 </h5>
            <h6 className="text-lg font-bold">Autodidacta</h6>
            <p>2022</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>Administración de sistemas operativos Linux, incluyendo tareas como la gestión de procesos, paquetes, redes y permisos.</p>
            <p>Familiaridad con sistemas operativos como Solaris 11 y Red Hat Enterprise Linux 8.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">WINDOWS SERVER 2016 </h5>
            <h6 className="text-lg font-bold">Autodidacta</h6>
            <p>2022</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>Administración de servidores Windows, incluyendo la configuración y gestión de servicios como Active Directory y SQL Server 2016.</p>
<p> Conocimiento de protocolos de red como SMTP para el envío de correos electrónicos.</p>
<p>Monitoreo de servicios y realización de copias de seguridad del servidor para garantizar la disponibilidad y seguridad de los datos.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">COMMUNITY MANAGER </h5>
            <h6 className="text-lg font-bold">CÁMARA DE DIPUTADOS</h6>
            <p>2023</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>Participación en un proyecto de servicio social enfocado en la gestión de redes sociales y la producción de contenido audiovisual para la Cámara de Diputados.</p>
<p> Planeación y elaboración de contenido para redes sociales.</p>
<p>Recopilación de información relevante para el contenido de las redes sociales.</p>
<p>Utilización de herramientas como Spark - META para el monitoreo de tendencias y análisis de datos.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">RESIDENCIA PROFESIONAL </h5>
            <h6 className="text-lg font-bold">TECNOLOGÍAS Y SOLUCIONES LEGAR</h6>
            <p>2023 -2024</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>Desarrollo de una residencia profesional enfocada en tecnologías y soluciones legales.</p>
<p> Gestión de bases de datos utilizando MySQL e implementación de procedimientos almacenados.</p>
<p> Migración de estructuras de código PHP a un patrón de diseño Modelo-Vista-Controlador (MVC).</p>
<p> Creación de módulos específicos como el de Subdirectores para indicadores escolares.</p>
<p> Implementación de métodos REST para la comunicación entre el cliente y el servidor.</p>
<p> Desarrollo del front-end utilizando HTML, CSS (Bootstrap, Media Queries) y JS (jQuery, AJAX).</p>
<p> Hosting de la aplicación en SmarterASP.NET para la puesta en producción y disponibilidad en línea.</p>




          </div>
        </div>
      </section>
      <hr className="border-gray-400 mx-44" />
      <section id='education' className="px-20 mt-10">
        {/* <h4 className="mb-8 text-3xl font-bold text-center md:text-left">Education</h4> */}
        <h4 className="mb-8 text-3xl font-bold text-center md:text-left">Educación</h4>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">Ingeniería en Sistemas Computacionales</h5>
            <h6 className="text-lg font-bold">Instituto Tecnológico de Toluca y Tecnológico de Estudios Superiores de Tianguistenco</h6>
            <p>2017 -2020 (ITTOL), 2022-2024(TEST)</p>
          </div>
          <div className="flex flex-col col-span-4 ">
            <p>Durante mi trayectoria académica, cursé estudios en dos destacadas instituciones. Inicialmente, me formé en el Instituto Tecnológico de Toluca, 
              donde me especialicé en el desarrollo web, comercio electrónico y aplicaciones móviles en la plataforma Android. Sin embargo, debido a 
              circunstancias particulares, tuve que interrumpir temporalmente mis estudios. Posteriormente, retomé mi formación en la Universidad 
              de Estudios Superiores de Tianguistenco, donde concluí mi carrera como Ingeniero en Sistemas Computacionales, enfocándome especialmente en áreas 
              relacionadas con el Big Data y la Ciencia de Datos. Esta experiencia educativa me ha proporcionado una sólida base de conocimientos 
              y habilidades en tecnología que estoy ansioso por aplicar en mi carrera profesional.</p>
          </div>
        </div>
      </section>
      <footer id='contact' className="absolute w-full h-36 bottom-0 p-8 px-16 bg-gray-800 text-gray-50">
        <p className="text-2xl">Gracias por revisar mi portafolio.(Potenciado con React y Tailwind.)</p>
        <a className="text-lg" href="mailto:natha_ml@icloud.com">natha_ml@icloud.com</a>
      </footer>
      <div className="h-80">
      </div>
    </div>
  );
}

export default App;
