import {createRoot} from 'react-dom/client'
import {App} from './components/App'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { Shop } from './components/pages/Shop';
import { About } from './components/pages/About';
import { Suspense } from 'react';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: '/about',
            element: <Suspense fallback={<div>Loading...</div>}><About /></Suspense>
        },
        {
            path: '/shop',
            element: <Suspense fallback={<div>Loadind...</div>}><Shop /></Suspense>
        }
      ]
    },
  ]);


const root = document.getElementById('root')

if(!root) {
    throw new Error('root not found')
}

const container = createRoot(root)


container.render(
    <RouterProvider router={router}/>
)