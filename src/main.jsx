import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Education from './Components/About/Education.jsx';
import Personal from './Components/About/Personal.jsx';
import Skills from './Components/About/Skills.jsx';
import Competition from './Components/Performance/Competition.jsx';
import About from './Components/About/About.jsx';
import Camp from './Components/Performance/Camp';
import Myproject from './Components/Performance/Myproject.jsx';
import Competiton from "./Components/Performance/Competition";
import Design from "./Components/Performance/Design.jsx";
import Contact from '../src/Components/About/contact.jsx';
import Document from './Components/Window/Document.jsx';

import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "Education",
    element: <Education />
  },
  {
    path: "Personal",
    element: <Personal />
  },
  {
    path: "Skills",
    element: <Skills />
  },
  {
    path: "Competition",
    element: <Competition />
  },
  {
    path: "About",
    element: <About />
  },
  {
    path: "Camp",
    element: <Camp />
  },
  {
    path: "Competiton",
    element: <Competiton />
  },
  {
    path: "Myproject",
    element: <Myproject />
  },
  {
    path: "Contact",
    element: <Contact />
  },
  {
    path: "Design", // เพิ่มเส้นทางสำหรับหน้า Design
    element: <Design />
  },
  {
    path: "Document",
    element: <Document />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
