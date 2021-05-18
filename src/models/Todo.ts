export type TodoProps = {
  id?: string;
  title: string;
  completed?: boolean;
}

export type TodosProps = {
  items?: TodoProps[];
}