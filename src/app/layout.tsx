import "./globals.css";

export const metadata = {
  title: "bsky.sh",
  description: "bsky.sh",
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
