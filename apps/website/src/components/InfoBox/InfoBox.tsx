import { Info } from "lucide-react";
import { ReactNode } from "react";
import { Body } from "../../design-system/Body/Body";
import { Card } from "../../design-system/Card/Card";

interface Props {
  children: ReactNode;
}

export const InfoBox = ({ children }: Props) => {
  return (
    <Card
      color="blueExtreme"
      inset="normal"
      className="text-contrast-primary-light"
    >
      <Info />
      <Body size="large" color="light">
        {children}
      </Body>
    </Card>
  );
};
