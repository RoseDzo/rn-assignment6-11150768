import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const products = [
  {
    id: "1",
    name: "OFFICE WEAR",
    description: "Office wear for your service",
    price: 120,
    icon: require("./assets/dress1.png"),
  },
  {
    id: "2",
    name: "Black",
    description: "reversible angora cardigan",
    price: 120,
    icon: require("./assets/dress22.png"),
  },
  {
    id: "3",
    name: "Church Wear",
    description: "reversible angora cardigan",
    price: 120,
    icon: require("./assets/dress33.png"),
  },
  {
    id: "4",
    name: "LAMEREI",
    description: "Recycle Boucle Knit Cardigan Pink",
    price: 120,
    icon: require("./assets/dress44.png"),
  },
  {
    id: "5",
    name: "21WN",
    description: "reversible angora cardigan",
    price: 120,
    icon: require("./assets/dress55.png"),
  },
  {
    id: "6",
    name: "Lopo",
    description: "reversible angora cardigan",
    price: 120,
    icon: require("./assets/dress66.png"),
  },
  {
    id: "7",
    name: "21WN Alt",
    description: "reversible angora cardigan",
    price: 120,
    icon: require("./assets/dress77.png"),
  },
  {
    id: "8",
    name: "Lame",
    description: "reversible angora cardigan",
    price: 120,
    icon: require("./assets/dress33.png"),
  },
];

const HomeScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await AsyncStorage.getItem("cart");
      if (storedCart) setCart(JSON.parse(storedCart));
    };
    loadCart();
  }, []);

  const addToCart = async (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    await AsyncStorage.setItem("cart", JSON.stringify(newCart));
  };

  const renderItem = ({ item }) => (
    <View style={styles.product}>
      <View style={styles.imagePlaceholder}>
        <Image source={item.icon} style={{ width: "100%", height: "100%" }} />
        <TouchableOpacity
          onPress={() => addToCart(item)}
          style={styles.addButton}
        >
          <Image
            source={require("./assets/circle.png")}
            style={{ height: "100%", width: "100%" }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/menu.png")} />
        <Image source={require("./assets/logo.png")} />
        <View style={styles.icons}>
          <TouchableOpacity>
            <Image source={require("./assets/search.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Image source={require("./assets/bag.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.storyHeader}>
        <Text style={styles.storyTitle}>OUR STORY</Text>
        <View style={styles.storyIcons}>
          <TouchableOpacity>
            <View style={styles.rounddIcon}>
              <Image source={require("./assets/wiew.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.roundIcon}>
              <Image source={require("./assets/fil.png")} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  icons: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
  },
  storyHeader: {
    flexDirection: "row",
    justifyContent: "",
    alignItems: "center",
    paddingHorizontal: 25,
    height: 60,
  },
  storyTitle: {
    fontSize: 18,
    fontFamily: "Bodoni",
  },
  storyIcons: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
  },
  rounddIcon: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 200,
  },
  roundIcon: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  listContainer: {
    paddingHorizontal: 15,
  },
  product: {
    flex: 1,
    margin: 5,
  },
  imagePlaceholder: {
    width: "100%",
    height: 300,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  price: {
    fontSize: 16,
    color: "orange",
    marginBottom: 10,
  },
  addButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "transparent",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
