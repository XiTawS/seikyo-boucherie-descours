import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "@/components/cms/SessionProvider";
import CMSProvider from "@/components/cms/CMSProvider";
import AdminBar from "@/components/cms/AdminBar";

export const metadata: Metadata = {
  title: "Boucherie Charcuterie Traiteur J. Descours — Saint-Donat-sur-l'Herbasse",
  description:
    "Boucherie, charcuterie et traiteur artisanal à Saint-Donat-sur-l'Herbasse. Fabrication maison, service traiteur, buffets et réceptions. Ouvert du lundi au dimanche.",
  keywords:
    "boucherie, charcuterie, traiteur, Saint-Donat-sur-l'Herbasse, Descours, fabrication maison, Drôme, buffet, réception mariage",
  openGraph: {
    title: "Boucherie J. Descours — Artisan boucher à Saint-Donat",
    description: "Boucherie, charcuterie, traiteur. Fabrication maison. Saint-Donat-sur-l'Herbasse.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ButcherShop",
              name: "Boucherie Charcuterie Traiteur J. Descours",
              address: {
                "@type": "PostalAddress",
                streetAddress: "8 Av. Georges Bert",
                addressLocality: "Saint-Donat-sur-l'Herbasse",
                postalCode: "26260",
                addressCountry: "FR",
              },
              telephone: "+33475028825",
              email: "boucheriejdescours@orange.fr",
              url: "https://boucherie-descours.vercel.app",
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Thursday"], opens: "06:30", closes: "12:30" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Thursday"], opens: "15:00", closes: "19:30" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "06:30", closes: "19:30" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "06:30", closes: "12:30" },
              ],
              sameAs: [
                "https://www.facebook.com/p/Boucherie-Charcuterie-Traiteur-J-Descours-100063821301619/",
                "https://boucherie-charcuterie-traiteur-descours.eatbu.com/?lang=fr",
              ],
              paymentAccepted: "Cash, Credit Card, Apple Pay, Ticket Restaurant",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <SessionProvider>
          <CMSProvider>
            {children}
            <AdminBar />
          </CMSProvider>
        </SessionProvider>
      </body>
    </html>
  );
}