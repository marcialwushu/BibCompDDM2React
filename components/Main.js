import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, ScrollView, TouchableOpacity, FlatList, TouchableWithoutFeedback } from 'react-native';

import {Avatar, ListItem, Card, FormLabel, FormInput, SearchBar, Icon } from 'react-native-elements';

import firebase from 'firebase';
import config from './db';


export default class Main extends React.Component {
  
  constructor(props){
    super(props);
    this.state = { livros : []}
  }
  state = { currentUser: null }

  componentDidMount() {
    
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } 

    

    const { currentUser } = firebase.auth()

    this.setState({ currentUser })

     this.buscaLivros();
  }

  buscaLivros() {
    
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } 

    firebase.database().ref('livros').on('value', (snapshot)=> {
        var aTarefas = [];
        snapshot.forEach( (child) => {
          aTarefas.push ({
            dados : child.val(),
            chave : child.key
          });
        });         
        this.setState({tarefas : aTarefas});
    });
  }

  filtraLivros(text){

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } 

    if(text.length > 0) {
      firebase.database().ref('livros')
      .orderByChild('titulo')
      .equalTo(text)
      .on('value', (snapshot)=> {
          var aTarefas = [];
          snapshot.forEach( (child) => {
            aTarefas.push ({
              dados : child.val(),
              chave : child.key
            });
          });         
          this.setState({tarefas : aTarefas});
      });
    }
    else {
      this.buscaLivros();
    }

    
  }

  render() {
    const { currentUser } = this.state;
    const tarefasTemp = this.state.tarefas;


    return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 ,backgroundColor: '#455a64'}}>
        
        <View style={styles.top}>
          <View style={styles.foto}>
            <Avatar
              chevron
              size="xlarge"
              rounded
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
          </View>
          <Text style={styles.teste}>Seja bem vindo(a),</Text>
          <Text style={styles.teste1}>{currentUser && currentUser.email}!</Text>
        </View>   

        <View style={styles.menu}>

            <View >
              <TouchableOpacity style={styles.botao} onPress={()=>this.props.navigation.navigate('cadastraLivro')}>
                <Text style={styles.textobotao}>Meus livros</Text>  
              </TouchableOpacity>
            </View>

            <View >
              <TouchableOpacity style={styles.botao} onPress={()=>this.props.navigation.navigate('Login')}>
                <Text style={styles.textobotao}>Empréstimo</Text>  
              </TouchableOpacity>
            </View>

            <View >
              <TouchableOpacity style={styles.botao} onPress={()=>this.props.navigation.navigate('Login')}>
                <Text style={styles.textobotao}>Solicitações</Text>
              </TouchableOpacity>
            </View>

        </View>  

        <View style={styles.corpo}>

          <Text style={styles.titulo}>Livros disponíveis
          <Icon
            fontsize='30'
            name='loyalty'
            type='arial'
            color='#000000' 
          />
          </Text>

          <View style={styles.pesquisa}>
            <SearchBar
              lightTheme
              ref={search => this.search = search}
              onChangeText={this.filtraLivros.bind(this)}
              placeholder='Ex: Engenharia de Software' 
            />

          </View>

          <View style={styles.lista}>
            <FlatList
              data = {tarefasTemp}
              keyExtractor = { item => item.dados.id} 
              renderItem = {
                ({item}) =>
                <TouchableWithoutFeedback >
                <View style={styles.items}>
                  <Text>{item.dados.titulo}</Text>
                <Text>{item.dados.autor}-{item.dados.edicao}</Text>  
                </View>
                </TouchableWithoutFeedback>
              }
            />
              
          </View>

        </View>
           
        <TouchableOpacity style={styles.button1} onPress={ () =>   this.props.navigation.navigate('Login') }>
          <Text style={styles.buttonText}> Sair </Text>
        </TouchableOpacity>

        </ScrollView>
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
    color: '#ffffff'
  },
  top: {
    flex: 1,
    height: 80,
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    borderRadius: 5,
    color: '#ffffff'
  },
  foto: {
    borderRadius: 45,
    height: 70,
    marginLeft: 40,
    align: 'left'
  },
  menu: {
    flex: 1,
    height: 70,
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 5,
    color: '#ffffff'
  },  
  botao: {
     width: 100,
     height: 18,
     backgroundColor:'#1c313a',
     borderRadius: 20,
     marginTop: 2

  },
  textobotao: {
     fontSize: 15,
     fontWeight: '500',
     color: '#ffffff',
     textAlign: 'center',
     
  },
  corpo: {
    flex: 1,
    height: 400,
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    marginTop: 5,
    borderRadius: 5,
    color: '#ffffff'
  },
  titulo: {
    margin: 10,
    marginTop: 5,
    fontSize: 17,
    fontWeight: 'arial',
    textAlign: 'center',
    color: '#000000',
  },
  pesquisa: {
    margin: 10,
  },
  lista: {
    marginLeft: 10,
  },

  teste: {
    marginLeft: 100,
    marginTop: -70,
    textAlign: 'justify'
  },
  teste1: {
    marginLeft: 100,
    marginTop: -5,
    textAlign: 'justify'
  },
  
   button1: {
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
})