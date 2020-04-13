import React, { Component } from "react";

import { StackActions, NavigationActions } from "react-navigation";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  AsyncStorage,
  TouchableHighlightBase
  
} from "react-native";
import MaterialButtonTransparentHamburger from "../components/MaterialButtonTransparentHamburger";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";

import api from '../services/api'
import { TOKEN_KEY, setToken, getUser } from "../services/auth";


class Home extends Component {
  state = {
    user: '', 
    docs: {
      name: '',
      email: '',
      balance: 0,
      expense: 0
    },
    refreshing:false
  }
  
  async componentDidMount(){
    let a;
    await getUser()
      .then(function(usr){
        if (usr !== null){
          a = usr
        }else{
          console.log(131928467)
        }
      })
    this.setState({user:a, docs:{}})
    const Token = AsyncStorage.getItem("@NSFF-APP:token")
    //console.log('token:',Token)
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
      ],
    });
    if (this.state.user !== ''){
      this.loadUser();
    }else{
      this.props.navigation.navigate("Login")
    }
  
  }
  loadUser = async() => {
    let docs = {}
    await api.get('/user/'.concat(this.state.user)) //pega o dado do usuario da api
    .then( function(response){
      if (response.data.profile[0] !== undefined ){
        docs = {
          name: response.data.name,
          email: response.data.email,
          balance: response.data.profile[0].balance,
          expense: response.data.profile[0].expense
        }
      }else {
        docs = {
          balance: 0,
          expense: 0,
        }
      }
    })
    .catch( function (err){
      console.log('erro',err)
    })
    this.setState({docs}) //armazena o dados do usuario
    
  };

  render (){
    return (
      <View style={styles.container}>
        <View style={styles.materialButtonTransparentHamburgerRow}>
          <MaterialButtonTransparentHamburger
            style={styles.materialButtonTransparentHamburger}
          ></MaterialButtonTransparentHamburger>
          <Text style={styles.nsff}>NSFF{this.state.refreshing}</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("InfoCont")}
          style={styles.button7}
        >
          <View style={styles.card1}>
            <Text style={styles.saldoDisponivel}>Saldo disponivel</Text>
            <Text style={styles.saldoDisponivelValor}>{this.state.docs.balance}</Text>
            <Text style={styles.verGastos}>Ver gastos</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.button6Row}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("InfoCont")}
            style={styles.button6}
          >
            <View style={styles.group41}>
              <View style={styles.group35}>
                <View style={styles.rect222}>
                  <Text style={styles.gastos4}>Gastos</Text>
                  <Text style={styles.gastos3}>- {this.state.docs.expense}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.group43}>
            <View style={styles.group5}>
              <View style={styles.rect22}>
                <Text style={styles.saldo2}>Saldo</Text>
                <Text style={styles.gastos2}>{this.state.docs.balance}</Text>
              </View>
            </View>
          </View>
        </View>
        <StatusBar
          animated={false}
          barStyle="light-content"
          hidden={false}
        ></StatusBar>
        <View style={styles.button8Row}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Untitled") }
            style={styles.button8}
          >
            <View style={styles.group6Stack}>
              <View style={styles.group6}>
                <View style={styles.rect2334}></View>
              </View>
              <FontAwesomeIcon
                name="question"
                style={styles.icon3}
              ></FontAwesomeIcon>
            </View>
          </TouchableOpacity>
          <View style={styles.group47}>
            <View style={styles.group46}>
              <View style={styles.group45}>
                <View style={styles.group33Stack}>
                  <View style={styles.group33}>
                    <View style={styles.rect232}></View>
                  </View>
                  <FontAwesomeIcon
                    name="money"
                    style={styles.icon2}
                  ></FontAwesomeIcon>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Cartoes")}
            style={styles.button5}
          >
            <View style={styles.button3Stack}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Untitled")}
                style={styles.button3}
              >
                <View style={styles.rect2332}></View>
              </TouchableOpacity>
              <EntypoIcon name="credit-card" style={styles.icon4}></EntypoIcon>
            </View>
          </TouchableOpacity>
        </View>
        
        <Image
        
          source={require("../assets/images/javascript-live-dynamic-charts-graphs.png")}
          resizeMode="stretch"
          style={styles.image}
        ></Image>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(5,9,25,1)"
  },
  materialButtonTransparentHamburger: {
    width: 60,
    height: 47
  },
  nsff: {
    width: 148,
    height: 58,
    color: "rgba(255,20,20,1)",
    fontSize: 30,
    fontFamily: "michroma-regular",
    textAlign: "center",
    marginLeft: 71,
    marginTop: 23
  },
  materialButtonTransparentHamburgerRow: {
    height: 81,
    flexDirection: "row",
    marginTop: 22,
    marginRight: 131,
    
  },
  button7: {
    width: 365,
    height: 191,
    marginTop: 1,
    alignSelf: "center"
  },
  card1: {
    backgroundColor: "rgba(12,13,66,1)",
    borderRadius: 9,
    flex: 1
  },
  saldoDisponivel: {
    width: 246,
    height: 30,
    color: "rgba(255,20,20,1)",
    fontSize: 30,
    fontFamily: "trebuchet-ms-regular",
    marginTop: 30,
    marginLeft: 38
  },
  saldoDisponivelValor: {
    width: 146,
    height: 25,
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    fontFamily: "trebuchet-ms-regular",
    marginTop: 11,
    marginLeft: 40
  },
  verGastos: {
    width: 221,
    height: 22,
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 42,
    marginLeft: 43
  },
  button6: {
    width: 173,
    height: 64
  },
  group41: {
    height: 64
  },
  group35: {
    height: 64
  },
  rect222: {
    width: 173,
    backgroundColor: "rgba(12,13,66,1)",
    borderRadius: 9,
    flex: 1,
    alignSelf: "center"
  },
  gastos4: {
    width: 129,
    height: 22,
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft: 16
  },
  gastos3: {
    width: 129,
    height: 22,
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 16
  },
  group43: {
    width: 174,
    height: 64,
    marginLeft: 16
  },
  group5: {
    height: 64,
    margin: 0
  },
  rect22: {
    width: 174,
    backgroundColor: "rgba(12,13,66,1)",
    borderRadius: 9,
    flex: 1,
    alignSelf: "center"
  },
  saldo2: {
    width: 104,
    height: 22,
    color: "rgba(255,255,255,1)",
    margin: 0,
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft: 18
  },
  gastos2: {
    width: 129,
    height: 22,
    color: "rgba(255,255,255,1)",
    margin: 0,
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 18
  },
  button6Row: {
    height: 64,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 24,
    marginRight: 23
  },
  button8: {
    width: 64,
    height: 49
  },
  group6: {
    top: 0,
    left: 0,
    width: 64,
    height: 49,
    position: "absolute",
    opacity: 0.54
  },
  rect2334: {
    width: 64,
    backgroundColor: "rgba(12,13,66,1)",
    borderRadius: 9,
    flex: 1,
    alignSelf: "center"
  },
  icon3: {
    top: 5,
    left: 19,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  group6Stack: {
    width: 64,
    height: 49
  },
  group47: {
    width: 64,
    height: 49,
    marginLeft: 62
  },
  group46: {
    width: 64,
    height: 49
  },
  group45: {
    width: 64,
    height: 49
  },
  group33: {
    top: 0,
    left: 0,
    width: 64,
    height: 49,
    position: "absolute",
    opacity: 0.55
  },
  rect232: {
    width: 64,
    backgroundColor: "rgba(12,13,66,1)",
    borderRadius: 9,
    flex: 1,
    alignSelf: "center"
  },
  icon2: {
    top: 5,
    left: 11,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 40,
    width: 43
  },
  group33Stack: {
    width: 64,
    height: 49
  },
  button5: {
    width: 72,
    height: 49,
    marginLeft: 53
  },
  button3: {
    top: 0,
    left: 0,
    width: 64,
    height: 49,
    position: "absolute",
    opacity: 0.53
  },
  rect2332: {
    width: 64,
    backgroundColor: "rgba(12,13,66,1)",
    borderRadius: 9,
    flex: 1,
    alignSelf: "center"
  },
  icon4: {
    top: 5,
    left: 12,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  button3Stack: {
    width: 64,
    height: 49
  },
  button8Row: {
    height: 49,
    flexDirection: "row",
    marginTop: 283,
    marginLeft: 47,
    marginRight: 48
  },
  image: {
    width: 364,
    height: 235,
    marginTop: -316,
    marginLeft: 24
  }
});

export default Home;
