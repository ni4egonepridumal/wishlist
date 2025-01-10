import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/app/routes";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/app/store";
import { Provider as ChakraProvider } from "@/shared/components/ui/provider";
import "./app/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </ReduxProvider>
  </StrictMode>
);
