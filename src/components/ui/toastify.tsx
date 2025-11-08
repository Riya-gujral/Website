import React from "react";
import { useTheme } from "next-themes";
import { ToastContainer, ToastContainerProps } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toaster = ({ ...props }: ToastContainerProps) => {
  const { theme = "system" } = useTheme();

  // Map next-themes theme to Toastify theme
  const toastTheme =
    theme === "dark" ? "dark" : theme === "light" ? "light" : "auto";

  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={toastTheme as ToastContainerProps["theme"]}
      {...props}
    />
  );
};

export { Toaster };