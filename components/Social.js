export function Social() {
  return (
    <div className="social">
      <figure>
        <blockquote>
          <p>Let’s stay in touch!</p>
        </blockquote>
      </figure>
      <div className="social-links">
        <a
          href="https://www.instagram.com/katharinaclasen/"
          target="blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/instagram.svg" alt="Instagram logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/katharina-clasen/"
          target="blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/linkedin.svg" alt="LinkedIn logo" />
        </a>
        <a
          href="https://twitter.com/KatharinaClasen"
          target="blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/twitter.svg" alt="Twitter logo" />
        </a>
      </div>
    </div>
  );
}
