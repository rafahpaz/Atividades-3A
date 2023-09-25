import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const App = () => {
  // Array de nomes
  const nomesArray = [
    'Ana Maria',
    'Bruno Alves',
    'Carlos José',
    'Daniel Martins',
    'Efraim Gomes',
    'Francisco Junior',
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={nomesArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  item: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
  },
});

export default App;