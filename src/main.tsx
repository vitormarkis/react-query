import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Edit, { action as editAction } from "./components/Edit"
import Root from "./routes/root"
import Items from "./components/Items"
import { QueryClientProvider } from 'react-query'
import { queryClient } from "./services/queryClient"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Items />,
      },
      {
        path: "/edit",
        element: <Edit />,
        action: editAction
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
