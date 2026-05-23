export const metadata = {
  title: 'GameVault',
  description: 'Marketplace Gamer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
