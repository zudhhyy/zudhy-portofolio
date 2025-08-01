import { FC, useState, useMemo } from "react";
import LinkedInProjectCard from "components/card/LinkedInProjectCard";
import LINKEDIN_DATA from "constants/linkedin";

const Projects: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = useMemo(() => {
    const allCategories = new Set<string>();
    LINKEDIN_DATA.projects.forEach((project) => {
      project.technologies.forEach((tech) => {
        allCategories.add(tech);
      });
    });
    return Array.from(allCategories).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return LINKEDIN_DATA.projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      const matchesCategory =
        selectedCategory === "all" ||
        project.technologies.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-black px-[4%] py-8 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold lg:text-7xl">My Projects</h1>
          <p className="text-xl text-white/70">
            A collection of my work showcasing various technologies and
            solutions
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-white/50 focus:border-white/30 focus:outline-none"
            />
            <svg
              className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              All Projects
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <LinkedInProjectCard key={index} project={project} />
            ))
          ) : (
            <div className="py-12 text-center">
              <div className="mb-4 text-6xl">🔍</div>
              <h3 className="mb-2 text-xl font-bold text-white/80">
                No projects found
              </h3>
              <p className="text-white/60">
                Try adjusting your search terms or category filter
              </p>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-6 rounded-lg border border-white/10 bg-black/20 p-8 lg:grid-cols-4">
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-blue-400">
              {LINKEDIN_DATA.projects.length}
            </div>
            <div className="text-white/70">Total Projects</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-green-400">
              {LINKEDIN_DATA.projects.filter((p) => p.featured).length}
            </div>
            <div className="text-white/70">Featured Projects</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-purple-400">
              {categories.length}
            </div>
            <div className="text-white/70">Technologies Used</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-yellow-400">
              {LINKEDIN_DATA.projects.filter((p) => p.liveUrl).length}
            </div>
            <div className="text-white/70">Live Demos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
