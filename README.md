# Zudhy Portfolio - LinkedIn Integration

A modern, responsive portfolio website showcasing Tubagus Dhaifullah Zuhdi's professional experience, skills, and projects with comprehensive LinkedIn integration.

## 🚀 Features

### LinkedIn Integration
- **Complete Profile Data**: Integrated all LinkedIn profile information including name, headline, location, and about section
- **Professional Experience**: Detailed work history with company information, positions, and descriptions
- **Skills & Expertise**: Comprehensive skills showcase with proficiency levels across multiple categories
- **Education & Certifications**: Academic background and professional certifications
- **Project Portfolio**: Featured projects with technologies, descriptions, and live links
- **Contact Information**: Direct links to LinkedIn, GitHub, and email

### Key Sections
1. **Home Page**: Hero section with animated introduction and contact links
2. **Experience**: Professional work history with detailed descriptions
3. **Projects**: Featured projects with technology stacks and live demos
4. **Skills**: Interactive skills showcase with proficiency levels
5. **Education**: Academic background and certifications
6. **Contact**: Professional contact information and location

### Technical Features
- **Responsive Design**: Optimized for all device sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth routing between sections
- **Search & Filter**: Advanced project filtering by technology
- **Performance Optimized**: Fast loading with optimized assets

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: CSS animations and transitions
- **Icons**: SVG icons and emojis
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/
│   ├── background/
│   │   └── SpinningEarth.tsx
│   ├── button/
│   │   └── Button.tsx
│   ├── card/
│   │   ├── CardExperience.tsx
│   │   ├── ProjectCard.tsx
│   │   └── LinkedInProjectCard.tsx
│   ├── contact/
│   │   └── ContactSection.tsx
│   ├── education/
│   │   └── EducationSection.tsx
│   ├── layout/
│   │   └── MainLayout.tsx
│   ├── navbar/
│   │   └── Navbar.tsx
│   └── skills/
│       └── SkillsSection.tsx
├── constants/
│   ├── experience.ts
│   └── linkedin.ts
├── pages/
│   ├── home/
│   │   └── Home.tsx
│   ├── projects/
│   │   └── Projects.tsx
│   └── skills/
│       └── Skills.tsx
├── types/
│   ├── experience.ts
│   └── linkedin.ts
└── App.tsx
```

## 🎯 LinkedIn Data Integration

### Profile Information
- **Name**: Tubagus Dhaifullah Zuhdi
- **Headline**: Fullstack Developer | Frontend Specialist | React & React Native Expert
- **Location**: Jakarta, Indonesia
- **About**: Comprehensive professional summary

### Skills Categories
1. **Programming Languages**: JavaScript, TypeScript, Python, Java, PHP
2. **Frameworks & Libraries**: React, React Native, Next.js, Node.js, Express.js, Laravel
3. **Tools & Technologies**: Git, GitHub, VS Code, Postman, Figma, Adobe XD
4. **Databases**: MySQL, PostgreSQL, MongoDB, Firebase
5. **Cloud & DevOps**: AWS, Vercel, Netlify, Docker
6. **Design & UI/UX**: Responsive Design, UI/UX Design, Mobile App Design

### Featured Projects
1. **Heal Station Mobile App** - Healthcare application with React Native
2. **Desociety.io** - Web3 platform with blockchain integration
3. **E-Commerce Platform** - Full-stack e-commerce solution
4. **Task Management App** - Collaborative task management
5. **Weather Dashboard** - Weather application with APIs
6. **Portfolio Website** - This current portfolio

### Professional Experience
- **Heal Station Indonesia** - Frontend Developer (2022 - Present)
- **Desociety.io** - Frontend Developer (2021 - 2022)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zudhy-portofolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

## 🎨 Customization

### Updating LinkedIn Data
All LinkedIn data is stored in `src/constants/linkedin.ts`. You can easily update:

- Profile information
- Skills and proficiency levels
- Projects and descriptions
- Education and certifications
- Contact information

### Styling
The project uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Global styles in `src/theme/index.css`
- Component-specific styles in individual components

### Adding New Sections
1. Create new components in the appropriate directory
2. Add routes in `src/App.tsx`
3. Update navigation in `src/components/navbar/Navbar.tsx`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔗 Links

- **Live Demo**: [Portfolio Website](http://localhost:5173)
- **LinkedIn**: [Tubagus Dhaifullah Zuhdi](https://www.linkedin.com/in/tubagus-dhaifullah-zuhdi/)
- **GitHub**: [zudhy](https://github.com/zudhy)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ by Tubagus Dhaifullah Zuhdi**
