import MainLayout from 'components/layout/MainLayout';
import Home from 'pages/home/Home';
import Projects from 'pages/projects/Projects';
import Skills from 'pages/skills/Skills';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: 'projects',
    element: (
      <MainLayout>
        <Projects />
      </MainLayout>
    ),
  },
  {
    path: 'skills',
    element: (
      <MainLayout>
        <Skills />
      </MainLayout>
    ),
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
