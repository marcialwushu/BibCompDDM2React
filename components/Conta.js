import React, { Component }  from "react";
import { View, StyleSheet } from "react-native";
import { Card, Button, Text } from "react-native-elements";

import { ScrollNavigator, NavigatorContent, NavigatorBox, Title, Icon } from '../components/styled';
import { indicator, deposit, transfer, ajust, card, payment, block } from '../assets/home';
import { StatusBar } from 'react-native'
import { HomeContainer, SwiperContainer } from '../components/styledSheet';

class BottomNavigator extends Component {
  state = {
    menuItems: [
      { name: 'Indicar amigos', source: indicator },
      { name: 'Depositar', source: deposit },
      { name: 'Transferir', source: transfer },
      { name: 'Ajustar Limite', source: ajust },
      { name: 'Cartão virtual', source: card },
      { name: 'Pagar', source: payment },
      { name: 'Bloquear cartão', source: block },
    ],
  }

  renderMenusItems = ({ name, source }, index) => (
    <NavigatorBox key={`${name}-${index}`}>
      <Icon height={40} width={40} source={source} />
      <Title>{name}</Title>
    </NavigatorBox>
  )

  render() {
    const { menuItems } = this.state

    return (
      <NavigatorContent>
        // Aqui está o segredo, é necessário indicar que a scroll é horizontal e também retiramos o indicador.
        <ScrollNavigator
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {menuItems.map(this.renderMenusItems)}

        </ScrollNavigator>
      </NavigatorContent>

    )
  }

}

const styles = StyleSheet.create({
  container: {
     width: 200, 
     height: 150,  
     opacity: .2, 
     marginBottom: 15,
     padding: 30,
  },
  text: {
    color: '#ffff', 
    fontSize: 45, 
    textAlign: 'center',
  },
});


export default ({ navigation }) => (

  <HomeContainer>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.container}>
          <Text style={styles.text}>Jonas</Text>
        </View>
        
        <SwiperContainer />
        <Card title='INTERNET BANKING'
        image={require('../assets/tIB55Hr.jpg')}>
          <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
        </Card>
        <BottomNavigator />
</HomeContainer>


 
  
);

