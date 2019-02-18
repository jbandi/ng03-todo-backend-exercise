export class ToDo {
  id: string;
  title: String;
  completed: boolean;

  constructor(title: String = '') {
    this.completed = false;
    this.title = title.trim();
  }

  static createFromJson(jsonData): ToDo {
    const newToDo = new ToDo();
    return Object.assign(newToDo, jsonData);
  }

}
