import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { organizationSchema } from "../lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Beykent Anaokulu | Beylikdüzü Anaokulu | Büyükçekmece Anaokulu | Şeker Anaokulu | Şeker Akademi",
  description:
    "Beykent'te bulunan Şeker Anaokulu ve Şeker Akademi, Beylikdüzü, Büyükçekmece ve çevre bölgelere hizmet veren özel bir anaokuludur. Çocuklarınıza güvenli, sevgi dolu ve eğitici bir ortam sunuyoruz.",
  keywords: `
    beykent anaokulu, beylikdüzü anaokulu, büyükçekmece anaokulu, şeker anaokulu, şeker akademi,
    özel anaokulu, güvenli anaokulu, montessori anaokulu, oyun grubu, okul öncesi eğitim,
    kreş, beykent kreş, beylikdüzü kreş, büyükçekmece kreş, avcılar kreş, esenyurt kreş,
    beykent çocuk eğitimi, beylikdüzü çocuk eğitimi, büyükçekmece çocuk eğitimi,
    tam gün anaokulu, yarım gün anaokulu, yaz okulu, kış okulu,
    ingilizce anaokulu, yabancı dil anaokulu, çift dil anaokulu,
    sanat etkinlikleri anaokulu, müzik eğitimi anaokulu, spor etkinlikleri anaokulu,
    özel eğitim anaokulu, özel ihtiyaç anaokulu, duyusal oyun, drama eğitimi,
    erken çocukluk eğitimi, okul öncesi öğretmenleri, eğitim programı, çocuk psikolojisi destekli eğitim,
    beykent özel anaokulu, beylikdüzü özel anaokulu, büyükçekmece özel anaokulu,
    beykent montessori, beylikdüzü montessori, büyükçekmece montessori,
    güvenli oyun alanı anaokulu, doğa etkinlikleri anaokulu, yaratıcı drama, STEM etkinlikleri,
    robotik kodlama çocuk, beykent robotik anaokulu, bilişsel gelişim programı,
    çocuk gelişimi anaokulu, erken eğitim merkezi, aile danışmanlığı anaokulu,
    beslenme programı anaokulu, sağlıklı yemek anaokulu, hijyenik anaokulu,
    beykent çocuk kulübü, beylikdüzü çocuk kulübü, büyükçekmece çocuk kulübü,
    şeker anaokulu beykent, şeker anaokulu beylikdüzü, şeker anaokulu büyükçekmece,
    şeker akademi beykent, şeker akademi beylikdüzü, şeker akademi büyükçekmece,
    anaokulu fiyatları beykent, anaokulu fiyatları beylikdüzü, anaokulu fiyatları büyükçekmece,
    tavsiye anaokulu beykent, tavsiye anaokulu beylikdüzü, tavsiye anaokulu büyükçekmece,
    beykent eğitim merkezi, beylikdüzü eğitim merkezi, büyükçekmece eğitim merkezi,
    çocuk oyun alanı beykent, çocuk oyun alanı beylikdüzü, çocuk oyun alanı büyükçekmece,
    yaz kampı çocuk, kış kampı çocuk, tatil programı çocuk, anaokulu etkinlikleri,
    müzik ve ritim çalışmaları, resim ve sanat çalışmaları, dans eğitimi çocuk,
    sosyal gelişim anaokulu, özgüven geliştirme programı, aile katılımı etkinlikleri,
    okul öncesi kayıt, anaokulu kayıt beykent, anaokulu kayıt beylikdüzü, anaokulu kayıt büyükçekmece,
    beykent preschool, beylikdüzü preschool, büyükçekmece preschool,
    preschool beykent, preschool beylikdüzü, preschool büyükçekmece,
    kindergarten beykent, kindergarten beylikdüzü, kindergarten büyükçekmece,
    Şeker Anaokulu kayıt, Şeker Akademi kayıt, Şeker Anaokulu fiyat, Şeker Akademi fiyat
  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
