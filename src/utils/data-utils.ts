import { type CollectionEntry } from "astro:content";

export function sortItemsByDateDesc(
  itemA: CollectionEntry<"poems" | "fictions" | "other">,
  itemB: CollectionEntry<"poems" | "fictions" | "other">
) {
  return (
    new Date(itemB.data.publishDate).getTime() -
    new Date(itemA.data.publishDate).getTime()
  );
}
