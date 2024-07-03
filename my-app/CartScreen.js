import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const CartScreen = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await AsyncStorage.getItem("cart");
      if (storedCart) setCart(JSON.parse(storedCart));
    };
    loadCart();
  }, []);

  const removeFromCart = async (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    await AsyncStorage.setItem("cart", JSON.stringify(newCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.icon} style={styles.imagePlaceholder} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <TouchableOpacity
        onPress={() => removeFromCart(item)}
        style={styles.removeButton}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("./assets/remove.png")}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ marginLeft: 160 }}
          source={require("./assets/logo.png")}
        />
        <View style={styles.icons}>
          <TouchableOpacity>
            <Image source={require("./assets/search.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.storyy}>
        <Text style={styles.story}>CHECKOUT</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.line}></View>
          <MaterialCommunityIcons
            name="cards-diamond-outline"
            size={20}
            color="#AFB0B6"
          />
          <View style={styles.line}></View>
        </View>
      </View>
      <View style={styles.content}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.footerr}>
          <Text style={styles.total}>EST. TOTAL </Text>
          <Text style={styles.totall}>${calculateTotal()} </Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <View
            style={{
              marginRight: 20,
              height: 40,
              width: 40,
              marginTop: 8,
            }}
          >
            <Image
              style={{
                marginRight: 20,
                height: 40,
                width: 40,
              }}
              source={require("./assets/w.png")}
            />
          </View>
          <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
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
  },
  story: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    fontSize: 30,
    marginTop: 10,
    paddingTop: 15,
  },
  storyy: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    marginTop: 10,
    marginBottom: 50,
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
  content: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 28,
    paddingBottom: 0,
  },
  cartItem: {
    flexDirection: "row",
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: 150,
    height: 210,
    backgroundColor: "#f0f0f0",
    marginRight: 10,
  },
  info: {
    marginTop: 70,
    flex: 1,
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
  },
  line: {
    width: 60,
    height: 1,
    backgroundColor: "#AFB0B6",
    marginTop: 20,
    alignContent: "center",
    bottom: 10,
  },
  removeButton: {
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  removeButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerr: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    justifyContent: "space-between",
    padding: 0,
    alignItems: "center",
  },
  total: {
    fontSize: 18,
    fontWeight: "normal",
    marginBottom: 10,
    marginLeft: 0,
  },
  totall: {
    fontSize: 18,
    fontWeight: "normal",
    marginBottom: 10,
    marginLeft: 250,
    color: "orange",
  },
  checkoutButton: {
    backgroundColor: "black",
    width: "110%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  checkoutButtonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "normal",
  },
});

export default CartScreen;
