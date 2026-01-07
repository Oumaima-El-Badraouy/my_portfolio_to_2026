# Developer Portfolio 2026

A modern, immersive, and fully responsive developer portfolio website built with **React**, **Three.js**, and **Tailwind CSS**. This project showcases my skills, experience, and projects through an interactive and visually engaging user interface.

##  Features

- **3D Interactive Hero Section**: Immersive 3D elements powered by [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/).
- **Smooth Animations**: Seamless transitions and scroll animations using [Framer Motion](https://www.framer.com/motion/).
- **Responsive Design**: Fully responsive layout optimized for all devices (Mobile, Tablet, Desktop).
- **Contact Form**: Functional contact form integrated with **EmailJS** for real-time emails.
- **Modern UI/UX**: Glassmorphism effects, custom gradients, and a clean, dark-themed aesthetic.
- **Project Showcase**: dedicated section to display portfolio projects with links to GitHub and live demos.

##  Technologies Used

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **3D Graphics**: [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/), [React Three Drei](https://github.com/pmndrs/drei)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **Form Handling**: [EmailJS](https://www.emailjs.com/)

##  Project Structure

```bash
developer-portfolio/
├── public/              # Static assets (images, resumes, models)
├── src/
│   ├── components/      # Reusable React components (Hero, About, Projects, etc.)
│   ├── assets/          # Local assets
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Entry point
├── index.html           # HTML entry point
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [Bun](https://bun.sh/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Oumaima-El-Badraouy/developer-portfolio.git
   cd developer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

###  Environment Variables

To make the Contact form work, you need to set up **EmailJS**.

1. Create a `.env` file in the root directory.
2. Add your EmailJS credentials:

   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   > **Note:** If you are using Vite's default env handling, you might need to update the code to use `import.meta.env.VITE_...` and rename these variables to start with `VITE_`.

### 🏃‍♂️ Running the Project

Start the development server:

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### 🏗️ Build for Production

Build the app for production to the `dist` folder:

```bash
npm run build
```

##  Contributing

Contributions are welcome! If you have any suggestions or improvements, please create a pull request or open an issue.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

##  License

Distributed under the MIT License. See `LICENSE` for more information.

##  Contact

**Oumaima El Badraouy** - [LinkedIn](https://www.linkedin.com/in/oumaima-el-badraouy/) - [GitHub](https://github.com/Oumaima-El-Badraouy)

Email: omaimaelbdraouy@gmail.com