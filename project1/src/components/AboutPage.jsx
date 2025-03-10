import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone, faUser, faBook, faAward, faCoffee } from '@fortawesome/free-solid-svg-icons';


const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-12">
        <div className="relative h-64 bg-indigo-600">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-90"></div>
          <div className="absolute bottom-0 left-0 w-full transform translate-y-1/2 flex justify-center">
            <div className="h-32 w-32 rounded-full border-4 border-white overflow-hidden bg-white">
              <div className="flex items-center justify-center h-full bg-indigo-100 text-indigo-500">
                <FontAwesomeIcon icon={faUser} size="4x" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 pb-8 px-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Pragyesh Kumar Seth</h1>
          <p className="text-xl text-indigo-600 mt-2">Full Stack Developer</p>

          <div className="mt-6 flex justify-center space-x-4">
            <a href="https://github.com/pragyesh7753" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" target='_blank'>
              <lord-icon
                src="https://cdn.lordicon.com/ioihllwu.json"
                trigger="hover">
              </lord-icon>
            </a>
            <a href="https://www.linkedin.com/in/pragyesh-kumar-seth-29572b253/" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" target='_blank'>
              <lord-icon
                src="https://cdn.lordicon.com/xerxcacw.json"
                trigger="hover">
              </lord-icon>
            </a>
            <a href="https://x.com/SethPragyesh" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" target='_blank'>
              <lord-icon
                src="https://cdn.lordicon.com/qrsdbrog.json"
                trigger="hover">
              </lord-icon>
            </a>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-indigo-500" />
              <span>spragyesh86@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-indigo-500" />
              <span>7753847898</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-indigo-500" />
              <span>SAITM, Gurgaon</span>
            </div>
          </div>
        </div>
      </header>

      {/* Bio Section */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-12 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <FontAwesomeIcon icon={faUser} className="mr-3 text-indigo-500" />
          About Me
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Hi there! I'm Jane, a passionate full-stack developer with over 5 years of experience building modern web applications.
          I specialize in React, Node.js, and cloud technologies, creating seamless user experiences backed by scalable architectures.
        </p>

        <p className="text-gray-700 leading-relaxed">
          When I'm not coding, you can find me hiking in the mountains, experimenting with new recipes, or contributing to open-source projects.
          I believe in continuous learning and sharing knowledge with the developer community.
        </p>
      </section>

      {/* Skills & Experience */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Skills Section */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FontAwesomeIcon icon={faBook} className="mr-3 text-indigo-500" />
            Skills
          </h2>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">Front-end Development</span>
                <span className="text-indigo-600">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">Back-end Development</span>
                <span className="text-indigo-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">UI/UX Design</span>
                <span className="text-indigo-600">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">DevOps</span>
                <span className="text-indigo-600">70%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FontAwesomeIcon icon={faAward} className="mr-3 text-indigo-500" />
            Experience
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Senior Developer</h3>
              <p className="text-indigo-600">TechCorp Inc. • 2021 - Present</p>
              <p className="text-gray-700 mt-2">Lead development of scalable web applications using React and Node.js.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">Full Stack Developer</h3>
              <p className="text-indigo-600">WebSolutions LLC • 2018 - 2021</p>
              <p className="text-gray-700 mt-2">Developed and maintained multiple client projects from conception to deployment.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">Junior Developer</h3>
              <p className="text-indigo-600">StartupLab • 2016 - 2018</p>
              <p className="text-gray-700 mt-2">Collaborated on front-end development for emerging tech startups.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto bg-indigo-600 rounded-lg shadow-lg overflow-hidden mb-12">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <FontAwesomeIcon icon={faCoffee} className="mr-3" />
            Let's Connect
          </h2>

          <p className="text-indigo-100 mb-6">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>

          <button className="bg-white text-indigo-600 font-medium py-2 px-6 rounded-lg hover:bg-indigo-50 transition-colors duration-300">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto text-center text-gray-600">
        <p>© 2025 Pragyesh Kumar Seth. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;