import AdminMaster from './components/layouts/AdminMaster';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import Home from './pages/Home.Page';
import Users from './pages/Users.Page';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AdminMaster>
        <Home />
      </AdminMaster>
    ),
  },
  {
    path: '/users',
    element: (
      <AdminMaster>
        <Users />
      </AdminMaster>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
