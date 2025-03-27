import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { getLatestGames } from "../lib/metacritic";

const flow = require('./assets/flow-poster.jpg')

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then(games => setGames(games));
  }, []);
  return (
    <View style={styles.container}>
     <StatusBar style="auto" />
     {games.map(games => (
      <View key={games.slug} style={styles.card}>
        <Image source={{uri: games.poster}} style={styles.poster} />
        <Text>{games.title}</Text>
        <Text>{games.year}</Text>
        <Text>{games.score}</Text>
      </View> 
     ))}
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
  poster: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  card:{

  }
});
