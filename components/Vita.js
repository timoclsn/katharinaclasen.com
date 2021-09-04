export function Vita({ title, date, link, description }) {
  return (
    <div className="text-box">
      <h2>{title}</h2>
      <h3>{date}</h3>
      <div className="text-box-link">
        <a href={link.url}>{`@ ${link.name}`}</a>
      </div>
      <p>{description}</p>
    </div>
  );
}
