export default function formatNumberToCompact(value: number) {
  return Intl.NumberFormat("en", {
    notation: "compact",
  }).format(value);
}
