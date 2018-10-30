import * as React from 'react';
import { Constants } from 'expo';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image
} from 'react-native';


export default class PhotoGrid extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.photoGrid}>

          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../assets/books/lrg (1).jpg')} />
          </View>

          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../assets/books/lrg (2).jpg')} />
          </View>

          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../assets/books/lrg (3).jpg')} />
          </View>

          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../assets/books/lrg (4).jpg')} />
          </View>

          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../assets/books/5438OS_3676_Learning Go Programming.png')} />
          </View>

          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../assets/books/5623-final.png')} />
          </View>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  photoWrap: {
    margin: 2,
    height: 120,
    width: (Dimensions.get('window').width /2) - 4,
  },
  photo: {
    flex: 1, 
    width: null,
    alignSelf: 'stretch',
    padding: 25
  }


});
