function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]);
getFirstElement<string>(["a", "b", "c"]);
getFirstElement<boolean>([true, false, true]);

console.log("First element of number array:", getFirstElement([1, 2, 3]));
console.log("First element of string array:", getFirstElement(["a", "b", "c"]));
console.log(
  "First element of boolean array:",
  getFirstElement([true, false, true])
);
