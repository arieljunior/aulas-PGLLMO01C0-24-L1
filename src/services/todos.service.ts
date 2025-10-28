import { KEYS_STORAGE } from "@/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Todo {
    id: string;
    title: string;
    description: string;
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