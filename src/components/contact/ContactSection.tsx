import { FC } from 'react';
import { LinkedInProfile } from 'types/linkedin';

interface ContactSectionProps {
  profile: LinkedInProfile;
}

const ContactSection: FC<ContactSectionProps> = ({ profile }) => {
  const contactItems = [
    {
      label: 'LinkedIn',
      value: profile.contact.linkedin,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      label: 'GitHub',
      value: profile.contact.github,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      label: 'Email',
      value: profile.contact.email,
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ].filter(item => item.value);

  return (
    <div className="mt-[260px] w-full lg:mt-[240px]">
      <p className="text-4xl font-bold text-white/40 lg:text-8xl">CONTACT</p>
      <p className="mt-1 text-lg">
        Let's connect! Feel free to reach out for collaborations or opportunities.
      </p>
      
      <div className="mt-8 rounded-lg border border-white/10 bg-black/20 p-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white/80">Get In Touch</h3>
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 p-4 transition-all duration-300 hover:border-white/20 hover:bg-black/30"
                >
                  <div className="text-white/70">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium text-white/90">{item.label}</p>
                    <p className="text-sm text-white/60">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Location & About */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white/80">Location</h3>
            <div className="rounded-lg border border-white/10 bg-black/20 p-4">
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium text-white/90">Based in</p>
                  <p className="text-white/70">{profile.location}</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white/80">About</h3>
            <div className="rounded-lg border border-white/10 bg-black/20 p-4">
              <p className="text-white/70 leading-relaxed">
                {profile.about}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection; 