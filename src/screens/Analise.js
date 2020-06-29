import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar, FlatList } from "react-native";
import api from '../services/api';
import {getUser} from '../services/auth';

class Categoriza extends Component {
    constructor(){
        super();
        this.state = {
            analiseG : []
        }
    }
    async componentDidMount(){
      this.subs = this.props.navigation.addListener("didFocus",async () =>{
      let a;
      await getUser()
        .then(function(usr){
          if (usr !== null){
            a = usr
          }else{
            console.log('err cDidMount')
          }
        })
      this.setState({user:a})
      this.loadAnalise();
      });
    }
    componentWillUnmount(){
      this.subs.remove();
    }
    loadAnalise = async() => {
      await api.get('/user/'.concat(this.state.user,'/analise'))
      .then( s => {
        this.setState({analiseG:s.data.message})
        console.log(this.state.analiseG)
      })
      .catch(s=>{
        console.log('errr',s)
      })
      
      
    };

    

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.loremIpsum}>Analise de Gastos</Text>
                
                <Text style={styles.message}>{this.state.analiseG}</Text>
                
                      
              
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
    color: "rgba(255,255,255,1)",
    fontSize: 26,
    fontFamily: "trebuchet-ms-regular",
    marginTop: 60,
    marginLeft: 34
  },
  message:{
    color:'white',
    marginLeft:10,
    marginTop:25,
    fontSize: 20,
    fontFamily: "trebuchet-ms-regular",
  }
});

export default Categoriza;
