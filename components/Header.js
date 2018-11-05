import * as React from 'react';
import { Constants } from 'expo';

import {
	StyleSheet,
	Text,
	View,
	Image,
  ImageBackground
} from 'react-native';

export default class ProfilePage extends React.Component {
	render() {
		return (
			<ImageBackground style={styles.headerBackground} source={require('../assets/images/1.jpg')}>
        <View style={styles.header}>
          <View style={styles.profilepicWrap}>
            <Image style={styles.profilepic} source={require('../assets/images/tamisaito.jpg')} />
          </View>
        </View>
			</ImageBackground>

		);



	}
}

const styles = StyleSheet.create({
  headerBackground: {
	
	width: 400,
  height: 200,
	alignSelf: 'strech',
  
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#455a64'
  },
  profilepicWrap: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor: '#455a64',
    borderWidth: 16,
  },
  profilepic: {
    flex: 1, 
    width: null, 
    alignSelf: 'strech',
    borderRadius: 100,
    boderColor: '#fff',
    borderWidth: 4
  }
});
