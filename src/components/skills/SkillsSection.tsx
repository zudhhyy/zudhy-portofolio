import { FC } from 'react';
import { Skill } from 'types/linkedin';

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: FC<SkillsSectionProps> = ({ skills }) => {
  const categories = [
    'Programming Languages',
    'Frameworks & Libraries',
    'Tools & Technologies',
    'Databases',
    'Cloud & DevOps',
    'Design & UI/UX'
  ];

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert':
        return 'bg-green-500';
      case 'Advanced':
        return 'bg-blue-500';
      case 'Intermediate':
        return 'bg-yellow-500';
      case 'Beginner':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getProficiencyWidth = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert':
        return 'w-full';
      case 'Advanced':
        return 'w-3/4';
      case 'Intermediate':
        return 'w-1/2';
      case 'Beginner':
        return 'w-1/4';
      default:
        return 'w-1/4';
    }
  };

  return (
    <div className="mt-[260px] w-full lg:mt-[240px]">
      <p className="text-4xl font-bold text-white/40 lg:text-8xl">SKILLS</p>
      <p className="mt-1 text-lg">
        My technical skills and expertise across various technologies and tools.
      </p>
      
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {categories.map((category) => {
          const categorySkills = skills.filter(skill => skill.category === category);
          
          if (categorySkills.length === 0) return null;
          
          return (
            <div key={category} className="rounded-lg border border-white/10 bg-black/20 p-6">
              <h3 className="mb-4 text-xl font-bold text-white/80">{category}</h3>
              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-white/70">{skill.name}</span>
                      <span className="text-sm text-white/50">{skill.proficiency}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${getProficiencyColor(skill.proficiency)} ${getProficiencyWidth(skill.proficiency)}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection; 