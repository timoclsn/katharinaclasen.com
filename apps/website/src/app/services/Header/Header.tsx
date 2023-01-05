import Image from "next/image";
import { Container } from "../../../design-system/Container/Container";
import codeImg from "./code.png";

export const Header = () => {
  return (
    <section>
      <Container inset>Header</Container>
      <Image
        src={codeImg}
        alt="Image of computer code on a screen."
        className="h-[320px] w-full object-cover"
        sizes="100vw"
        priority
      />
    </section>
  );
};
