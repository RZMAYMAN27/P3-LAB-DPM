import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnimeList from './components/AnimeList';
import EpisodeScreen from './screens/EpisodeScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home'); // State untuk layar saat ini
  const [selectedAnime, setSelectedAnime] = useState(null);  // State untuk anime yang dipilih

  const navigate = (screen, params = {}) => {
    setCurrentScreen(screen);
    if (params.animeName) {
      setSelectedAnime(params.animeName);
    }
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'Home' && <AnimeList navigate={navigate} />}
      {currentScreen === 'Episodes' && (
        <EpisodeScreen animeName={selectedAnime} navigate={navigate} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
