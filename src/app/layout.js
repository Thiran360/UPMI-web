import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#070b14'
};

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'UPMI Platform | Unknown People Meet & Interact',
  description: "UPMI stands for 'Unknown People Meet & Interact' — India's premier social platform where unknown gamers meet, form squads, play custom rooms, and interact together across BGMI & Free Fire.",
  keywords: ['UPMI', 'UPMI Platform', 'Unknown People Meet and Interact', 'Gaming Platform', 'BGMI Squad Finder', 'Custom Rooms', 'Free Fire', 'STG App', 'Gaming Community', 'Esports Scrims', 'Slot Flyer'],
  authors: [{ name: 'UPMI Platform / STG App' }],
  icons: {
    icon: '/assets/logo.png',
    apple: '/assets/logo.png'
  },
  openGraph: {
    title: 'UPMI Platform | Unknown People Meet & Interact',
    description: "Where unknown mobile gamers connect, team up, chat, and play custom matches together.",
    images: ['/assets/bgmi_banner1_unique.jpg']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
