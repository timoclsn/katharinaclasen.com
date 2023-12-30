import * as SelectPrimitive from "@radix-ui/react-select";
import { cx } from "cva";
import { ArrowDown, ArrowUp, Check } from "lucide-react";
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

Select.Content = forwardRef<
  ElementRef<typeof SelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(function SelectContent({ children, className, ...props }, ref) {
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
});

Select.Separator = forwardRef<
  ElementRef<typeof SelectPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(function SelectSeparator({ className, ...props }, ref) {
  return (
    <SelectPrimitive.Separator
      className={cx("m-1 h-[1px] bg-contrast-secondary-light/30", className)}
      {...props}
      ref={ref}
    >
      &nbsp;
    </SelectPrimitive.Separator>
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
});
