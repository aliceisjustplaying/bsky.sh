// import './globals.css';
import React from 'react';
import GA from '@/utils/ga';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GA />
    </html>
  );
}
