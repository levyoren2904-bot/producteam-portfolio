import { Bebas_Neue, Inter, JetBrains_Mono } from 'next/font/google';

export const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const fontVariables = `${bebasNeue.variable} ${inter.variable} ${jetbrainsMono.variable}`;
