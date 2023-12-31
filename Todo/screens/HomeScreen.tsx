// screens/HomeScreen.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import ProfileScreen from './ProfileScreen';
import AddTodo from './AddTodo';
import TodoView from './TodoView';
const Tab = createBottomTabNavigator();

const TodoScreen = () => (
    <View style={styles.tabContent}>
        <TodoView />
    </View>
);

const CreateTodo = () => (
    <AddTodo />
);



const HomeScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#676C78', // Text color for active tab
                tabBarInactiveTintColor: '#ccc', // Text color for inactive tab
                tabBarIndicatorStyle: { backgroundColor: '#676C78' }, // Tab indicator color
                tabBarStyle: { backgroundColor: '#21222D' }, // Tab bar background color
                tabBarLabelStyle: { fontSize: 16, }, // Tab label style
            })}
        >
            <Tab.Screen name="Todo" component={TodoScreen} options={{ title: 'ToDo' }} />
            <Tab.Screen name="In Progress" component={CreateTodo} options={{ title: 'Create Todo' }} />
            <Tab.Screen name="Completed" component={ProfileScreen} options={{ title: 'Profile' }} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabContent: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#21222D',
    },
    tabText: {
        fontSize: 20,
    },
});

export default HomeScreen;
