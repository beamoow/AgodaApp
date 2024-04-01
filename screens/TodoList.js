import React, { useEffect, useState } from 'react';
import { View, FlatList , TouchableOpacity  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import TodoStorage from '../storages/TodoStorage';
import TodoItem from '../components/MyTrips/TodoITem';
// import { useNavigation } from '@react-navigation/native';

export default function TodoList() {
    //const navigation = useNavigation();
    const [todos, setTodos] = useState([]);

    const onLoad = async () => {
        // READ ITEMS FROM STORAGE
        let data = await TodoStorage.readItems();
        console.log("data:", data);
        setTodos(data || []); // Set todos to empty array if data is null or undefined
    };

    useEffect(() => { onLoad(); }, []);

    const onCreate = async () => {
        let new_data = {
            id: '_' + Math.random().toString(36).substr(2, 9), //RANDOM NUMBER
            title: "", //Empty String
            completed: false,
        };
        //CLONE ARRAY + APPEND NEW DATA INTO ARRAY
        let t = [...todos, new_data];
        //UPDATE STATE
        setTodos(t);
        // WRITE ITEM TO STORAGE
        await TodoStorage.writeItems(t);
    };

    const onUpdate = async (new_title, id) => {
        //CLONE ARRAY FIRST
        let t = [...todos];
        //Find index of specific object using findIndex method.
        let index = t.findIndex((item => item.id == id));
        //Update object's name property.
        console.log("t:", t[index], id);
        t[index].title = new_title;
        //UPDATE STATE
        setTodos(t);
        // WRITE ITEM TO STORAGE
        await TodoStorage.writeItems(t);
    };

    const onCheck = async (id) => {
        let t = [...todos];
        let index = t.findIndex((item => item.id == id));
        //SET INVERSE VALUE BOOLEAN
        t[index].completed = !t[index].completed;
        setTodos(t);
        // WRITE ITEM TO STORAGE
        await TodoStorage.writeItems(t);
    };

    const onDelete = async (id) => {
        //CLONE ARRAY FIRST
        let t = [...todos];
        let index = t.findIndex((item => item.id == id));
        [removed_t] = t.splice(index, 1);
        console.log(removed_t);
        setTodos(t);
        // REMOVE AN ITEM FROM STORAGE
        await TodoStorage.writeItems(t);
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                style={{ marginTop: 15 }}
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <TodoItem
                            item={item}
                            onUpdate={onUpdate}
                            onCheck={onCheck}
                            onDelete={onDelete}
                        />
                    );
                }}
            />
            <TouchableOpacity
                style={{
                    backgroundColor: "lightblue",
                    padding: 10,
                    width: 50,
                    height: 50,
                    alignItems: "center",
                    alignContent: "center",
                    borderRadius: 25,
                    position: 'absolute',
                    right: 10,
                    bottom: 10,
                }}
                onPress={onCreate}
            >
                <FontAwesome name='plus' size={26} />
            </TouchableOpacity>
        </View>
    );
}