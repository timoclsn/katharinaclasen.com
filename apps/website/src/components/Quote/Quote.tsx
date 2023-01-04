import { Body, BodyProps } from "../../design-system/Body/Body";

interface Props {
  text: string;
  author: string;
  size?: BodyProps["size"];
}

export const Quote = ({ text, author, size = "large" }: Props) => {
  return (
    <div className="border-l-4 border-background-salmon pl-3">
      <Body as="p" family="serif" size={size} style="italic" className="mb-3">
        {text}
      </Body>
      <p className="font-sans text-sm text-contrast-secondary-dark">{author}</p>
    </div>
  );
};
