import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MDBContainer } from "mdb-react-ui-kit";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import LocaleProvider from "./locale/LocaleProvider";
import { AuthProvider } from "./auth/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <MDBContainer>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <LocaleProvider>
            <BrowserRouter>
              <ToastContainer />
              <App />
            </BrowserRouter>
          </LocaleProvider>
        </AuthProvider>
      </QueryClientProvider>
    </MDBContainer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
