import * as SelectPrimitive from "@radix-ui/react-select";
import { cx } from "cva";
import { ArrowDown, ArrowUp, Check } from "lucide-react";
import { ComponentProps } from "react";

export const Select = ({
  ...props
}: ComponentProps<typeof SelectPrimitive.Root>) => (
  <SelectPrimitive.Root {...props} />
);

Select.Trigger = function SelectTrigger({
  ref,
  ...props
}: ComponentProps<typeof SelectPrimitive.Trigger>) {
  return <SelectPrimitive.Trigger {...props} ref={ref} />;
};

Select.Value = function SelectValue({
  ref,
  ...props
}: ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value {...props} ref={ref} />;
};

Select.Icon = function SelectIcon({
  className,
  ref,
  ...props
}: ComponentProps<typeof SelectPrimitive.Icon>) {
  return (
    <SelectPrimitive.Icon
      className={cx("text-contrast-primary-dark", className)}
      {...props}
      ref={ref}
    />
  );
};

Select.Content = function SelectContent({
  children,
  className,
  ref,
  ...props
}: ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className="z-50 rounded-2xl bg-background-dark px-4 py-6 text-contrast-primary-light duration-100 ease-in animate-in fade-in-75 zoom-in-90"
        ref={ref}
        {...props}
      >
        <SelectPrimitive.ScrollUpButton className="flex cursor-default items-center justify-center">
          <ArrowUp />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className="flex flex-col gap-1">
          {children}
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className="flex cursor-default items-center justify-center">
          <ArrowDown />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};

Select.Separator = function SelectSeparator({
  className,
  ref,
  ...props
}: ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      className={cx("m-1 h-px bg-contrast-secondary-light/30", className)}
      {...props}
      ref={ref}
    >
      &nbsp;
    </SelectPrimitive.Separator>
  );
};

Select.Item = function SelectItem({
  children,
  ref,
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      className={cx(
        "cursor-pointer rounded-lg py-1 pl-[29px] pr-2 outline-hidden ring-inset hover:bg-contrast-primary-light hover:text-background-dark focus-visible:bg-contrast-primary-light focus-visible:text-background-dark",
        className,
      )}
      {...props}
      ref={ref}
    >
      <SelectPrimitive.ItemIndicator className="absolute left-1 flex h-[25px] w-[25px] items-center justify-center">
        <Check size={18} />
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText className="whitespace-nowrap">
        {children}
      </SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
};
