import { ClipboardList } from "lucide-react";
import { Button, ButtonProps } from "../../design-system/Button/Button";

const iconMap = {
  clipboard: ClipboardList,
} as const;

interface MdxButtonProps {
  icon?: keyof typeof iconMap;
}

type Props = MdxButtonProps & ButtonProps;

export const MdxButton = ({ children, icon, ...rest }: Props) => {
  const Icon = icon && iconMap[icon];
  return (
    <Button className="not-prose" {...rest}>
      {Icon && <Icon />}
      {children}
    </Button>
  );
};
