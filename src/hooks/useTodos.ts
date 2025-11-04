import { getTodos, Todo } from "@/services/todos.service";
import { useFocusEffect } from "expo-router";
import { useState } from "react";

interface TodoState {
    isLoading: boolean,
    todos: Todo[],
}

export const useTodos = () => {
    const [state, setState] = useState<TodoState>({
        isLoading: true,
        todos: []
    });

    useFocusEffect(() => {
        getTodos().then(todos => {
            setState({
                isLoading: false,
                todos
            });
        });

    });

    return {
        isLoading: state.isLoading,
        todos: state.todos,
        isErro: false,
        //refetch
    }
}