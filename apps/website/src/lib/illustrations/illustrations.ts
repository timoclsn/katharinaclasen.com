import { FunctionComponent, SVGProps } from "react";

export type Icon = FunctionComponent<SVGProps<SVGSVGElement>>;

import BoltIllu from "./bolt.svg";
export const Bolt: Icon = BoltIllu;

import HandIllu from "./hand.svg";
export const Hand: Icon = HandIllu;

import HeadIllu from "./head.svg";
export const Head: Icon = HeadIllu;

import HeartIllu from "./heart.svg";
export const Heart: Icon = HeartIllu;

import PhoneIllu from "./phone.svg";
export const Phone: Icon = PhoneIllu;

import GeometryIllu from "./geometry.svg";
export const Geometry: Icon = GeometryIllu;

import MagnifierIllu from "./magnifier.svg";
export const Magnifier: Icon = MagnifierIllu;

import Phone2Illu from "./phone2.svg";
export const Phone2: Icon = Phone2Illu;

import TestIllu from "./test.svg";
export const Test: Icon = TestIllu;

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
] as const;

export type Illustration = keyof typeof illustrationsMap;