import MainLayout from 'components/layout/MainLayout';
import Home from 'pages/home/Home';
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
    path: 'about',
    element: <div>About</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
