import Link from "next/link";

export function Navigation() {
  return (
    <nav className="logo">
      <h1>
        <Link href="/">
          <a>Katharina Clasen</a>
        </Link>
      </h1>
    </nav>
  );
}
