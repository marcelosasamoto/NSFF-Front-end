import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar,ScrollView, AsyncStorage } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

import api from '../services/api'
import { TOKEN_KEY, setToken, getUser } from "../services/auth";
import { chartDATA } from "../components/ChartHome";


class Untitled extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: '', 
      doc: ''
    }
  }

  async componentDidMount(){
    
    this.subs = this.props.navigation.addListener("didFocus",async () =>{
      let a;
      await getUser()
        .then(function(usr){
          if (usr !== null){
            a = usr
            console.log(a)
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
          NavigationActions.navigate({ routeName: 'Dicas' }),
        ],
      });
      if (this.state.user !== ''){
        this.loadDicas();
      }else{
        this.props.navigation.navigate("Login")
      }
    })
  }
  componentWillUnmount(){
    this.subs.remove();
  }
  
  
  loadDicas = async() => {
    let doc = {}
    console.log('sdsadadaa')
    await api.get('/user/'.concat(this.state.user,'/dicas')) //pega o dado do usuario da api
    .then( function(response){
      console.log(response.data)
      doc = response.data
    })
    .catch( function (err){
      console.log('erro',err)
    })
    this.setState({doc}) //armazena o dados do usuario
    
  };


  render (){
    return (
      <View style={styles.container}>
        <Text style={styles.loremIpsum}>Dicas:</Text>
        <ScrollView>
          <Text style={styles.dicatxt}>
            {this.state.doc}
          </Text>
        </ScrollView>
        
        
        
        
        <StatusBar barStyle="light-content"></StatusBar>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(5,9,25,1)"
  },
  loremIpsum: {
    width: 301,
    height: 60,
    color: "rgba(255,255,255,1)",
    fontSize: 26,
    fontFamily: "trebuchet-ms-regular",
    marginTop: 63,
    marginLeft: 34
  },
  dicatxt:{
    color:'white',
    marginLeft:10,
    marginTop:0,
    fontSize: 19,
    fontFamily: "trebuchet-ms-regular",
  }
});

export default Untitled;
