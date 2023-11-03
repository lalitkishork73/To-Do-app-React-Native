import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddTodo() {

    const [Task, setTask] = useState({
        title: '',
        description: '',
        subtasks: '',
        status: ''

    });
    return (
        <>
            <View style={style.container}>
                <Text style={style.title}>
                    Add New Task
                </Text>

                <Text style={style.lable}>Title</Text>
                <View style={style.inputBox}>
                    <TextInput
                        style={style.input}
                        placeholder="e.g. Take coffee break"
                        value={Task.title}
                        onChangeText={(text) => setTask({ ...Task, title: text })}

                    />
                </View>
                <Text style={style.lable}>Description</Text>
                <View style={style.inputBox}>
                    <TextInput
                        style={style.input}
                        placeholder="e.g. it's always good to take a break. This 15 minute break will recharge the batteries a little "
                        value={Task.description}
                        onChangeText={(text) => setTask({ ...Task, description: text })}

                    />
                </View>
                <Text style={style.lable} >Subtasks</Text>
                <View style={style.inputBox}>
                    <TextInput
                        style={style.input}
                        placeholder="e.g. it's always good to take a break. This 15 minute break will recharge the batteries a little "
                        value={Task.subtasks}
                        onChangeText={(text) => setTask({ ...Task, subtasks: text })}

                    />
                    <TextInput
                        style={style.input}
                        placeholder="e.g. it's always good to take a break. This 15 minute break will recharge the batteries a little "
                        value={Task.subtasks}
                        onChangeText={(text) => setTask({ ...Task, subtasks: text })}

                    />
                    <Button title="+ Add New Subtasks" />
                <Text style={style.lable} >Status</Text>
                
                </View>
                <Button title="Create Task" color='#645FC7' />
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#21222D',
        width: '100%',
        height: '100%',
        flex: 1,
        padding: 1,



    }, title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        paddingVerticalAlignment: 20,

    },
    lable: {
        color: 'white',
        paddingLeft: 20
    },
    input: {
        width: '90%',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        color: '#676C78',

    },
    inputBox: {

        alignItems: 'center',
    }, button: {
        color: 'black',
        backgroundColor: '#676C78',
    }
})