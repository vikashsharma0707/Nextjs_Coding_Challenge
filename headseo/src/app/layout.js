// app/layout.jsx
import './globals.css'

export const metadata = {
  title: {
    default: 'My Simple Website',
    template: '%s | My Simple Website',
  },
  description: 'A simple and SEO-friendly website made with Next.js',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
