import React, { useState } from 'react';

const Skills = () => {
  const skillsData = [
    { name: 'Java', progress: 70 },
    { name: 'C', progress: 55 },
    { name: 'Python', progress: 85 },
    { name: 'React', progress: 60 },
    { name: 'Swift', progress: 66 },
    { name: 'JS', progress: 90 },
    { name: 'HTML', progress: 90 },
    { name: 'CSS', progress: 50 }
    // Add other skills and their progress values
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleSkillHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <section id="skills" className="bg-gray-700 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-white font-mono underline">Skills</h2>
        <div className="skills-container">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-16 font-mono mt-5">
          {skillsData.map((skill, index) => {
            const radius = 35;
            const circumference = 2 * Math.PI * radius;
            const progressOffset = (circumference * (100 - skill.progress)) / 100;
            const centerX = radius + 5;
            const centerY = radius + 5;
            const startPointX = centerX + radius * Math.cos(-Math.PI / 2);
            const startPointY = centerY + radius * Math.sin(-Math.PI / 2);
            const endPointX = centerX + radius * Math.cos((2 * Math.PI * skill.progress) / 100 - Math.PI / 2);
            const endPointY = centerY + radius * Math.sin((2 * Math.PI * skill.progress) / 100 - Math.PI / 2);
            const largeArcFlag = skill.progress > 50 ? 1 : 0;
            const progressBarStyle = {
              strokeDasharray: circumference,
              strokeDashoffset: circumference,
              transition: 'stroke-dashoffset 0.7s ease-in-out',
            };

            if (hoveredIndex === index) {
              progressBarStyle.strokeDashoffset = progressOffset;
            }

            return (
              <li
                className={`text-lg text-white`}
                key={index}
                onMouseEnter={() => handleSkillHover(index)}
                onMouseLeave={() => handleSkillHover(null)}
              >
                <div className="skill-tile">
                  <span className="skill-name">{skill.name}</span>
                  <svg className="progress-bar">
                    <circle
                      r={radius}
                      cx={centerX}
                      cy={centerY}
                      fill="transparent"
                      stroke="#2c2525"
                      strokeWidth="3px"
                    />
                    <path
                      d={`M ${startPointX} ${startPointY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endPointX} ${endPointY}`}
                      fill="transparent"
                      stroke="#00FF00"
                      strokeWidth="3px"
                      style={progressBarStyle}
                    />
                  </svg>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      </div>
    </section>
  );
};

export default Skills;
