import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Animated } from 'react-native';

const AnimeList = ({ navigate }) => {
  const animes = [
    { id: 1, name: 'One Piece', image: 'https://www.ubuy.co.id/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaWQvNjM1MDkyYjJjZTE1MDgxZDc5NjMwY2U2LW9uZS1waWVjZS1wb3N0ZXItamFwYW5lc2UtYW5pbWUtcG9zdGVycy5qcGc.jpg' },
    { id: 2, name: 'Naruto', image: 'https://www.wallpaperflare.com/static/1004/126/381/naruto-shippuuden-uzumaki-naruto-jiraiya-nara-shikamaru-wallpaper.jpg' },
    { id: 3, name: 'Attack on Titan', image: 'https://photo.kontan.co.id/photo/2020/12/28/95694032p.jpg' },
    { id: 4, name: 'Dragon Ball Z', image: 'https://asset-2.tstatic.net/manado/foto/bank/images/dragon-ball-z.jpg' },
    { id: 5, name: 'My Hero Academia', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHNL1qKSG8FA0Tu-YdvsHb_wL1bdlyYIWCKg&s' },
    { id: 6, name: 'Demon Slayer', image: 'https://wallpaperaccess.com/full/304832.jpg' },
  ];

  // Animasi untuk efek tombol
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

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>R.U.A AnimeKu</Text>
      {animes.map((anime) => (
        <Animated.View
          key={anime.id}
          style={[styles.card, { transform: [{ scale }] }]}
        >
          <TouchableOpacity
            style={styles.cardContent}
            onPress={() => navigate('Episodes', { animeName: anime.name })}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
          >
            <Image source={{ uri: anime.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>{anime.name}</Text>
              <Text style={styles.subText}>Tap to view episodes</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Warna latar belakang lebih gelap
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff6f00', // Warna header yang cerah dan menarik
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  card: {
    backgroundColor: '#1f1f2e', // Warna abu gelap untuk kartu
    borderRadius: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 6, // Untuk bayangan di Android
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#ff6f00', // Border oranye untuk gambar
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subText: {
    fontSize: 14,
    color: '#b0b0b0',
    marginTop: 6,
  },
});

export default AnimeList;
