import { atom } from "recoil";

export const todosAtom = atom({
  key: "todosAtom",
  default: "",
});

export const filterAtom = atom({
  key: "filterAtom",
  default: "",
});

export const fiteredTodos = selector({
  key: "fiteredTodos",
  get: (props) => {
    const count = props.get(todosAtom);
    const filter = props.get(filterAtom);

    return todos.filter(
      (x) => x.title.includes(filter) || x.description.includes("filter")
    );
  },
});
