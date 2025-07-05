import React, { useState } from 'react';
import { Download, Calendar, MapPin, Award, GraduationCap, Briefcase, Star, ExternalLink } from 'lucide-react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const handleDownloadResume = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;
    let yPosition = 30;

    // Header
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('Aryan', margin, yPosition);
    
    yPosition += 10;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'normal');
    doc.text('Full Stack Developer', margin, yPosition);
    
    yPosition += 8;
    doc.setFontSize(10);
    doc.text('Email: aryanpaswan801@gmail.com', margin, yPosition);
    
    yPosition += 5;
    doc.text('LinkedIn: linkedin.com/in/aryan-020959304', margin, yPosition);
    
    yPosition += 5;
    doc.text('GitHub: github.com/aryan-95', margin, yPosition);
    
    yPosition += 15;

    // Professional Summary
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Professional Summary', margin, yPosition);
    yPosition += 8;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const summary = "Passionate full-stack developer creating digital solutions that make a difference. Specializing in modern web technologies with expertise in React, TypeScript, Node.js, and Python.";
    const splitSummary = doc.splitTextToSize(summary, pageWidth - 2 * margin);
    doc.text(splitSummary, margin, yPosition);
    yPosition += splitSummary.length * 5 + 10;

    // Experience Section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Professional Experience', margin, yPosition);
    yPosition += 10;

    experience.forEach((job) => {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(job.title, margin, yPosition);
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text(`${job.company} | ${job.location} | ${job.period}`, margin, yPosition + 5);
      
      yPosition += 12;
      const jobDesc = doc.splitTextToSize(job.description, pageWidth - 2 * margin);
      doc.text(jobDesc, margin, yPosition);
      yPosition += jobDesc.length * 4 + 3;
      
      job.achievements.forEach((achievement) => {
        const achText = `• ${achievement}`;
        const splitAch = doc.splitTextToSize(achText, pageWidth - 2 * margin - 10);
        doc.text(splitAch, margin + 5, yPosition);
        yPosition += splitAch.length * 4 + 2;
      });
      yPosition += 8;
    });

    // Education Section
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 30;
    }
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Education', margin, yPosition);
    yPosition += 10;

    education.forEach((edu) => {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(edu.degree, margin, yPosition);
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text(`${edu.school} | ${edu.location} | ${edu.period}`, margin, yPosition + 5);
      doc.text(`CGPA: ${edu.Cgpa}`, margin, yPosition + 10);
      
      yPosition += 18;
      edu.achievements.forEach((achievement) => {
        const achText = `• ${achievement}`;
        const splitAch = doc.splitTextToSize(achText, pageWidth - 2 * margin - 10);
        doc.text(splitAch, margin + 5, yPosition);
        yPosition += splitAch.length * 4 + 2;
      });
      yPosition += 8;
    });

    // Skills Section
    if (yPosition > 220) {
      doc.addPage();
      yPosition = 30;
    }
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Technical Skills', margin, yPosition);
    yPosition += 10;

    const skillCategories = [
      {
        title: 'Frontend',
        skills: ['React (95%)', 'TypeScript (90%)', 'Tailwind CSS (88%)']
      },
      {
        title: 'Backend',
        skills: ['Node.js (92%)', 'Python (88%)', 'MongoDB (80%)']
      },
      {
        title: 'Tools',
        skills: ['Git (90%)', 'Docker (85%)']
      },
      {
        title: 'Design',
        skills: ['UI/UX (85%)', 'Responsive Design (92%)', 'Accessibility (80%)']
      }
    ];

    skillCategories.forEach((category) => {
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(`${category.title}:`, margin, yPosition);
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      const skillsText = category.skills.join(', ');
      const splitSkills = doc.splitTextToSize(skillsText, pageWidth - 2 * margin - 30);
      doc.text(splitSkills, margin + 25, yPosition);
      yPosition += Math.max(splitSkills.length * 4, 6) + 3;
    });

    // Certifications
    yPosition += 5;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Certifications', margin, yPosition);
    yPosition += 10;

    certifications.forEach((cert) => {
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(cert.name, margin, yPosition);
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text(`${cert.issuer} | ${cert.date}`, margin, yPosition + 5);
      doc.text(`Credential ID: ${cert.credentialId}`, margin, yPosition + 10);
      
      yPosition += 18;
    });

    // Save the PDF
    doc.save('Aryan_Resume.pdf');
  };

  const experience = [
    {
      title: ' Full Stack Developer   ',
      company: 'outlier.ai',
      jobType: 'Freelancer',
      location: 'New Delhi',
      period: '2025',
      description: ' As a freelancer Lead development of enterprise web applications using React, Node.js, and cloud technologies. ',
      achievements: [
        'Architected and deployed microservices handling requests',
        'Reduced application load time by 60% through optimization',
        
      ]
    },
    /*{
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'San Francisco, CA',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect user interfaces.',
      achievements: [
        'Built 15+ responsive web applications from scratch',
        'Integrated third-party APIs and payment systems',
        'Improved code coverage from 40% to 85%',
        'Reduced bug reports by 50% through rigorous testing'
      ]
    },*/
   /* {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Specialized in creating interactive user interfaces and optimizing web performance. Worked with clients across various industries.',
      achievements: [
        'Delivered 20+ client projects on time and within budget',
        'Achieved 95+ PageSpeed scores on all projects',
        'Implemented accessibility standards (WCAG 2.1)',
        'Increased client satisfaction scores by 30%'
      ]
    }*/
  ];

  const education = [
    {
      degree: 'B.Tech in Information Technology',
      school: 'Kiet group of Institutions Ghaziabad',
      location: 'Ghaziabad Uttar Pradesh India',
      period: '2024-2028',
      Cgpa:'7.0',
      achievements: [
        'Final Round In IIIT Delhi Hackathon Foodscope',
        'Top 4 In NSUT Delhi Hackathon ALT+HAck',
        
      ]
    },
   
  ];

  const certifications = [
    {
      name: 'Foodscope ',
      issuer: 'IIIT Delhi',
      date: '2024',
      credentialId: '5ba1cf04-7d48-49e9-ae54-15d541426a00'
    }
    
    
  ];

  const tabs = [
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award },
  ];

  return (
    <section id="resume" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Resume</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-6 max-w-2xl mx-auto">
            Comprehensive overview of my professional experience, education, and achievements.
          </p>
          
          {/* Download Button */}
          <button
            onClick={handleDownloadResume}
            className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF Resume
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-2">
            <div className="flex space-x-2">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="group perspective-1000"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="transform-gpu transition-all duration-700 hover:rotate-y-3 hover:scale-102 preserve-3d">
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl group-hover:shadow-xl group-hover:shadow-cyan-500/10">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-xl text-cyan-400 font-semibold">{job.company}</p>
                        </div>
                        <div className="mt-2 md:mt-0 text-right">
                          <div className="flex items-center text-slate-300 mb-1">
                            <Calendar className="w-4 h-4 mr-2" />
                            {job.period}
                          </div>
                          <div className="flex items-center text-slate-300">
                            <MapPin className="w-4 h-4 mr-2" />
                            {job.location}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {job.description}
                      </p>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Star className="w-5 h-5 mr-2 text-yellow-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-slate-300">
                              <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="group perspective-1000"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="transform-gpu transition-all duration-700 hover:rotate-y-3 hover:scale-102 preserve-3d">
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl group-hover:shadow-xl group-hover:shadow-cyan-500/10">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {edu.degree}
                          </h3>
                          <p className="text-xl text-cyan-400 font-semibold">{edu.school}</p>
                          <p className="text-slate-300 font-medium">CGPA: {edu.Cgpa}</p>
                        </div>
                        <div className="mt-2 md:mt-0 text-right">
                          <div className="flex items-center text-slate-300 mb-1">
                            <Calendar className="w-4 h-4 mr-2" />
                            {edu.period}
                          </div>
                          <div className="flex items-center text-slate-300">
                            <MapPin className="w-4 h-4 mr-2" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Star className="w-5 h-5 mr-2 text-yellow-400" />
                          Achievements & Activities
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-slate-300">
                              <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group perspective-1000"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="transform-gpu transition-all duration-700 hover:rotate-y-6 hover:scale-105 preserve-3d">
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-2xl group-hover:shadow-xl group-hover:shadow-cyan-500/10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm text-slate-400">{cert.date}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {cert.name}
                      </h3>
                      <p className="text-cyan-400 font-semibold mb-2">{cert.issuer}</p>
                      <p className="text-slate-300 text-sm">
                        Credential ID: {cert.credentialId}
                      </p>
                      
                      <button className="mt-4 flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group/link">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform" />
                        Verify Credential
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;