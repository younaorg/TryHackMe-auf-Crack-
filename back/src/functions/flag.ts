import { generateId } from "../util";

export function createFlag(prefix: string) {
  const id = generateId(16);
  const flag = `${prefix}{${id}}`;
  return flag;
}
