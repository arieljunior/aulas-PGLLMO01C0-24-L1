import CardCustom from '@/components/Card';
import FloatButton from '@/components/FloatButton';
import InputSearch from '@/components/InputSearch';
import { useTodos } from '@/hooks/useTodos';
import { useRouter } from 'expo-router';
import { useCallback, useMemo, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
export default function Index() {
    const router = useRouter();
    const { todos, isLoading } = useTodos();
    const [searchText, setSearchText] = useState<string | null>(null)

    const todosFiltered = useMemo(() => {
        if (!searchText) return todos

        const searchTextLower = searchText.toLowerCase();
        const todosFiltered = todos.filter(todo => (
            todo.title.toLowerCase().includes(searchTextLower) ||
            todo.description.toLowerCase().includes(searchTextLower)
        ))
        return todosFiltered
    }, [todos, searchText]);


    const handleChangeSearchInput = useCallback((newValue: string) => {
        setSearchText(newValue)
    }, []);

    const handleClickCreateTodo = useCallback(() => {
        router.push('/todo-app/create-todo');
    }, [router]);

    return <View style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    }}>

        {isLoading ? <ActivityIndicator size="small" color="#0000ff" /> : <View>

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

        </View>}

        <FloatButton
            onPress={handleClickCreateTodo}
        />
    </View>
}