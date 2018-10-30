import * as React from 'react';
import { Constants } from 'expo';

import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
  Button
} from 'react-native';

import Header from './Header';

export default class Home extends React.Component {
	render() {
		return (
			<View style={styles.container}>
        <Header />
        <Button
          title = 'Back'
          onPress={ () =>   this.props.navigation.navigate('Login') }
        />
      </View>

		);

	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  }
});

AppRegistry.registerComponent('Home', () => Home);
