import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

const flow = require('./assets/flow-poster.jpg')

export default function App() {
  return (
    <View style={styles.container}>
      <Image onLoad={() => console.log('Image loaded')}  source={flow} style={{width: 300, height: 300, resizeMode: 'contain',  borderRadius: 16} } />
      <Text>Estamos trabajando para ti ✈ 😊</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
});
