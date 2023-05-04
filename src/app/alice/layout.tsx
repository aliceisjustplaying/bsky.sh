import "../globals.css";
import React from "react";

export const metadata = {
  title: "alice.bsky.sh",
  description: "alice.bsky.sh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
