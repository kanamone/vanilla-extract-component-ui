import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "",
  description: "",
};

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>vanilla-extract ui library</h1>
        </header>
        <main>
          <aside>
            <Link href="/">bundle</Link>
            <Link href="/split">split component chunk</Link>
            <Link href="/ve">external vanilla-extract</Link>
          </aside>
          {children}
        </main>

        <footer>©kanamone 2024</footer>
      </body>
    </html>
  );
};

export default Layout;
