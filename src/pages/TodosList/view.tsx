import React from 'react'
import { FlatList, Text, View } from "react-native";
import { TodoListStyle } from './style';
import Input from '../../components/Input';
import { useTodoList } from './model';
import Button from '../../components/Button';
import { ListItem } from '../../components/ListItem/ListItem';

export function TodoListView(model:ReturnType<typeof useTodoList>){
    return (
        <View style={TodoListStyle.container}>
            <Input 
                onChangeText={model.onChangeText}
                value={model.text}
                placeholder="Add todo"
                style={null}
            />
            <Button 
                onClick={model.addTodo}
                text="Add"
            />
            <View>
                <FlatList 
                    data={model.todos}
                    renderItem={(item) => (
                        <ListItem removeListItem={() => {
                            model.removeTodo(item.index)
                        }}>
                            <Text>{item.item}</Text>
                        </ListItem>
                    )}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    )
}