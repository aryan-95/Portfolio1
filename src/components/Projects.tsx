import React from 'react';
import { ExternalLink, Github, Zap, Shield, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Luxe Layer',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'html' ,'css','javascript'],
      github: 'https://github.com/aryan-95/Luxe-Layers',
      icon: Zap,
    },
    {
      title: 'Nutribite',
      description: 'NutriBite is a global food discovery platform that brings together recipes from every corner of the world.',
      image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React',  'MongoDB', 'Nodejs'],
      github: 'https://github.com/aryan-95/fork-it-foodoscope',
      live: '#',
      icon: Shield,
    },
    {
      title: 'Health.ai',
      description: 'Cross-platform mobile application for health tracking with wearable device integration and AI-powered insights.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React','node.js','mongoDB','Gen.ai'],
      github: 'https://github.com/aryan-95/HealthAI',
      live: '#',
      icon: Smartphone,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group perspective-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="transform-gpu transition-all duration-700 hover:rotate-y-6 hover:scale-105 preserve-3d">
                <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-xl group-hover:shadow-cyan-500/10">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <project.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-600 text-slate-200 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition-colors group/link"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform" />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all group/link"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform" />
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;