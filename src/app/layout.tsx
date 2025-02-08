import BackGroundImageComponent from '@/components/background-image';
import '../styles/globals.css'


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
              className={``}
            >
                <BackGroundImageComponent/>
                {children}
            </body>
        </html>
    );
}
