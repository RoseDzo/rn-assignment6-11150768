# rn-assignment6-11150768

Shopping App


This shopping app is built using React Native and Expo. I designed it with a clean and user-friendly interface, consistent styling, and a grid layout for products. For data storage, I utilized @react-native-async-storage/async-storage to persist cart items even after app closure. Cart items are loaded and saved dynamically using AsyncStorage.

Design Choices

- Clean and user-friendly interface
- Consistent styling
- Grid layout for products

Data Storage

- Utilizes @react-native-async-storage/async-storage for persistent storage
- Cart contents are retained even after app closure
- Cart items are loaded and saved dynamically using AsyncStorage



HomeScreen

!/path/to/home_screen.png

CartScreen

Screenshots
![image3](./assets/image3.jpg)
![image2](./assets/image2.jpg)
![image1](./assets/image1.jpg)


The app consists of two main screens: HomeScreen and CartScreen. HomeScreen displays products in a grid layout with add to cart functionality, while CartScreen displays cart items with remove from cart functionality and total price calculation. I used AsyncStorage to store cart items and retrieved them on component mount.

