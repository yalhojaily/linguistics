/** صيغة العدد مع «محطة» وفق قواعد العدد في العربية. */
export function stationsCount(n: number): string {
  if (n === 1) return 'محطة واحدة';
  if (n === 2) return 'محطتان';
  if (n >= 3 && n <= 10) return `${n} محطات`;
  return `${n} محطة`;
}
