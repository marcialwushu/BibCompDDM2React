import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createSwitchNavigator } from 'react-navigation'
import { FontAwesome } from "react-native-vector-icons";



import Loading from './components/Loading'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Main from './components/Main'
import cadastraLivro from './components/cadastraLivro'



const App = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main,
    cadastraLivro
  },
  {
    initialRouteName: 'Loading'
  }
)

export default App
