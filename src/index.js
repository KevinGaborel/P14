import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import { Provider } from 'react-redux';
import Loader from './components/Loader';
import store from './utils/store'
import './index.css';

const Home = React.lazy(() => import('./pages/Home'));
const Table = React.lazy(() => import('./pages/Table'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/table",
    element: <Table />,
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <Suspense fallback={<Loader />} >
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </React.StrictMode>
);