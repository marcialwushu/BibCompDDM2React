import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import {Card, Icon, SearchBar } from 'react-native-elements';
import config from './db';
import firebase from 'firebase';

export default class cadastraLivro extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        titulo : '',
        edicao : 0,
        autor : '',
        area : ''
    };
  }

  cadastrarLivro(){
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    let praia = {
      titulo : this.state.titulo,
      autor : this.state.autor,
      area : this.state.area,
      edicao : this.state.edicao
    };

    firebase.database().ref('livros').push(praia)
    .then( () => {
        Alert.alert('Livro cadastrado com sucesso!');
        this.props.navigation.navigate('Main');
      }, () => {
        Alert.alert('Erro ao cadastrar livro!');
      }
    );

  }

  render() {
    return (
     
      <View style={styles.container}>
        <Text style={styles.paragraph}>
           Cadastro de livros <Text>- </Text>   
        <Icon
        fontsize='36'fontsize='36'
        name='book'
        type='font-awesome'
        color='#ffffff' />
        </Text>

        <TextInput
          style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholderTextColor='#ffffff'
          autoCapitalize="none"
          placeholder="Título"
          onChangeText={titulo => this.setState({ titulo })}
          value={this.state.titulo}
        />
        <TextInput
       
          style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholderTextColor='#ffffff'
          autoCapitalize="none"
          placeholder="Autor"
          onChangeText={autor => this.setState({ autor })}
          value={this.state.autor}
        />
        <TextInput
    
          style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholderTextColor='#ffffff'
          autoCapitalize="none"
          placeholder="Edição"
          onChangeText={edicao => this.setState({ edicao })}
          value={this.state.edicao}
        />
        <TextInput
      
          style={styles.inputBox} 
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholderTextColor='#ffffff'
          autoCapitalize="none"
          placeholder="Área"
          onChangeText={area => this.setState({ area })}
          value={this.state.area}
        />

        <TouchableOpacity style={styles.button} onPress={this.cadastrarLivro.bind(this)} >
           <Text style={styles.buttonText}> Cadastrar </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={ () =>   this.props.navigation.navigate('Main') }>
           <Text style={styles.buttonText}> Voltar </Text>
        </TouchableOpacity>

      </View>
    
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 30,
    fontWeight: 'arial',
    textAlign: 'center',
    color: '#ffffff',
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
     
   }
});
