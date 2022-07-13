import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import bootstrapStyles from "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";

export const links = () => [
  { rel: "stylesheet", href: bootstrapStyles },
  { rel: "icon", href: "/favicon.ico" },
];

export const meta = () => ({
  charset: "utf-8",
  title: "Brooke Rose Baer -- Web Developer",
  viewport: "width=device-width,initial-scale=1",
});

const App = () => (
  <html lang="en" className="h-full">
    <head>
      <Meta />
      <Links />
    </head>
    <body className="h-full">
      <Header />
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>
);

export default App;
