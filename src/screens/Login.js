import React, { Component } from "react";
import { StackActions, NavigationActions } from "react-navigation";
import { StyleSheet, TextInput, View, Text, TouchableOpacity, AsyncStorage } from "react-native";
import api from '../services/api';
import { setUser, setToken } from '../services/auth';

class Login extends Component{
  state = {
    email: '', 
    password: '',
    error: ''
  }
  
  componentDidMount(){
    this.login();
  
  }
  handleEmailChange = (email) => {
    this.setState({ email });
  };
  
  handlePasswordChange = (password) => {
    this.setState({ password });
  };
  
  login = async() => {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState({ error: 'Preencha suas credenciais' }, () => false);
    } else {
      try {
        const response = await api.post('/login', {
          email: this.state.email,
          password: this.state.password,
        });
        try {
         

          if (response.data.error){
            this.setState({ error: 'E-mail ou Senha invalidas' });
          }
          await setToken(response.data.token)
          setUser(response.data._id)
          
        } catch (e) {
          console.log(e)
        }
        this.props.navigation.navigate("Home")
      }
      catch (_err) {
        console.log(_err)
        this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!' });
      }
    }
  };
  render(){
    return (
      <View style={styles.container}>
        <TextInput style={styles.email} 
          placeholder='E-mail' 
          value={this.state.email}
          onChangeText={this.handleEmailChange} />
        <TextInput style={styles.password} 
          secureTextEntry={true} 
          placeholder='Password'
          value={ this.state.password}
          onChangeText={this.handlePasswordChange} />
        <Text style={styles.criarContaNoNsff}>Login</Text>
        {this.state.error.length!== 0 && <Text style={styles.tip}>{this.state.error}</Text> }
    
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("CriarConta")}
          style={styles.button}>
          <View style={styles.rect4}>
            <Text style={styles.criarConta}>Criar conta</Text>
          </View>
        </TouchableOpacity>
          <Text style={styles.entrar} onPress={this.login} >Entrar</Text>
        
        
      </View>
    );

  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(5,9,25,1)"
  },
  tip:{
    color: "rgba(202,207,236,1)",
    fontSize: 18,
    fontFamily: "trebuchet-ms-regular",
    lineHeight: 26,
    textAlign: "center",
    marginTop: 200,
    marginLeft: 2
 },
  email: {
    color: "rgba(202,207,236,1)",
    fontSize: 24,
    fontFamily: "trebuchet-ms-regular",
    paddingLeft: 15,
    lineHeight: 24,
    marginTop: 146,
    width: 366,
    height: 54,
    backgroundColor: "rgba(12,13,66,1)",
    borderRadius: 14,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed",
    marginTop: 160,
    alignSelf: "center"
  },
  password: {
    color: "rgba(202,207,236,1)",
    fontSize: 24,
    fontFamily: "trebuchet-ms-regular",
    paddingLeft: 15,
    lineHeight: 24,
    width: 368,
    height: 54,
    backgroundColor: "rgba(12,13,66,1)",
    borderRadius: 14,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed",
    marginTop: 25,
    marginLeft: 21
  },

  button: {
    width: 102,
    height: 26,
    marginTop: 14,
    marginLeft: 280
  },
  rect4: {
    height: 35,
    backgroundColor: "rgba(12,13,66,1)",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed",
    marginTop: -12
  },
  criarConta: {
    width: 86,
    height: 26,
    color: "rgba(202,207,236,1)",
    fontSize: 16,
    fontFamily: "trebuchet-ms-regular",
    lineHeight: 24,
    textAlign: "center",
    marginLeft: 8,
    marginTop: 5
  },
  rect3: {
    backgroundColor: "rgba(12,13,66,1)",
    borderRadius: 14,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed",
    marginTop: 220,
    alignSelf: "center"
  },
  criarContaNoNsff: {
    color: "rgba(103,131,228,1)",
    fontSize: 35,
    fontFamily: "trebuchet-ms-regular",
    lineHeight: 45,
    textAlign: "center",
    marginTop: -240
  },
  entrar: {
    width: 150,
    height: 45,
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "trebuchet-ms-regular",
    lineHeight: 30,
    paddingTop: 8,
    textAlign: "center",
    borderRadius: 14,
    alignSelf: "center",
    backgroundColor: "rgba(12,13,66,1)"
  },
 
});

export default Login;
