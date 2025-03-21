//PRACTICA 1////////////////////////////////////////
/*
import React from 'react';
import { Text } from 'react-native';

const Cat = () => {
  return <Text> Hello, I am your cat!</Text>;
};
export default Cat;
*/
//PRACTICA 2////////////////////////////////////////
/*
import React from 'react';
import { Text } from 'react-native';

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};
const Cat = () => {
  return <Text>
    Hello, I am 
    {getFullName('Francisco', 'Javier', 'Macias')}!
    </Text>;
};
export default Cat;
*/
//PRACTICA 3/////////////////////////////////////////
/*
import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Cat = () => {
  return (
    <View>
      <Text>Hello, I am...</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="(Name me!)"
      />
    </View>
  );
};
export default Cat;
*/
//PRACTICA 4//////////////////////////////////////////
/*
import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Cat = () => {
  return (
    <View>
      <Text>I am also a cat!</Text>
    </View>
  );
};
const Cafe = () => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Cat />
      <Cat />
      <Cat />
    </View>
  )
};
export default Cafe;
*/
//PRACTICA 5//////////////////////////////////////////
/*
import React from 'react';
import { Image } from 'react-native';

const Imagen = () => {
  let pic = require('./assets/Meme.jpeg');
  return (
    <Image source={pic} 
    style={{width:200, height: 200, marginTop: 50}}>
    </Image>
  );
};
export default Imagen;
*/
//PRACTICA 6//////////////////////////////////////////
/*
import React from 'react';
import { Text, View } from 'react-native';
const Greeting = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
};
const LotsOfGreetings = () => {
  return (
    <View style={{alignItems: 'center', top:50}}>
      <Greeting name="Rexxar"/>
      <Greeting name="Jaina"/>
      <Greeting name="Valeera"/>
    </View>
  );
};
export default LotsOfGreetings;
*/
//PRACTICA 7//////////////////////////////////////////
/*
import { StyleSheet, View, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter message here"
        value={message}
        onChangeText={(text) => setMessage(text)}
        style={styles.input}
        onSubmitEditing={() => alert(message)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", alignItems: "center", justifyContent: "center",
  },
  input: {
    fontSize: 20, color: "#228B22", fontWeight: "bold",
  },
});
*/
//PRACTICA 8//////////////////////////////////////////
/*
import {StyleSheet, View, Text, Button } from "react-native";
import {useState} from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  return (
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.number}>{number}</Text>
      <Button
      title="Change State"
      onPress={() => {
        setNumber(number + 1);
      }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 20, color: "#228B22", fontWeight: "bold",
  },
});
*/
//PRACTICA 9//////////////////////////////////////////

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator(); 
function HomeScreen () {
  return (
    <View 
    style={{
      flex:1, 
      alignItems: 'center', 
      justifyContent:'center'}}/>
  )
}

function RootStack () {
return (
<Stack.Navigator>
<Stack.Screen name="Home" component = {HomeScreen} />
</Stack.Navigator>
);
}

export default function App() {
return (
<NavigationContainer>
<RootStack />
</NavigationContainer>
);
}
