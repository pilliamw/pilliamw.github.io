export const metadata = {
  title: 'Pilliam W',
  description: 'A showcase of my work in frontend, backend, and interactive projects.',
  icons: {
    icon: '/assets/images/pfp.svg',
  },
  alternates: {
    canonical: 'https://pilliamwark.com/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Inclusive+Sans"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        {children} {/* Page content goes here */}
      </body>
    </html>
  );
}
