import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: 'Azkashine',
    default: 'Azkashine | AI-Powered Software Solutions',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
