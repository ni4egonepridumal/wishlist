import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { Layout } from "@/app/layout";
import { Home } from "@/pages/Home";
import { ChoicePresent } from "@/pages/ChoicePresent";
import { OnePresent } from "@/pages/OnePresent";

export const router = createBrowserRouter([
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
        path: "/choicePresents",
        element: (
          <Suspense fallback={<>Загрузка...</>}>
            <ChoicePresent />
          </Suspense>
        ),
      },
      {
        path: "present/:id",
        element: (
          <Suspense fallback={<>Загрузка...</>}>
            <OnePresent />
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
