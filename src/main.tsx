import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./customComponents/Home/index.tsx";
import { Provider as CharkaProvider } from "@/components/ui/provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./customComponents/Layout/index.tsx";
import { ChoisePresent } from "./customComponents/ChoisePresrent/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<>Загрузка...</>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/choisePresents",
        element: (
          <Suspense fallback={<>Загрузка...</>}>
            <ChoisePresent />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <div>Ошибка</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CharkaProvider>
      <RouterProvider router={router} />
    </CharkaProvider>
  </StrictMode>
);
