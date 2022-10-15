export function joinZero(value: number, length: number): string {
  return (Array(length).join("0") + value.toString(10)).slice(length * -1);
}