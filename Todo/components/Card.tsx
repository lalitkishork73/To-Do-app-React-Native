import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Card({ title, subtasks }: any) {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.subtask}>{subtasks} subtasks</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#2C2C38',
        padding: 10,
        marginBottom: 10,
        width: '100%',
        borderRadius: 7,

        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
    },
    cardTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    subtask: {
        color: '#656B7B',
    },
});
