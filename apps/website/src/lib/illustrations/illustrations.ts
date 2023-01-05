import { FunctionComponent, SVGProps } from 'react';

export type Icon = FunctionComponent<SVGProps<SVGSVGElement>>;

import BoltIllu from './bolt.svg';
export const Bolt: Icon = BoltIllu;

import HandIllu from './hand.svg';
export const Hand: Icon = HandIllu;

import HeadIllu from './head.svg';
export const Head: Icon = HeadIllu;

import HeartIllu from './heart.svg';
export const Heart: Icon = HeartIllu;

import PhoneIllu from './phone.svg';
export const Phone: Icon = PhoneIllu;

import GeometryIllu from './geometry.svg';
export const Geometry: Icon = GeometryIllu;

export const illustrationsMap = {
  bolt: Bolt,
  hand: Hand,
  head: Head,
  heart: Heart,
  phone: Phone,
  geometry: Geometry,
} as const;

export const illustrationsList = [
  "bolt",
  "hand",
  "head",
  "heart",
  "phone",
  "geometry",
] as const;

export type Illustrations = keyof typeof illustrationsMap;
