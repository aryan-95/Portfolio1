import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, Sparkles, Zap, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Enhanced Background with 3D effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping delay-500"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping delay-700"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">

          {/* Left Column - Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Decorative elements */}
            <div className="absolute top-8 left-8 text-cyan-400/20 hidden lg:block">
              <Code className="w-12 h-12" />
            </div>

            {/* Greeting */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-cyan-400 font-medium">
                <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                <span>Hello, I'm</span>
              </div>
            </div>

            {/* Name with enhanced gradient animation */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                  Aryan
                </span>
              </h1>

              {/* Title with typing effect */}
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-cyan-400">
                  Full Stack Developer
                </h2>
                <div className="absolute -right-1 top-1 w-0.5 h-8 bg-cyan-400 animate-pulse"></div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xl">
              Crafting digital experiences with modern technologies. 
              <span className="text-cyan-400 font-semibold"> Passionate</span> about clean code, 
              <span className="text-purple-400 font-semibold"> innovative solutions</span>, and bringing ideas to life.
            </p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'Python' ].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-600 text-slate-200 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 cursor-default transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              {[
                
                { number: '4+', label: 'Projects' },
                { number: '100%', label: 'Satisfaction' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 group"
              >
                <span>Learn More</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={scrollToProjects}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              {[
                { icon: Github, href: 'https://github.com/aryan-95', label: 'GitHub', color: 'hover:text-gray-400' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/aryan-020959304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn', color: 'hover:text-blue-400' },
                { icon: Mail, href: 'aryanpaswan801@gmail.com', label: 'Email', color: 'hover:text-red-400' },
              ].map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  className={`group relative p-3 bg-slate-800/50 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25 ${color}`}
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 text-slate-300 group-hover:scale-110 transition-all duration-300" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="relative lg:pl-8">
            <div className="perspective-1000">
              <div className="transform-gpu transition-all duration-1000 hover:rotate-y-12 hover:scale-105 preserve-3d">
                {/* Main photo container */}
                <div className="relative">
                  {/* Background decorative elements */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>

                  {/* Photo frame */}
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-6 shadow-2xl">
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
                      <img
                        src="/attached_assets/image aryan_1751703335583.jpg"
                        alt="Aryan - Full Stack Developer"
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                    </div>

                    {/* Floating decorative elements */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>

                    <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                      <Zap className="w-5 h-5 text-white" />
                    </div>

                    {/* Code snippet overlay */}
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm rounded-lg p-3 text-xs font-mono text-green-400 opacity-80">
                      <div>{'const developer = {'}</div>
                      <div className="ml-2">{'name: "Aryan",'}</div>
                      <div className="ml-2">{'passion: "coding"'}</div>
                      <div>{'}'}</div>
                    </div>
                  </div>

                  {/* Floating tech icons */}
                  <div className="absolute -right-8 top-1/4 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center animate-float">
                    <span className="text-blue-400 text-xs font-bold">TS</span>
                  </div>

                  <div className="absolute -left-8 top-1/2 w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center animate-float delay-500">
                    <span className="text-cyan-400 text-xs font-bold">JS</span>
                  </div>

                  <div className="absolute -right-6 bottom-1/4 w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center animate-float delay-1000">
                    <span className="text-green-400 text-xs font-bold">PY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-slate-400 text-sm">Scroll Down</span>
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;