import { getTodos, Todo } from "@/services/get-todos";
import { useEffect, useState } from "react";

interface TodoState {
    isLoading: boolean,
    todos: Todo[],
}

export const useTodos = () => {
    const [state, setState] = useState<TodoState>({
        isLoading: true,
        todos: []
    });

    useEffect(() => {
        const data = getTodos();
        setState({
            isLoading: false,
            todos: data
        })
    }, []);

    return {
        isLoading: state.isLoading,
        todos: state.todos,
        isErro: false,
        //refetch
    }
}