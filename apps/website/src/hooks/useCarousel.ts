import { useState } from "react";
import { usePrevious } from "./usePrevious";

export const useCarousel = <Item>(items: Array<Item>) => {
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

  return {
    selectedItem,
    selectedItemIndex,
    setSelectedIndex,
    direction,
    nextItem,
    prevItem,
  }
};