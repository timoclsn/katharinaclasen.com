import * as SelectPrimitive from "@radix-ui/react-select";
import { cx } from "class-variance-authority";
import { Check } from "lucide-react";
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
} from "react";

export const Select = ({
  ...props
}: ComponentProps<typeof SelectPrimitive.Root>) => (
  <SelectPrimitive.Root {...props} />
);

Select.Trigger = forwardRef<
  ElementRef<typeof SelectPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(function SelectTrigger({ ...props }, ref) {
  return <SelectPrimitive.Trigger {...props} ref={ref} />;
});

Select.Value = forwardRef<
  ElementRef<typeof SelectPrimitive.Value>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Value>
>(function SelectValue({ ...props }, ref) {
  return <SelectPrimitive.Value {...props} ref={ref} />;
});

Select.Icon = forwardRef<
  ElementRef<typeof SelectPrimitive.Icon>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Icon>
>(function SelectIcon({ className, ...props }, ref) {
  return (
    <SelectPrimitive.Icon
      className={cx("text-contrast-primary-dark", className)}
      {...props}
      ref={ref}
    />
  );
});

Select.Portal = function SelectPortal({
  ...props
}: ComponentProps<typeof SelectPrimitive.Portal>) {
  return <SelectPrimitive.Portal {...props} />;
};

Select.Content = forwardRef<
  ElementRef<typeof SelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(function SelectContent({ className, ...props }, ref) {
  return (
    <SelectPrimitive.Content
      className={cx(
        "z-20 rounded-2xl bg-background-dark px-4 py-6 text-contrast-primary-light animate-in fade-in-75 zoom-in-90 duration-100 ease-in",
        className
      )}
      {...props}
      ref={ref}
    />
  );
});

Select.Viewport = forwardRef<
  ElementRef<typeof SelectPrimitive.Viewport>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Viewport>
>(function SelectViewport({ className, ...props }, ref) {
  return (
    <SelectPrimitive.Viewport
      className={cx("flex flex-col gap-1", className)}
      {...props}
      ref={ref}
    />
  );
});

Select.Item = forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(function SelectItem({ children, className, ...props }, ref) {
  return (
    <SelectPrimitive.Item
      className={cx(
        "cursor-pointer rounded-lg py-1 pl-[29px] pr-2 outline-none ring-inset hover:bg-contrast-primary-light hover:text-background-dark focus-visible:bg-contrast-primary-light focus-visible:text-background-dark",
        className
      )}
      {...props}
      ref={ref}
    >
      <Select.ItemIndicator>
        <Check size={18} />
      </Select.ItemIndicator>
      {children}
    </SelectPrimitive.Item>
  );
});

Select.ItemIndicator = forwardRef<
  ElementRef<typeof SelectPrimitive.ItemIndicator>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.ItemIndicator>
>(function SelectItemIndicator({ className, ...props }, ref) {
  return (
    <SelectPrimitive.ItemIndicator
      className={cx(
        "absolute left-1 flex h-[25px] w-[25px] items-center justify-center",
        className
      )}
      {...props}
      ref={ref}
    />
  );
});

Select.ItemText = forwardRef<
  ElementRef<typeof SelectPrimitive.ItemText>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.ItemText>
>(function SelectItemText({ className, ...props }, ref) {
  return (
    <SelectPrimitive.ItemText
      className={cx("whitespace-nowrap", className)}
      {...props}
      ref={ref}
    />
  );
});
