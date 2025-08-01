import { FC } from 'react';
import { Project } from 'types/linkedin';

interface LinkedInProjectCardProps {
  project: Project;
}

const LinkedInProjectCard: FC<LinkedInProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative w-full max-w-4xl overflow-hidden rounded-lg border border-white/10 bg-black/20 transition-all duration-300 hover:border-white/20 hover:bg-black/30">
      <div className="flex flex-col lg:flex-row">
        {/* Project Image */}
        <div className="relative h-48 w-full overflow-hidden lg:h-64 lg:w-1/3">
          <div className="h-full w-full bg-gradient-to-br from-blue-500/20 to-purple-500/20">
            {/* Placeholder for project image */}
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="mb-2 text-4xl">🚀</div>
                <p className="text-sm text-white/60">Project Preview</p>
              </div>
            </div>
          </div>
          {project.featured && (
            <div className="absolute top-4 left-4 rounded-full bg-yellow-500 px-3 py-1 text-xs font-bold text-black">
              Featured
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <h3 className="mb-2 text-2xl font-bold text-white/90 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p className="mb-4 text-white/70 leading-relaxed">
              {project.description}
            </p>
            
            {/* Technologies */}
            <div className="mb-4">
              <p className="mb-2 text-sm font-medium text-white/60">Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 hover:bg-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/20 transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInProjectCard; 