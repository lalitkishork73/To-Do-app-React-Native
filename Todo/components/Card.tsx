import { StyleSheet, Text, View } from 'react-native';

export default function Card() {

    return <>

        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>Build UI for onboarding flow</Text>
            <Text style={styles.subtask}>0 of 3 subtasks</Text>
        </View>
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>Build UI for onboarding flow sda s dsds sddsd dsdasd dsds dsds dsdda daksdn</Text>
            <Text style={styles.subtask}>0 of 3 subtasks</Text>
        </View>

    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#21222D',
    },
    title: {
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#777988'

    },
    cardContainer: {
        backgroundColor: '#2C2C38',
        height: 'auto',
        paddingHorizontal: 10,
        paddingVertical: 20,
        width: '95%',
        borderRadius: 7,
        justifyContent: 'center',
        paddingLeft: 15,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        marginHorizontal: 4,
        marginVertical: 6,

    },
    cardTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    subtask: {
        color: '#656B7B',
    },
    List: {
        flex: 1,
        alignItems: 'center',

    }


});