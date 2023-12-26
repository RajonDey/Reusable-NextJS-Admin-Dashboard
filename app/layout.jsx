import './globals.css';

export const metadata = {
  title: "Reusable - NextJS Admin Dashboard ",
  description:
    "Add the required meta description here!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
