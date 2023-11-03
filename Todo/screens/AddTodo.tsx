import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Task {
  title: string;
  description: string;
  subtasks: string[];
  status: string;
}

export default function AddTodo() {
  const [Task, setTask] = useState<Task>({
    title: '',
    description: '',
    subtasks: [],
    status: 'To Do'
  });

  const addSubtask = () => {
    const updatedSubtasks = [...Task.subtasks, ''];
    setTask({ ...Task, subtasks: updatedSubtasks });
  };

  const updateSubtask = (text: string, index: number) => {
    const updatedSubtasks = [...Task.subtasks];
    updatedSubtasks[index] = text;
    setTask({ ...Task, subtasks: updatedSubtasks });
  };

  const createTask = async () => {
    try {
      // Load existing tasks from AsyncStorage
      const existingTasksJSON = await AsyncStorage.getItem('tasks');
      const existingTasks = existingTasksJSON ? JSON.parse(existingTasksJSON) : [];

      // Create a new task
      const newTask = {
        title: Task.title,
        description: Task.description,
        subtasks: Task.subtasks,
        status: Task.status,
      };

      // Add the new task to the existing tasks
      existingTasks.push(newTask);

      // Save the updated tasks back to AsyncStorage
      await AsyncStorage.setItem('tasks', JSON.stringify(existingTasks));

      console.log('New Task:', Task);
    } catch (error) {
      console.error('Error saving task to AsyncStorage:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={style.container}>
      <Text style={style.title}>Add New Task</Text>

      <Text style={style.label}>Title</Text>
      <View style={style.inputBox}>
        <TextInput
          style={style.input}
          placeholder="e.g. Take coffee break"
          value={Task.title}
          onChangeText={(text) => setTask({ ...Task, title: text })}
        />
      </View>

      <Text style={style.label}>Description</Text>
      <View style={style.inputBox}>
        <TextInput
          style={style.input}
          placeholder="e.g. It's always good to take a break. This 15-minute break will recharge the batteries a little."
          value={Task.description}
          onChangeText={(text) => setTask({ ...Task, description: text })}
        />
      </View>

      <Text style={style.label}>Subtasks</Text>
      {Task.subtasks.map((subtask, index) => (
        <View style={style.inputBox} key={index}>
          <TextInput
            style={style.input}
            placeholder={`Subtask ${index + 1}`}
            value={subtask}
            onChangeText={(text) => updateSubtask(text, index)}
          />
        </View>
      ))}
      <Button title="+ Add New Subtask" onPress={addSubtask} />

      <Text style={style.label}>Status</Text>
      <View style={style.inputBox}>
        <TextInput
          style={style.input}
          placeholder="e.g. To Do"
          value={Task.status}
          onChangeText={(text) => setTask({ ...Task, status: text })}
        />
      </View>

      <Button title="Create Task" color="#645FC7" onPress={createTask} />
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#21222D',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  label: {
    color: 'white',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: '#676C78',
  },
  inputBox: {
    marginBottom: 20,
  },
  button: {
    color: 'black',
    backgroundColor: '#676C78',
  },
});
