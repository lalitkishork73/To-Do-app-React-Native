import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Card from '../components/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TodoView() {
    const [todoCount, setTodoCount] = useState(0);
    const [todoTasks, setTodoTasks] = useState([]);

    useEffect(() => {
        // Load the todo count and tasks from AsyncStorage when the component mounts
        loadTodoCount();
        loadTodoTasks();
    }, []);

    const loadTodoCount = async () => {
        try {
            const storedTodoCount = await AsyncStorage.getItem('todoCount');
            if (storedTodoCount !== null) {
                setTodoCount(parseInt(storedTodoCount));
            }
        } catch (error) {
            console.error('Error loading todo count from AsyncStorage:', error);
        }
    };

    const loadTodoTasks = async () => {
        try {
            const tasksJSON = await AsyncStorage.getItem('tasks');
            if (tasksJSON !== null) {
                const tasks = JSON.parse(tasksJSON);
                setTodoTasks(tasks);
            }
        } catch (error) {
            console.error('Error loading todo tasks from AsyncStorage:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 40 }}>
                <View
                    style={{
                        width: 5,
                        height: 5,
                        backgroundColor: 'skyblue',
                        padding: 10,
                        borderRadius: 10,
                    }}
                />
                <Text style={styles.title}>TODO ({todoCount})</Text>
            </View>

            <View style={styles.List}>
                <FlatList
                    data={todoTasks}

                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <Card title={item.title} subtasks={item.subtasks.length} key={index} />
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#21222D',
        width: '95%',
    },
    title: {
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#777988',
    },
    List: {
        flex: 1,
        width: '100%',
    },
});
