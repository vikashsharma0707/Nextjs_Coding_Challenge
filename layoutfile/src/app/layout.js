// app/layout.js
import './globals.css';

export const metadata = {
  title: 'My App',
  description: 'Next.js 15 with custom layouts',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ backgroundColor: "#222", padding: "1rem", color: "#fff" }}>
          🌐 Main Navigation (Visible Everywhere)
        </nav>
        {children}
      </body>
    </html>
  );
}
