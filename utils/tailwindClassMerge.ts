import { twMerge } from "tailwind-merge"
import {clsx, ClassValue} from "clsx"

export const tailwindClassMerge = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
