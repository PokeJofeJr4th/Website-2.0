import React from "react";

export default function Page({
  title,
  children,
}: React.PropsWithChildren<{ title: string }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width" />
      </head>
      <body>
        <h1>{title}</h1>
        {children}
      </body>
    </html>
  );
}
