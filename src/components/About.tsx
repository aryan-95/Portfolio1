import React from 'react';
import { Code, Database, Globe, } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon:Code,
      title:'Programming Languages',
      description:'java, python, c, javascript',
    },
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, TypeScript, Tailwind CSS',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Node.js, ',
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'REST APIs, GraphQL, WebSockets',
    },
    
  ];

  return (
    <section id="about" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - 3D Profile */}
          <div className="perspective-1000">
            <div className="transform-gpu transition-all duration-700 hover:rotate-y-12 preserve-3d">
              <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                  <p className="text-slate-300 leading-relaxed">
                    I'm a passionate full-stack developer. creating 
                    digital solutions that make a difference. My journey started with curiosity 
                    about how websites work, and has evolved into a deep love for crafting 
                    user-centered applications.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    I specialize in modern web technologies and enjoy the challenge of turning 
                    complex problems into simple, elegant solutions. When I'm not coding, you'll 
                    find me exploring new technologies, contributing to open source;
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {['React', 'TypeScript', 'Node.js', 'Python', 'Docker'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-600 text-slate-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group perspective-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="transform-gpu transition-all duration-500 hover:rotate-y-6 hover:scale-105 preserve-3d">
                  <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 shadow-lg group-hover:shadow-xl group-hover:shadow-cyan-500/10">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <highlight.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {highlight.title}
                        </h4>
                        <p className="text-slate-300 text-sm">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;