import 'tailwindcss/tailwind.css'

import localFont from 'next/font/local'

const lunchtype = localFont({
  src: [
    {
      path: './lunchtype22-light.woff2',
      weight: '300',
      style: 'light',
    },

    {
      path: './lunchtype22-regular.woff2',
      weight: '400',
      style: 'regular',
    },
    {
      path: './lunchtype22-medium.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: './lunchtype23-light-italic.woff2',
      weight: '300',
      style: 'lightItalic',
    },
    {
      path: './lunchtype23-regular-italic.woff2',
      weight: '400',
      style: 'regularItalic',
    },
    {
      path: './lunchtype23-medium-italic.woff2',
      weight: '500',
      style: 'mediumItalic',
    },
  ],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lunchtype.className}`}>
      <body>{children}</body>
    </html>
  )
}
