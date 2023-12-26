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
              <Image
                priority={true}
                src="/logo.svg"
                alt="Your Logo"
                width={100}
                height={80}
              />
            </div>
          </Link>
          {children}
        </div>
      </body>
    </html>
  );
}
