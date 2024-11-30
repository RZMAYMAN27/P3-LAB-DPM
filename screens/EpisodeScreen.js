import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Animated, Image } from 'react-native';

const EpisodeScreen = ({ animeName, navigate }) => {
  const episodes = Array.from({ length: 10 }, (_, i) => `Episode ${i + 1}`);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  // Sinopsis untuk setiap episode
  const episodeSynopses = {
    'Episode 1': 'Sinopsis Episode 1: Petualangan dimulai dengan...',
    'Episode 2': 'Sinopsis Episode 2: Lanjutkan perjalanan dengan...',
    'Episode 3': 'Sinopsis Episode 3: Kejadian tak terduga terjadi...',
    'Episode 4': 'Sinopsis Episode 4: Kejadian tak terduga terjadi...',
    'Episode 5': 'Sinopsis Episode 5: Kejadian tak terduga terjadi...',
    'Episode 6': 'Sinopsis Episode 6: Kejadian tak terduga terjadi...',
    'Episode 7': 'Sinopsis Episode 7: Kejadian tak terduga terjadi...',
    'Episode 8': 'Sinopsis Episode 8: Kejadian tak terduga terjadi...',
    'Episode 9': 'Sinopsis Episode 9: Kejadian tak terduga terjadi...',
    'Episode 10': 'Sinopsis Episode 10: Kejadian tak terduga terjadi...',   
  };

  // Animasi untuk tombol
  const scale = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleEpisodePress = (episode) => {
    if (selectedEpisode === episode) {
      setSelectedEpisode(null); // Jika episode yang sama diklik lagi, hide sinopsis
    } else {
      setSelectedEpisode(episode); // Menampilkan sinopsis
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{animeName} Episodes</Text>

      <FlatList
        data={episodes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Animated.View style={[styles.episode, { transform: [{ scale }] }]}>
            <TouchableOpacity
              style={styles.episodeContent}
              onPress={() => handleEpisodePress(item)}
              onPressIn={onPressIn}
              onPressOut={onPressOut}
            >
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Video_camera_icon_%28Vector%29.svg/512px-Video_camera_icon_%28Vector%29.svg.png',
                }} // Contoh gambar icon episode
                style={styles.icon}
              />
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>

            {/* Tampilkan sinopsis jika episode dipilih */}
            {selectedEpisode === item && (
              <View style={styles.synopsisContainer}>
                <Text style={styles.synopsisText}>{episodeSynopses[item]}</Text>

                {/* Tombol untuk menonton video */}
                <TouchableOpacity
                  style={styles.watchButton}
                  onPress={() => {
                    // Aksi untuk tombol "Tonton Video" bisa disesuaikan
                    alert(`Menonton ${item}`);
                  }}
                >
                  <Text style={styles.watchButtonText}>Tonton Video</Text>
                </TouchableOpacity>
              </View>
            )}
          </Animated.View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigate('Home')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff6f00', // Warna cerah untuk header
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 2,
  },
  episode: {
    backgroundColor: '#1f1f2e',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5, // Untuk bayangan di Android
  },
  episodeContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#2a2a37', // Latar belakang episode lebih gelap
    borderRadius: 12,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  synopsisContainer: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 10,
    maxWidth: '100%',
  },
  synopsisText: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 22,
  },
  watchButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  watchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default EpisodeScreen;
