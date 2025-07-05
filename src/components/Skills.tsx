import React from 'react';
import { Code, Database, Wrench, Palette ,}  from 'lucide-react';

const Skills = () => {
  const skillCategories = [
   
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 88 },
       
      ],
    },
    {
      title: 'Backend',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Python', level: 88 },
        
        { name: 'MongoDB', level: 80 },
      ],
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 85 },
        
      ],
    },
    {
      title: 'Design',
      icon: Palette,
      skills: [
       
        { name: 'UI/UX', level: 85 },
        { name: 'Responsive Design', level: 92 },
        { name: 'Accessibility', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group perspective-1000"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="transform-gpu transition-all duration-700 hover:rotate-y-12 hover:scale-105 preserve-3d">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-2xl group-hover:shadow-xl group-hover:shadow-cyan-500/10">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 font-medium">{skill.name}</span>
                          <span className="text-slate-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
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

export default Skills;