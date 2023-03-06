import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../globalStyles';

export const CardList = ({ data, renderItem, keyExtractor }) => {
  return (
    <View style={styles.card}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 17,
    color: Colors.black,
  },
  card: {
    marginTop: 30,
    marginBottom: 40,
    display: 'flex',
  },
});
