import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertAmountFromMilliunits(amount: number) {
  return amount / 1000;
}

export function convertAmountToMilliunits(amount: number) {
  return amount * 1000;
}

export function formatCurrency(value: number) {
  return Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
}