import "./global.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import '@mantine/core/styles.css';
import {createTheme, MantineProvider} from "@mantine/core";

export const metadata = {
    title: 'Your Bank',
    description: 'Generated by Next.js',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
          <body>
            <MantineProvider defaultColorScheme="dark">
                <Header/>
                {children}
                <Footer/>
            </MantineProvider>
          </body>
        </html>
    )
}
