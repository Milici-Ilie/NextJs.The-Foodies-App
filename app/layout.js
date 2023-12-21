import MainHeader from "@/components/main-header/main-header";
import "./globals.css";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
}; //🌠🌠[STATIC METADATA]🌠🌠

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* 💾💾[CUSTOM COMPONENT]💾💾 check the MainHeader from bellow 👇 */}
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
