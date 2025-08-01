import { FC } from 'react';
import { Education, Certification } from 'types/linkedin';

interface EducationSectionProps {
  education: Education[];
  certifications: Certification[];
}

const EducationSection: FC<EducationSectionProps> = ({ education, certifications }) => {
  return (
    <div className="mt-[260px] w-full lg:mt-[240px]">
      <p className="text-4xl font-bold text-white/40 lg:text-8xl">EDUCATION</p>
      <p className="mt-1 text-lg">
        My academic background and professional certifications.
      </p>
      
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Education */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white/80">Academic Background</h3>
          {education.map((edu, index) => (
            <div key={index} className="rounded-lg border border-white/10 bg-black/20 p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white/90">{edu.institution}</h4>
                  <p className="text-white/70">{edu.degree} in {edu.field}</p>
                  <p className="text-sm text-white/50">{edu.startDate} - {edu.endDate}</p>
                  {edu.description && (
                    <p className="mt-2 text-sm text-white/60">{edu.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white/80">Certifications</h3>
          {certifications.map((cert, index) => (
            <div key={index} className="rounded-lg border border-white/10 bg-black/20 p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white/90">{cert.name}</h4>
                  <p className="text-white/70">{cert.issuer}</p>
                  <p className="text-sm text-white/50">Issued: {cert.issueDate}</p>
                  {cert.credentialId && (
                    <p className="text-sm text-white/50">ID: {cert.credentialId}</p>
                  )}
                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Credential →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection; 