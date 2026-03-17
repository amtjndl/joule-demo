import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-joule-bg text-joule-text antialiased">
        {children}
      </body>
    </html>
  );
}