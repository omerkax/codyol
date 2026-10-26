import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import QuoteModal from '@/components/shared/QuoteModal';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import { AppContextProvider } from '@/context/AppContext';
import { ModalProvider } from '@/context/ModalContext';
import { interTight } from '@/utils/font';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  ...generateMetadata(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
          <body className={`${interTight.variable} antialiased`}>
            <AppContextProvider>
              <ModalProvider>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                  <Suspense>
                    <SmoothScrollProvider>
                      {children}
                      <QuoteModal />
                      <WhatsAppButton />
                    </SmoothScrollProvider>
                  </Suspense>
                </ThemeProvider>
              </ModalProvider>
            </AppContextProvider>
      </body>
    </html>
  );
}
