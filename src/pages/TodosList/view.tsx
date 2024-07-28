import React from 'react'
import { View } from "react-native";
import { TodoListStyle } from './style';
import Input from '../../components/Input';
import { useTodoList } from './model';
import Button from '../../components/Button';

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
        </View>
    )
}