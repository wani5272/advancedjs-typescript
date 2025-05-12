import { v4 as uuidV4 } from "uuid";
uuidV4();
type UserType = {
  firstName: string;
  lastName: string;
  email: string | undefined;
  phone?: string;
};
const rndPerson: UserType = {
  firstName: "asdf",
  lastName: "jkl",
  email: "a@b.ch",
};
let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
let color: string = "blue";
color = "red";
let list: number[] = [1, 2, 3, 4];
let stringArr: string[] = ["a", "b", "Hello World"];
let x: [string, number];
x = ["hello", 10];
x.push(23);
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);
enum ColorDifferentValues {
  Red = 1,
  Green = "Green",
  Blue = 4,
}
let newC: ColorDifferentValues = ColorDifferentValues.Green;
console.log("Green");
let someVar: any;

if (Array.isArray(someVar)) {
  someVar.push("a");
}
if (typeof someVar === "string" || Array.isArray(someVar)) {
  console.log(someVar.length);
}
if (typeof someVar === "number") {
  let test = 10 / someVar;
}
function warnUser(): void {
  console.log("WARNING");
}

let u: undefined = undefined;
let n: null = null;
function error(message: string): never {
  throw new Error(message);
}
function fail() {
  return error("Something failed");
}

function infiniteLoop(): never {
  while (true) {}
}
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
function failupdateTodo(todo: Todo, fieldsToUpdate: Todo) {
  return { ...todo, ...fieldsToUpdate };
}
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
const todo3 = failupdateTodo(todo1, {
  title: "cleam up desk",
  description: "clear clutter",
});
console.log(todo1);
console.log(todo2);
console.log(todo3);
