import { View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";
export default function TodoView() {
    return <>
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 40, }}>
                <View
                    style={{
                        width: 5,
                        height: 5,
                        backgroundColor: 'skyblue',
                        padding: 10,
                        borderRadius: 10

                    }}
                />
                <Text style={styles.title}> TODO ({4})</Text>
            </View>

            <View style={styles.List}>
                <Card />
            </View>

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

    }, List: {
        flex: 1,
        alignItems: 'center',
    }
})