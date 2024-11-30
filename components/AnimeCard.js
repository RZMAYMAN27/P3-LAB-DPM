import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function AnimeCard({ anime }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: anime.images.jpg.image_url }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{anime.title}</Text>
        <Text style={styles.subtitle}>{anime.type}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginVertical: 8,
    padding: 10,
    elevation: 3,
  },
  image: {
    width: 70,
    height: 100,
    borderRadius: 8,
  },
  info: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
