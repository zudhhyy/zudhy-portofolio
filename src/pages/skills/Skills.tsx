import { FC, useState } from 'react';
import LINKEDIN_DATA from 'constants/linkedin';

const Skills: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'Programming Languages',
    'Frameworks & Libraries',
    'Tools & Technologies',
    'Databases',
    'Cloud & DevOps',
    'Design & UI/UX'
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? LINKEDIN_DATA.skills 
    : LINKEDIN_DATA.skills.filter(skill => skill.category === selectedCategory);

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert':
        return 'text-green-400 border-green-400';
      case 'Advanced':
        return 'text-blue-400 border-blue-400';
      case 'Intermediate':
        return 'text-yellow-400 border-yellow-400';
      case 'Beginner':
        return 'text-gray-400 border-gray-400';
      default:
        return 'text-gray-400 border-gray-400';
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

  const getProficiencyBgColor = (proficiency: string) => {
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

  return (
    <div className="min-h-screen bg-black px-[4%] py-8 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold lg:text-7xl">Skills & Expertise</h1>
          <p className="text-xl text-white/70">
            My technical skills and proficiency levels across various technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`rounded-full px-6 py-3 text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            All Skills
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group rounded-lg border border-white/10 bg-black/20 p-6 transition-all duration-300 hover:border-white/20 hover:bg-black/30"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white/90">{skill.name}</h3>
                <span className={`rounded-full border px-3 py-1 text-xs font-medium ${getProficiencyColor(skill.proficiency)}`}>
                  {skill.proficiency}
                </span>
              </div>
              
              <div className="mb-4">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-white/60">Proficiency</span>
                  <span className="text-white/40">{skill.proficiency}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${getProficiencyBgColor(skill.proficiency)} ${getProficiencyWidth(skill.proficiency)}`}
                  />
                </div>
              </div>

              <div className="text-sm text-white/60">
                <span className="font-medium text-white/70">Category:</span> {skill.category}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-6 rounded-lg border border-white/10 bg-black/20 p-8 lg:grid-cols-4">
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-blue-400">
              {LINKEDIN_DATA.skills.length}
            </div>
            <div className="text-white/70">Total Skills</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-green-400">
              {LINKEDIN_DATA.skills.filter(s => s.proficiency === 'Expert').length}
            </div>
            <div className="text-white/70">Expert Level</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-yellow-400">
              {LINKEDIN_DATA.skills.filter(s => s.proficiency === 'Advanced').length}
            </div>
            <div className="text-white/70">Advanced Level</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-purple-400">
              {categories.length}
            </div>
            <div className="text-white/70">Categories</div>
          </div>
        </div>

        {/* Proficiency Legend */}
        <div className="mt-8 rounded-lg border border-white/10 bg-black/20 p-6">
          <h3 className="mb-4 text-xl font-bold text-white/80">Proficiency Levels</h3>
          <div className="grid gap-4 lg:grid-cols-4">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="text-white/70">Expert - Mastery level</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
              <span className="text-white/70">Advanced - Highly proficient</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <span className="text-white/70">Intermediate - Good working knowledge</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-gray-500"></div>
              <span className="text-white/70">Beginner - Basic understanding</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills; 