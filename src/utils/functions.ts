import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function debounce(func: any, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
