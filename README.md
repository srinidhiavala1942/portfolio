# Srinidhi – Personal Portfolio 🌍

A modern, fully responsive personal portfolio website built to showcase my journey as a Full Stack Software Engineer. This site highlights key professional experiences, featured projects, and contact options — all presented with clean design and smooth animations.

---

## 🔧 Tech Stack

- **Frontend Framework:** React.js (with Vite)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D Graphics:** Three.js (for interactive Earth model)
- **Routing:** React Router
- **UI Enhancements:** React Icons, React Tilt
- **Cloud & CI/CD:**
  - AWS S3 (Static site hosting)
  - AWS CodePipeline + CodeBuild (CI/CD automation)
  - Vercel (Production deployment & custom domain hosting)

---

## 🌍 Live Links

- 🚀 [Live Site](https://noelpaulmoses.com)
- 🌐 [AWS Static Backup](http://noel-portfolio-bucket-cicd.s3-website-us-east-1.amazonaws.com/)

---

## 🛠️ AWS Deployment (CI/CD)

During development and testing, the project was deployed using AWS infrastructure:

1. **S3 Bucket**: For static website hosting (`index.html`, assets, etc.).
2. **CloudFront (optional)**: Can be added for CDN distribution.
3. **CodePipeline**: Triggered on GitHub push events to automate deployment.
4. **CodeBuild**: Runs `npm install && npm run build` to build the React project before pushing the output to S3.

> Production version is hosted on **Vercel** for seamless Git-based deployment and SSL support.

---

## 🌟 Key Features

- ⚡ Responsive and mobile-friendly design
- 🎯 Project carousel with auto-rotation and navigation
- 🌐 Animated 3D Earth model with **Three.js**
- 📄 Resume download link
- 🌈 Smooth scroll, transitions, and page section highlights
- 📬 Integrated contact section and social media links

---

## 📁 Project Structure (Simplified)

