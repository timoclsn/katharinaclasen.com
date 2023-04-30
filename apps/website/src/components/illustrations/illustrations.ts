import { Bolt } from "./Bolt";
import { Clock } from "./Clock";
import { Geometry } from "./Geometry";
import { Hand } from "./Hand";
import { Hcd } from "./Hcd";
import { Head } from "./Head";
import { Heart } from "./Heart";
import { Hug } from "./Hug";
import { Lcd } from "./Lcd";
import { LongTerm } from "./LongTerm";
import { Magnifier } from "./Magnifier";
import { Phone } from "./Phone";
import { Phone2 } from "./Phone2";
import { ShortTerm } from "./ShortTerm";
import { Test } from "./Test";
import { Universe } from "./Universe";

export const illustrationsMap = {
  bolt: Bolt,
  hand: Hand,
  head: Head,
  heart: Heart,
  phone: Phone,
  geometry: Geometry,
  phone2: Phone2,
  magnifier: Magnifier,
  test: Test,
  clock: Clock,
  hug: Hug,
  universe: Universe,
  hcd: Hcd,
  lcd: Lcd,
  longTerm: LongTerm,
  shortTerm: ShortTerm,
} as const;

export const illustrationsList = [
  "bolt",
  "hand",
  "head",
  "heart",
  "phone",
  "geometry",
  "phone2",
  "magnifier",
  "test",
  "clock",
  "hug",
  "universe",
  "hcd",
  "lcd",
  "longTerm",
  "shortTerm",
] as const;

export type Illustration = keyof typeof illustrationsMap;
