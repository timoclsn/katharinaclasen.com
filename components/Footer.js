import Link from "next/link";

export function Footer() {
  return (
    <div className="footer">
      <ul className="padding-main">
        <li>
          <Link href="/imprint">
            <a>Imprint</a>
          </Link>
        </li>
        <li>
          <Link href="/privacy">
            <a>Privacy</a>
          </Link>
        </li>
        <li>
          <a
            href="https://www.instagram.com/katharinaclasen/"
            target="blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/katharina-clasen/"
            target="blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/KatharinaClasen"
            target="blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
      </ul>
    </div>
  );
}
