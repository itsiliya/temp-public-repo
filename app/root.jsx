import { lazy, Suspense } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import { CssBaseline } from "@mui/material";

import MainStyles from "./Styles/main.css?url";
import AppLayout from "./Components/Layouts/AppLayout";
const ErrorBoundaryPage = lazy(() => import("./Components/Error/ErrorBoundaryPage"));

export function Layout({ children }) {
  const isLTR = false;

  return (
    <html lang="fa" dir={isLTR ? "ltr" : "rtl"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <CssBaseline />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

export function links() {
  return [
    { rel: "stylesheet", href: MainStyles }
  ];
}

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ErrorBoundaryPage error={error} />
    </Suspense>
  );
}