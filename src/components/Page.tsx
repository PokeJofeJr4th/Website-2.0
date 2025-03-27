import React from "react";

import "./main.css";

export default function Page({
  title,
  children,
}: React.PropsWithChildren<{ title?: string }>) {
  return (
    <html lang="en">
      <head>
        <title>{title} | Abigail JC</title>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width" />
      </head>
      <body>
        <nav>
          <a href="/" className="button">
            Home
          </a>
          <a href="/projects" className="button">
            Projects
          </a>
          <a href="/posts" className="button">
            Posts
          </a>
          <a href="/tools" className="button">
            Tools
          </a>
        </nav>
        <section>
          {title && <h1>{title}</h1>}
          {children}
        </section>
      </body>
    </html>
  );
}
