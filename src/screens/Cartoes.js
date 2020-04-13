import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
} from "react-native";

import api from '../services/api';
import {getUser} from '../services/auth';

class Cartoes extends Component {
  state = {
    user: '', //deverá trocar para email
    cards: {},
    arr:[1,2,3,4]
  }
  async componentDidMount(){
    let a;
    await getUser()
      .then(function(usr){
        if (usr !== null){
          a = usr
        }else{
          console.log(123123)
        }
      })
    this.setState({user:a})
    this.loadCard();
  
  }
  loadCard = async() => {
    const response = await api.get('/user/'.concat(this.state.user)); //pega o dado do usuario da api
    console.log(response.data.card)
    const cards = {
      name: response.data.card[0].name,
      number: response.data.card[0].number,
      valid_until: response.data.card[0].valid_until
    }
    console.log(cards)
    this.setState({cards}) //armazena o dados do usuario
  };

  render(){
    return (
      <View style={styles.container}>
        
        <View style={styles.rect}>
          <Text style={styles.nomeDoBanco}>{this.state.cards.name}</Text>
          <Text style={styles.loremIpsum}>{this.state.cards.number}</Text>
          <View style={styles.validoAteStack}>
            <Text style={styles.validoAte}>Válido até</Text>
            <Text style={styles.loremIpsum2}>{this.state.cards.valid_until}</Text>
          </View>
        </View>
        
        <Text style={styles.addSeuCartao}>Add seu cartão</Text>
        <StatusBar animated={false} barStyle="light-content"></StatusBar>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={styles.button}
        >
          <View style={styles.rect22Stack}>
            <View style={styles.rect22}></View>
            <View style={styles.rect3}></View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(5,9,25,1)"
  },
  rect: {
    width: 364,
    height: 217,
    backgroundColor: "rgba(12,13,66,1)",
    borderRadius: 9,
    marginTop: 39,
    marginLeft: 23
  },
  nomeDoBanco: {
    width: 196,
    height: 40,
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "roboto-regular",
    marginTop: 34,
    marginLeft: 32
  },
  loremIpsum: {
    width: 291,
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    fontFamily: "trebuchet-ms-regular",
    marginTop: 28,
    marginLeft: 37
  },
  validoAte: {
    top: 0,
    left: 0,
    width: 97,
    height: 24,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "roboto-regular"
  },
  loremIpsum2: {
    top: 0,
    left: 92,
    width: 90,
    height: 24,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "roboto-regular"
  },
  validoAteStack: {
    width: 182,
    height: 24,
    marginTop: 31,
    marginLeft: 37
  },
  addSeuCartao: {
    width: 190,
    height: 29,
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    fontFamily: "trebuchet-ms-regular",
    textAlign: "center",
    marginTop: 27,
    alignSelf: "center"
  },
  button: {
    width: 25,
    height: 25,
    marginTop: 351,
    marginLeft: 191
  },
  rect22: {
    top: 0,
    left: 10,
    width: 5,
    height: 25,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute"
  },
  rect3: {
    width: 25,
    height: 5,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    right: 0,
    bottom: 10
  },
  rect22Stack: {
    width: 25,
    height: 25
  }
});

export default Cartoes;
