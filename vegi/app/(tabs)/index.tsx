import React from 'react';
import { Image, StyleSheet, ScrollView, View, TouchableOpacity, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';

// Banner, Popular Items, and Categories Data
const banners = [
  { id: 1, image: 'https://via.placeholder.com/300x150?text=Banner+1' },
  { id: 2, image: 'https://via.placeholder.com/300x150?text=Banner+2' },
  { id: 3, image: 'https://via.placeholder.com/300x150?text=Banner+3' },
];

const popularItems = [
  { id: 1, name: 'Tomatoes', image: 'https://via.placeholder.com/100', price: '$2' },
  { id: 2, name: 'Apples', image: 'https://via.placeholder.com/100', price: '$3' },
  { id: 3, name: 'Milk', image: 'https://via.placeholder.com/100', price: '$1.5' },
  { id: 4, name: 'Chicken', image: 'https://via.placeholder.com/100', price: '$5' },
];

const categories = [
  { id: 1, name: 'Vegetables', icon: 'leaf-outline' },
  { id: 2, name: 'Fruits', icon: 'basket-outline' },
  { id: 3, name: 'Dairy Products', icon: 'ice-cream-outline' },
  { id: 4, name: 'Non-Veg Products', icon: 'fish-outline' },
];

export default function HomeScreen() {
  const renderBanner = ({ item }) => (
    <Image source={{ uri: item.image }} style={styles.banner} />
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header: Location, Search, Cart */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="location-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TextInput placeholder="Search items" style={styles.searchBox} />
        <TouchableOpacity>
          <Icon name="cart-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Banner Slider */}
      <Carousel
        data={banners}
        renderItem={renderBanner}
        sliderWidth={400}
        itemWidth={300}
        loop
      />

      {/* Categories */}
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryCard}>
            <Icon name={category.icon} size={30} color="#000" />
            <Text>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Popular Items */}
      <Text style={styles.sectionTitle}>Popular Items</Text>
      <View style={styles.popularContainer}>
        {popularItems.map((item) => (
          <View key={item.id} style={styles.popularCard}>
            <Image source={{ uri: item.image }} style={styles.popularImage} />
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  searchBox: {
    flex: 1,
    marginHorizontal: 10,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
  },
  banner: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  categoryCard: {
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  popularContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  popularCard: {
    width: 100,
    alignItems: 'center',
    marginBottom: 10,
  },
  popularImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
});
