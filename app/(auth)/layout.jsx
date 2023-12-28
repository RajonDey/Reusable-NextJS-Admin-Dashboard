import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-[#777777] h-screen bg-cover flex flex-col justify-between bg-no-repeat bg-center px-20">
          {/* Top Section: Logo */}
          <Link href="/">
            <div className="flex items-center p-4 ">
              <h2 className="text-[40px] font-bold">Logo</h2>
            </div>
          </Link>
          {children}
        </div>
      </body>
    </html>
  );
}
