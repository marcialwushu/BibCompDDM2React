import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
import firebase from 'firebase';
import config from './db';
import Logo from '../components/Logo';

export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }

  handleLogin = () => {
    const { email, password } = this.state
    
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } 

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Text></Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholderTextColor='#ffffff'
          autoCapitalize="none"
          placeholder="E-mail"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholderTextColor='#ffffff'
          autoCapitalize="none"
          placeholder="Senha"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
          <TouchableOpacity style={styles.button} onPress={this.handleLogin} >
           <Text style={styles.buttonText}> Entrar </Text>
        </TouchableOpacity>
        
        <Button
          style={styles.buttonText}
          title="Não possui uma conta? Cadastre-se"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
    alignItems: 'center',
    justifyContent: 'center',
  },
   inputBox: {
     width: 300,
     height: 50,
     backgroundColor:'rgba(255,255,255,0.3)',
     borderRadius: 25,
     paddingHorizontal: 16,
     fontSize: 16,
     color: '#ffffff',
     marginVertical: 10,
   },
   button: {
     width: 300,
     height: 45,
     backgroundColor:'#1c313a',
     borderRadius: 25,
     paddingVertical: 13,
     marginVertical: 10,
   },
   buttonText: {
     fontSize: 16,
     fontWeight: '500',
     color: '#ffffff',
     textAlign: 'center',
     
   },
});