import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Portfolio from './Pages/Portfolio/Portfolio.tsx';
import Blog from './Pages/Blog/Blog.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header.tsx';
import Footer from './Components/Footer/Footer.tsx';
import Publication from './Pages/Publication/Publication.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:publicationId",
    element: <Publication />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
      <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
