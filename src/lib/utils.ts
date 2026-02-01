import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Base path for GitHub Pages (e.g. "/My-Website" or "" for root). Use for hrefs so links work on project pages. */
export function getBasePath(): string {
  if (typeof window === "undefined") return "";
  const segments = window.location.pathname.split("/").filter(Boolean);
  if (segments.length === 0) return "";
  return "/" + segments[0];
}
