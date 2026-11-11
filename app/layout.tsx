import type { Metadata } from "next";
import "./globals.css";
import CursorFollower from "@/components/CursorFollower";
import SiteNav from "@/components/SiteNav";
import RouteTransition from "@/components/RouteTransition";

export const metadata: Metadata = {
  title: "AURA® — Independent Digital Design Studio",
  description:
    "An independent digital studio building uncommon identities and digital experiences for a changing world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CursorFollower />
        <SiteNav />
        <RouteTransition>{children}</RouteTransition>
      </body>
    </html>
  );
}
