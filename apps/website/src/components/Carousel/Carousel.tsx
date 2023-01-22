"use client";

import { AnimatePresence, m, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ReactNode, useState } from "react";
import { Card } from "../../design-system/Card/Card";
import { usePrevious } from "../../hooks/usePrevious";

const variants: Variants = {
  enter: (direction: number) => ({
    x: `${direction * 100}%`,
  }),
  center: { x: 0 },
  exit: (direction: number) => ({
    x: `${direction * -100}%`,
  }),
};

interface Props<Item> {
  items: Array<Item>;
  tag: ({
    item,
    selected,
    index,
  }: {
    item: Item;
    selected: boolean;
    index: number;
  }) => ReactNode;
  children: ({ item }: { item: Item }) => ReactNode;
}

export const Carousel = <Item extends {}>({
  items,
  tag,
  children,
}: Props<Item>) => {
  const [selectedItemIndex, setSelectedIndex] = useState(0);
  const prevSelectedItemIndex = usePrevious(selectedItemIndex);

  const selectedItem = items[selectedItemIndex];

  const isFirstItem = selectedItemIndex === 0;
  const wasFristItem = prevSelectedItemIndex === 0;
  const isLastItem = selectedItemIndex === items.length - 1;
  const wasLastItem = prevSelectedItemIndex === items.length - 1;

  const direction = () => {
    if (prevSelectedItemIndex === null) return 1;
    if (isFirstItem && wasLastItem) return 1;
    if (isLastItem && wasFristItem) return -1;
    return selectedItemIndex > prevSelectedItemIndex ? 1 : -1;
  };

  const nextItem = () => {
    if (isLastItem) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(selectedItemIndex + 1);
    }
  };

  const prevItem = () => {
    if (isFirstItem) {
      setSelectedIndex(items.length - 1);
    } else {
      setSelectedIndex(selectedItemIndex - 1);
    }
  };
  return (
    <div>
      <ul className="mb-16 flex flex-wrap gap-2">
        {items.map((item, index) => {
          const selected = index === selectedItemIndex;
          return (
            <li key={index}>
              <button
                onClick={() => setSelectedIndex(index)}
                className="hover:opacity-80"
              >
                {tag({ item, selected, index })}
              </button>
            </li>
          );
        })}
      </ul>
      <Card color="primary" className="flex h-[600px]">
        <button className="px-4 hover:opacity-80 lg:px-10" onClick={prevItem}>
          <ArrowLeft />
        </button>
        <div className="relative flex-1 overflow-x-hidden">
          <AnimatePresence initial={false} custom={direction()}>
            <m.div
              className="absolute flex h-full w-full flex-col gap-12 bg-background-primary py-16 lg:flex-row"
              key={Math.random()}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction()}
              transition={{
                type: "spring",
                duration: 0.5,
              }}
            >
              {children({ item: selectedItem })}
            </m.div>
          </AnimatePresence>
        </div>
        <button className="px-4 hover:opacity-80 lg:px-10" onClick={nextItem}>
          <ArrowRight />
        </button>
      </Card>
    </div>
  );
};
