export function generateId(length: number) {
  const arr = new Uint8Array((length || 40) / 2);
  crypto.getRandomValues(arr);
  return Array.from(arr, dec2hex).join("");
}

function dec2hex(dec: number) {
  return dec.toString(16).padStart(2, "0");
}
