import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  AppRegistry,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  
  const [data, setData] = useState({
    products: [
      { name: 'DELL Laptop', price: 699, image: 'https://picsum.photos/200' },
      { name: 'HP Laptop', price: 345, image: 'https://picsum.photos/200' },
      { name: 'ASUS Laptop', price: 1290, image: 'https://picsum.photos/200' },
    ],
    employees: [
      {
        name: 'Haseeb',
        des: 'Developer',
        pay: 1000,
        image: 'https://picsum.photos/200',
      },
      {
        name: 'Ahmed',
        des: 'UI Designer',
        pay: 950,
        image: 'https://picsum.photos/200',
      },
      {
        name: 'Haseeb',
        des: 'Q/A Engineer',
        pay: 780,
        image: 'https://picsum.photos/200',
      },
    ],
    orders: [
      {
        orderNo: 1,
        productId: 'E121X',
        price: 1200,
        delivery: 'JAN 21, 2021',
        image: 'https://picsum.photos/200',
      },
      {
        orderNo: 2,
        productId: 'ABC83',
        price: 420,
        delivery: 'FEB 23, 2022',
        image: 'https://picsum.photos/200',
      },
      {
        orderNo: 3,
        productId: 'X8A6D',
        price: 3200,
        delivery: 'JAN 29, 2023',
        image: 'https://picsum.photos/200',
      },
    ],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('PRODUCTS', data.products)}>
        <Text style={styles.homeButtons}>Manage Products</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('EMPLOYEES', data.employees)}>
        <Text style={styles.homeButtons}>Manage Employees</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ORDERS', data.orders)}>
        <Text style={styles.homeButtons}>Manage Orders</Text>
      </TouchableOpacity>
    </View>
  );
};

const ProductsScreen = ({ navigation, route }) => {
  const [list, setList] = useState(route.params);

  return (
    <View style={styles.container}>
      {list.map((el) => (
        <TouchableOpacity
          style={styles.productCard}
          onPress={() => navigation.navigate('APRODUCT', el)}>
          <Image style={styles.cardImage} source={{ uri: el.image }} />
          <Text style={styles.productName}>{el.name}</Text>
          <Text style={styles.productPrice}>${el.price}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const AProductScreen = ({ route }) => {
  const [item, setItem] = useState(route.params);

  return (
    <View style={{ margin: 15, padding: 10 }}>
      <Image style={styles.itemImage} source={{ uri: item.image }} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>Price: ${item.price}</Text>
    </View>
  );
};

const EmployeesScreen = ({ navigation, route }) => {
  const [list, setList] = useState(route.params);

  return (
    <View style={styles.container}>
      {list.map((el) => (
        <TouchableOpacity
          style={styles.productCard}
          onPress={() => navigation.navigate('AEMPLOYEE', el)}>
          <Image style={styles.cardImage} source={{ uri: el.image }} />
          <View>
            <Text style={{ fontSize: 20 }}>{el.name}</Text>
            <Text>Desig: {el.des}</Text>
          </View>
          <Text style={styles.productPrice}>Salary: {el.pay}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const AEmployeeScreen = ({ route }) => {
  const [item, setItem] = useState(route.params);

  return (
    <View style={{ margin: 15, padding: 10 }}>
      <Image style={styles.itemImage} source={{ uri: item.image }} />
      <Text style={styles.itemName}>Mr. {item.name}</Text>
      <Text style={styles.itemDes}>Designation: {item.des}</Text>
      <Text style={styles.itemPay}>Total Pay: ${item.pay}</Text>
    </View>
  );
};

const OrdersScreen = ({ navigation, route }) => {
  const [list, setList] = useState(route.params);

  return (
    <View style={styles.container}>
      {list.map((el) => (
        <TouchableOpacity
          style={styles.productCard}
          onPress={() => navigation.navigate('AORDER', el)}>
          <Image style={styles.cardImage} source={{ uri: el.image }} />
          <View>
            <Text style={{ fontSize: 12 }}>Order No: {el.orderNo}</Text>
            <Text style={{ fontSize: 12 }}>PID: {el.productId}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 12 }}>Price: {el.price}</Text>
            <Text style={{ fontSize: 12 }}>Delivery: {el.delivery}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const AOrderScreen = ({ route }) => {
  const [item, setItem] = useState(route.params);

  return (
    <View style={{ margin: 15, padding: 10 }}>
      <Image style={styles.itemImage} source={{ uri: item.image }} />
      <View style={{ marginVertical: 20 }}>
        <Text>Product Id: {item.productId}</Text>
        <Text style={styles.itemOrderNo}>Order No. {item.orderNo}</Text>
      </View>
      <Text style={styles.itemPay}>Total Price: ${item.price}</Text>
      <Text style={{ textAlign: 'center', marginVertical: 20 }}>
        Date of Delivery: {item.delivery}
      </Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HOME">
        <Stack.Screen
          name="HOME"
          component={HomeScreen}
          options={{
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#8c7ae6' },
            headerTitleStyle: { color: 'white' },
          }}
        />
        <Stack.Screen
          name="PRODUCTS"
          component={ProductsScreen}
          options={{
            title: 'ALL PRODUCTS',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#8c7ae6' },
            headerTitleStyle: { color: 'white' },
          }}
        />
        <Stack.Screen
          name="APRODUCT"
          component={AProductScreen}
          options={{
            title: 'PRODUCT',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#8c7ae6' },
            headerTitleStyle: { color: 'white' },
          }}
        />
        <Stack.Screen
          name="EMPLOYEES"
          component={EmployeesScreen}
          options={{
            title: 'All EMPLOYEES',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#8c7ae6' },
            headerTitleStyle: { color: 'white' },
          }}
        />
        <Stack.Screen
          name="AEMPLOYEE"
          component={AEmployeeScreen}
          options={{
            title: 'EMPLOYEE',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#8c7ae6' },
            headerTitleStyle: { color: 'white' },
          }}
        />
        <Stack.Screen
          name="ORDERS"
          component={OrdersScreen}
          options={{
            title: 'ALL ORDERS',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#8c7ae6' },
            headerTitleStyle: { color: 'white' },
          }}
        />
        <Stack.Screen
          name="AORDER"
          component={AOrderScreen}
          options={{
            title: 'ORDER',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#8c7ae6' },
            headerTitleStyle: { color: 'white' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1e1e1',
    margin: 8,
  },
  homeButtons: {
    textAlign: 'center',
    backgroundColor: '#8c7ae6',
    color: '#fff',
    width: 300,
    height: 50,
    padding: 15,
    marginBottom: 10,
  },
  productCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    width: '85%',
    height: 60,
    padding: 5,
    marginBottom: 10,
    borderColor: '#6b4ff6',
    borderWidth: 2,
  },
  cardImage: {
    width: 50,
    height: '100%',
  },
  productName: {
    fontSize: 20,
  },
  productPrice: {
    fontSize: 14,
    paddingHorizontal: 6,
    paddingVertical: 4,
    backgroundColor: '#8c7ae6',
    borderRadius: 4,
    color: 'white',
  },
  itemImage: {
    width: '100%',
    height: 150,
  },
  itemName: {
    fontSize: 24,
    marginVertical: 20,
    textAlign: 'center',
  },
  itemPrice: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#8c7ae6',
    paddingVertical: 6,
  },
  itemDes: {
    fontSize: 18,
    textAlign: 'center',
  },
  itemPay: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#8c7ae6',
    marginTop: 10,
    paddingVertical: 6,
  },
});

export default App;
