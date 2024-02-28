import 'tailwindcss/tailwind.css'

import localFont from 'next/font/local'

const regular = localFont({
  src: [
    {
      path: './lunchtype22-light.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: './lunchtype22-medium.woff2',
      weight: '400',
      style: 'medium',
    },
    {
      path: './lunchtype22-regular.woff2',
      weight: '500',
      style: 'regular',
    },
  ],
})

const italic = localFont({
  src: [
    {
      path: './lunchtype23-light-italic.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: './lunchtype23-medium-italic.woff2',
      weight: '400',
      style: 'medium',
    },
    {
      path: './lunchtype23-regular-italic.woff2',
      weight: '500',
      style: 'regular',
    },
  ],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${italic.className} ${regular.className}`}>
      <body>{children}</body>
    </html>
  )
}
