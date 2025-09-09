# EduHub React

A modern, React-based course management system for Lviv Polytechnic National University.

## Project Overview

**EduHub React** is a course work project aimed at improving the appearance and functionality of the existing CMS used at Lviv Polytechnic National University. The goal is to provide a more user-friendly, visually appealing, and feature-rich platform for students and faculty.

## Features

- Modern, responsive UI built with React and TypeScript
- Clean blue-white theme for a professional look
- Authentication page with Google Auth integration
- Modular, maintainable codebase using CSS Modules
- Navigation bar with quick access to main sections
- Ready for further expansion (courses, dashboard, etc.)

## Tech Stack

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for fast development
- [Lucide React](https://lucide.dev/) for icons
- [React Router](https://reactrouter.com/) for navigation
- CSS Modules for scoped styling
- [ to be expanded soon ]

## Getting Started

For local development, follow the steps listed below.

1. **Clone the repository:**

  ```sh
  git clone https://github.com/cheporte/edu-hub-react.git
  cd edu-hub-react
  ```

2. **Install dependencies:**

  ```sh
  npm install
  ```

3. **Start the development server:**

  ```sh
  npm run dev
  ```

4. **Open your browser:**

  Visit [http://localhost:5173](http://localhost:5173) to view the app.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint the codebase

## Folder Structure

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Navbar/
│   ├── pages/
│   │   └── Auth/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── ...
```


## ToDo

- Implement the dashboard
  - [ ] course listings
  - [ ] deadlines and quick navigation between courses
- Implement the course section
  - [ ] lecture materials
  - [ ] assignments
  - [ ] inidividual course statistics
  - [ ] inside chat for communication between students and their professor 
- Implement the user profile page
  - [ ] profile customization
  - [ ] overall statistics

## License

This project is for educational purposes at Lviv Polytechnic National University.

---

> Created as a course work project to modernize and enhance the university's digital learning experience.