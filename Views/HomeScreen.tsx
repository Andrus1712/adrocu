import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }: any) => {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{text}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Escribe aquí"
          keyboardType="default"
        />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    maxWidth: 300,
    paddingHorizontal: 8,
    marginBottom: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default HomeScreen;
