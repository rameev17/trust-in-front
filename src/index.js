import React, { useState, useEffect, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import LocaleProvider from "./locale/LocaleProvider";
import { AuthProvider } from "./auth/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spin } from "antd";

const App = lazy(() => import("./App"));
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

const Loader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Spin size="large" />
  </div>
);

const RootComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    let isMounted = true;

    document.fonts.ready.then(() => {
      if (isMounted) setIsLoaded(true);
    });

    const handleLoad = () => {
      if (isMounted) setIsLoaded(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      isMounted = false;
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isLoaded) return <Loader />;

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <LocaleProvider>
            <ToastContainer />
            <Suspense fallback={<Loader />}>
              <App />
            </Suspense>
          </LocaleProvider>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
};

root.render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);
