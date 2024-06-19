import type { Metadata } from "next";
import { Providers } from "./providers";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Agrify",
  description:
    "Helping Farmers improve yield, earn carbon income and qualify for international exports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/logo.svg" type="image/svg+xml" />
      </head>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      ) : null}
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
