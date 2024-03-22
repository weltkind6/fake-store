import {createRoot} from 'react-dom/client'
import {App} from './components/App'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: '/about',
            element: <h1>About</h1>
        },
        {
            path: '/shop',
            element: <h1>Shop</h1>
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