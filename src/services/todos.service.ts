import { KEYS_STORAGE } from "@/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LatLng } from "react-native-maps";

export interface Todo {
    id: string;
    title: string;
    description: string;
    marker?: {
        coordinator: LatLng,
        title?: string,
        description?: string
    }
}
export async function getTodos(): Promise<Todo[]> {
    try {
        const todosStr = await AsyncStorage.getItem(KEYS_STORAGE.TODOS);

        if (todosStr) {
            return JSON.parse(todosStr)
        }
    } catch (e) {
        console.error(e)
    }
    return [];
}

export async function getTodoById(id: string): Promise<Todo | undefined> {
    try {
        const todos = await getTodos();

        const found = todos.find(item => item.id === id);

        return found
    } catch (e) {
        console.error(e)
    }
    return undefined;
}
export async function removeTodoById(id: string): Promise<boolean> {
    try {
        const todos = await getTodos();

        const newTodos = todos.filter(item => item.id !== id);

        await AsyncStorage.setItem(KEYS_STORAGE.TODOS, JSON.stringify(newTodos));
        return true;
    } catch (e) {
        console.error(e)
    }
    return false;
}

export async function createTodo(newTodo: Omit<Todo, 'id'>): Promise<boolean> {

    const newTodoWithId: Todo = {
        ...newTodo,
        id: new Date().getTime().toString()
    }
    try {
        const todos = await getTodos();
        todos.push(newTodoWithId);
        await AsyncStorage.setItem(KEYS_STORAGE.TODOS, JSON.stringify(todos));
        return true;
    } catch (e) {
        console.error(e)
        return false;
    }
}

export async function updateTodo(todo: Todo): Promise<boolean> {

    try {
        const todos = await getTodos();
        const todosUpdate = todos.map(item => {
            if (item.id === todo.id) {
                return todo;
            }
            return item
        });
        await AsyncStorage.setItem(KEYS_STORAGE.TODOS, JSON.stringify(todosUpdate));
        return true;
    } catch (e) {
        console.error(e)
        return false;
    }
}