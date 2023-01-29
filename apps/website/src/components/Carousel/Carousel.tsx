"use client";

import { AnimatePresence, m, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ReactNode, useRef, useState } from "react";
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
  const cardRef = useRef<HTMLDivElement>(null);
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
      selectItem(0);
    } else {
      selectItem(selectedItemIndex + 1);
    }
  };

  const prevItem = () => {
    if (isFirstItem) {
      selectItem(items.length - 1);
    } else {
      selectItem(selectedItemIndex - 1);
    }
  };

  const selectItem = (index: number) => {
    setSelectedIndex(index);
    cardRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <div>
      <ul className="mb-16 flex flex-wrap gap-2">
        {items.map((item, index) => {
          const selected = index === selectedItemIndex;
          return (
            <li key={index}>
              <button
                onClick={() => selectItem(index)}
                className="hover:opacity-80"
              >
                {tag({ item, selected, index })}
              </button>
            </li>
          );
        })}
      </ul>
      <Card
        ref={cardRef}
        color="primary"
        className="flex h-[800px] sm:h-[600px]"
      >
        <button className="px-4 hover:opacity-80 lg:px-10" onClick={prevItem}>
          <ArrowLeft />
        </button>
        <div className="relative flex-1 overflow-x-hidden">
          <AnimatePresence initial={false} custom={direction()}>
            <m.div
              className="absolute h-full w-full bg-background-primary py-16"
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
