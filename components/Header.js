import * as React from 'react';
import { Constants } from 'expo';

import {
	AppRegistry,
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
	// flex: 1,
	width: 400,
  height: 200,
	alignSelf: 'strech',
  // marginBotton: 700
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0, 0.5)'
  },
  profilepicWrap: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0, 0.4)',
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
