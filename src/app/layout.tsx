import "@/styles/globals.css";
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: "Be Data",
  description: "Soluciones de BI y Reporting",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (<>{children}</>);
}
