import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { Constants } from 'expo';
import * as firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyA4yw0ymWldznQoJpcN7nbpA9_peLnmYvw',
  authDomain: 'fbexample-d726f.firebaseapp.com',
  databaseURL: 'https://fbexample-d726f.firebaseio.com',
  projectId: 'fbexample-d726f',
  storageBucket: 'fbexample-d726f.appspot.com',
  messagingSenderId: '1020792193288',
};
!firebase.apps.length ? firebase.initializeApp(config) : null;

export default class App extends Component {
  state = {
    email: '',
    password: '',
    autenticati: true,
  };
  _autenticati = () => {
    /*var cred = firebase.auth.EmailAuthProvider.credential(
        email,
        password
    );*/
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password);
  };
  _registrati = () => {
    /*var cred = firebase.auth.EmailAuthProvider.credential(
        email,
        password
    );*/
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          {this.state.autenticati ? 'Autenticazione' : 'Registrazione'}
        </Text>
        <TextInput
          value={this.state.email}
          onChangeText={value => this.setState({ email: value })}
        />
        <TextInput
          value={this.state.password}
          onChangeText={value => this.setState({ password: value })}
        />
        <Button
          title="entra"
          onPress={() =>
            this.state.autenticati ? this._autenticati() : this._registrati()
          }
        />   
        <Button
          title={
            this.state.autenticati
              ? 'Non sei ancora registrato? Registrati'
              : 'Sei giá registrato? Autenticati'
          }
          onPress={() =>
            this.setState({ autenticati: !this.state.autenticati })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
