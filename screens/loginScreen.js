import React from 'react';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert, TextInput, Image, Pressable } from 'react-native';

const Separator = () => <View style={styles.separator} />;


const LoginScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <View>
      <View style={{ paddingBottom:20}}>
        <Image source={require('../assets/images/ParkItlogo.png')} style={styles.image} />
      </View>
 
      <View>
        <View styles={styles.textInputStyling}>
          <TextInput placeholderTextColor='grey' placeholder='Username' />
        </View>
        <Separator />
        <View style={{ paddingTop:20}} >
          <TextInput placeholderTextColor='grey' placeholder='Password' />
        </View>
        <Separator />
      </View>
    </View>

    <View style={styles.forgotPasswordViewStyle}>
      <Pressable onPress={() => navigation.navigate("ForgetPassword")}>
        <Text style={styles.forgotPasswordStyle}>
          Forgot Password?
        </Text>
      </Pressable>
    </View>

    <View style={styles.buttons}>
      <View style={styles.navigators}>
        <Button
          title="Login"
          color="#5D0EEA"
           
          onPress={() => { navigation.navigate("Map1"), Alert.alert('Login button pressed') }}
          
        />
      </View>




    </View>
    <View style={styles.navigators}>
        <Pressable
          color="#5D0EEA"
          //leave the Alert there, might want to use for other stuff in the future
          onPress={() => { navigation.navigate("SignUp1"), Alert.alert('Sign Up button pressed') }}
        >
           <Text style={styles.forgotPasswordStyle}>
          Or Sign Up
        </Text>
        </Pressable>
      </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  // title: {
  //   textAlign: 'center',
  //   marginVertical: 8,
  // },
  separator: {
    //marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  navigators: {
    marginVertical: 2,
    paddingHorizontal:'20%',
    flex: 1,
  },
  buttons: {
    marginVertical: 8,
    flexDirection:'row',
    paddingTop:20,
  },
  image: {
    margin: 20,
    padding: 16,
  },
  // textInputLayout: {
    
  //   flex: 1,
  //   paddingTop:'50%',
  //   margin: 5,
  //   justifyContent: 'space-between',
  //   padding: 20,
  //   backgroundColor: '#cccccc',
  //   loginButton: {
  //     border: 3,
  //     backgroundColor: 'blue',
  //     padding: 20,

  //   }
  // },
  textInputStyling: {
    
    borderWidth: 1,
    justifyContent: 'center',
  },
  forgotPasswordStyle: {
    color: '#5D0EEA',
    fontSize: 10,
    textAlign: 'right',
  },
  forgotPasswordViewStyle: {
    width: '52%',
    paddingTop:10,

  }
});


export default LoginScreen;
