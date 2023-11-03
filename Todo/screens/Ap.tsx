import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
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
      <StatusBar style="auto" />
      <View style={styles.List}>
        <Card />
      </View>

    </View>

  );
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
    height: 100,
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
    fontSize: 25,
  },
  subtask: {
    color: '#656B7B',
  },
  List: {
    flex: 1,
    alignItems: 'center',

  }


});
