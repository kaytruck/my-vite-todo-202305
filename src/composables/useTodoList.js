import { ref, computed } from 'vue';

const currentEditId = ref(-1);

export const useTodoList = (id) => {
  const storageTodoList = localStorage.todoList;
  const todoListRef = ref([]);
  const currentEditId = ref(-1);
  todoListRef.value = storageTodoList ? JSON.parse(storageTodoList) : [];

  const add = (task) => {
    const id = new Date().getTime();
    todoListRef.value.push({ id: id, task: task, checked: false });
    localStorage.todoList = JSON.stringify(todoListRef.value);
    // todoRef.value = '';
  };

  const findById = (id) => {
    return todoListRef.value.find((todo) => todo.id === id);
  };

  const findIndexById = (id) => {
    return todoListRef.value.findIndex((todo) => todo.id === id);
  };

  const show = (id) => {
    const todo = findById(id);
    currentEditId.value = id;
    return todo.task;
  };

  const edit = (task) => {
    const todo = findById(currentEditId.value);
    const idx = findIndexById(currentEditId.value);
    todo.task = task;
    todoListRef.value.splice(idx, 1, todo);
    localStorage.todoList = JSON.stringify(todoListRef.value);
    currentEditId.value = -1;
  };

  const del = (id) => {
    const todo = findById(id);
    const delMsg = '[' + todo.task + ']を削除しますか？';
    if (!confirm(delMsg)) {
      return;
    }
    const idx = findIndexById(id);
    todoListRef.value.splice(idx, 1);
    localStorage.todoList = JSON.stringify(todoListRef.value);
  };

  const check = (id) => {
    const todo = findById(id);
    const idx = findIndexById(id);
    todo.checked = !todo.checked;
    todoListRef.value.splice(idx, 1, todo);
    localStorage.todoList = JSON.stringify(todoListRef.value);
  };

  const countFin = computed(() => {
    const finAttr = todoListRef.value.filter((todo) => todo.checked);
    return finAttr.length;
  });

  return { todoListRef, add, show, edit, del, check, countFin };
};
