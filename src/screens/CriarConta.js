import React, { Component } from "react";
import { StyleSheet, ErrorMessage, TextInput, View, Text, TouchableOpacity } from "react-native";
import api from '../services/api'

class CriarConta extends Component {
  state = {
    name: '',
    email: '', 
    password: '',
    error: ''
  }
  
  componentDidMount(){
    this.createUser();
  }
  handleEmailChange = (email) => {
    this.setState({ email });
  };
  handleNameChange = (name) => {
    this.setState({ name });
  };
  handlePasswordChange = (password) => {
    this.setState({ password });
  };
  
  createUser = async() => {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState({ error: 'Preencha Nome, Email e senha para criar a conta!' }, () => false);
    } else {
      try {
        const response = await api.post('/create', {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        });
        this.props.navigation.navigate("Login")
      }
      catch (_err) {
        this.setState({ error: 'Email já utilizado' });
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
        <TextInput style={styles.name} 
          placeholder='Nome' 
          value={this.state.name}
          onChangeText={this.handleNameChange} />
        <TextInput style={styles.password} 
          secureTextEntry={true} 
          placeholder='Password'
          value={ this.state.password}
          onChangeText={this.handlePasswordChange} />

    {this.state.error.length!== 0 && <Text style={styles.tip}>{this.state.error}</Text> }
        <Text style={styles.criarContaNoNsff}>Criar conta no NSFF</Text>
        <TouchableOpacity
          onPress={this.createUser}
          style={styles.button}
        >
          <Text style={styles.criarMinhaConta}>Criar minha conta</Text>
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
  name: {
    color: "rgba(202,207,236,1)",
    fontSize: 24,
    fontFamily: "trebuchet-ms-regular",
    paddingLeft: 15,
    lineHeight: 24,
    width: 366,
    height: 54,
    backgroundColor: "rgba(12,13,66,1)",
    borderRadius: 14,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed",
    marginTop: -125,
    alignSelf: "center"
  },
  email: {
    color: "rgba(202,207,236,1)",
    fontSize: 24,
    fontFamily: "trebuchet-ms-regular",
    paddingLeft: 15,
    lineHeight: 24,
    width: 366,
    height: 54,
    backgroundColor: "rgba(12,13,66,1)",
    borderRadius: 14,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed",
    marginTop: 210,
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
    marginTop: 88,
    marginLeft: 21
  },
 tip:{
  color: "rgba(202,207,236,1)",
  fontSize: 18,
  fontFamily: "trebuchet-ms-regular",
  lineHeight: 26,
  textAlign: "center",
  marginTop: 10,
  marginLeft: 24
 },
  criarContaNoNsff: {
    color: "rgba(103,131,228,1)",
    fontSize: 35,
    fontFamily: "trebuchet-ms-regular",
    lineHeight: 45,
    textAlign: "center",
    marginTop: -330
  },
  button: {
    width: 195,
    height: 45,
    backgroundColor: "rgba(12,13,66,1)",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed",
    marginTop: 290,
    alignSelf: 'center'
  },
  criarMinhaConta: {
    width: 148,
    height: 26,
    color: "rgba(202,207,236,1)",
    fontSize: 18,
    fontFamily: "trebuchet-ms-regular",
    lineHeight: 26,
    textAlign: "center",
    marginTop: 10,
    marginLeft: 24
  }
});

export default CriarConta;
