import CardCustom from '@/components/Card';
import InputSearch from '@/components/InputSearch';
import { getTodos, Todo } from '@/services/get-todos';
import { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function Index() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [searchText, setSearchText] = useState<string | null>(null)

    const todosFiltered = useMemo(() => {
        if (!searchText) return todos

        const searchTextLower = searchText.toLowerCase();
        const todosFiltered = todos.filter(todo => (
            todo.title.toLowerCase().includes(searchTextLower) ||
            todo.description.toLowerCase().includes(searchTextLower)
        ))
        return todosFiltered
    }, [todos, searchText])

    useEffect(() => {
        const data = getTodos();
        setTodos(data)
    }, []);

    const handleChangeSearchInput = useCallback((newValue: string) => {
        setSearchText(newValue)
    }, []);

    return <View style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10
    }}>
        <InputSearch
            onChange={handleChangeSearchInput}
            value={searchText || ''}
            onClickClear={() => setSearchText(null)}
        />

        <View>
            {
                todosFiltered.length === 0 ? <Text>Sem dados</Text> :
                    <FlatList
                        data={todosFiltered}
                        renderItem={({ item }) =>
                            <CardCustom
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                onClickCard={() => { }}
                            />
                        }
                    />}
        </View>

    </View>
}