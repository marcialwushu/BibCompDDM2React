import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native'
import firebase from 'firebase';
import config from './db';

import Header from './Header';
import Bar from './Bar';
import PhotoGrid from './PhotoGrid';

export default class Main extends React.Component {
  state = { currentUser: null }

  componentDidMount() {
    
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } 

    const { currentUser } = firebase.auth()

    this.setState({ currentUser })
  }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <Header />
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>

        <Button
          title = 'Back'
          onPress={ () =>   this.props.navigation.navigate('Login') }
        />
        <Bar />
        <PhotoGrid />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})