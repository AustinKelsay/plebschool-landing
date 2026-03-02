import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "pleb.school — Run your own Nostr-native course & content platform",
  description:
    "Forkable, configuration-driven education stack for creators and communities. Courses, videos, and docs with Nostr identity and Lightning payments. MIT-licensed, self-hostable, and ready to deploy.",
  openGraph: {
    title: "pleb.school — Nostr-native course & content platform",
    description:
      "Open-source education stack for creators and communities. Fork it, configure it, deploy your own branded learning hub with Lightning payments.",
    type: "website",
    siteName: "pleb.school",
  },
  twitter: {
    card: "summary_large_image",
    title: "pleb.school — Run your own education platform",
    description:
      "Forkable, open-source education stack with Nostr identity, Lightning payments, and 67+ themes. Fork, configure JSON, deploy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
