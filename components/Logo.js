import * as React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
 } from 'react-native';

import logoImg from '../assets/logoddm2.jpg';

export default class Logo extends React.Component{
  render() {
    return(
      <View >
        <Image style={{width:70, height: 70}} source={logoImg} />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  
 
  
});