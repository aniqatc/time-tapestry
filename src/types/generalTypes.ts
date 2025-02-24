import { Icon } from '@phosphor-icons/react';

export interface Content {
  label: string;
  value: string;
  icon?: Icon;
}

export interface MoonData {
  name: string;
  content: Content[];
}

export interface ZodiacData {
  name: string;
  compatible: string[];
  chinese: Content[];
  content: Content[];
}
