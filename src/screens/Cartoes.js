import React, { Component, useState } from "react";
import {
  StyleSheet,
  Modal,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
} from "react-native";
import api from '../services/api';
import {getUser} from '../services/auth';
import { TextInput, FlatList } from "react-native-gesture-handler";


class Cartoes extends Component {
  state = {
    user: '', //deverá trocar para email
    cards: [],
    modalVisible: false,
    name: '',
    number: '',
    valid_until: '',
    cpf:'',
    error: '',
    send: false
  }
  async componentDidMount(){
    this.subs = this.props.navigation.addListener("didFocus",async () =>{
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
    });
  }

  componentWillUnmount(){
    this.subs.remove();
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  loadCard = async() => {
    const response = await api.get('/user/'.concat(this.state.user)); //pega o dado do usuario da api
    const cards = response.data.card
    console.log(1212,cards)
    this.setState({ cards }) //armazena o dados do usuario
    console.log(this.state.name,this.state.number,this.state.valid_until,this.state.cpf)
  };
 

  handleNameBank = (name) => {
    this.setState({ name });
  };
  handleNumberCard = (number) => {
    this.setState({ number });
  };
  handleValidUntil = (valid_until) => {
    this.setState({ valid_until });
  };
  handleCpf = (cpf) =>{
    this.setState({cpf})
  };
  confirm = (send) => {
    this.setState({ send: true });
    this.createCard()
    this.setModalVisible(!this.state.modalVisible);
  };
  createCard = async() => {
    
    console.log(111111,this.state.name,this.state.number,this.state.valid_until)
    if (this.state.name.length === 0 || this.state.number.length === 0 || this.state.valid_until.length === 0 || this.state.cpf.length === 0 ) {
      this.setState({ error: 'Preencha todos os dados!' }, () => false);
      console.log(10000,this.state.name.length ,this.state.number.length,this.state.valid_until.length,this.state.cpf.length);
    } else {
      try {
        console.log(22222,this.state.name, this.state.number, this.state.valid_until,this.state.cpf)
        const response = await api.post('/user/'.concat(this.state.user,'/addcard'), {
          card: {
            name: this.state.name,
            number: this.state.number,
            valid_until: this.state.valid_until,
            cpf:this.state.cpf
          }
        })
        console.log(2,response.data)
        const cards = response.data
        this.setState({cards})
      }
      catch (_err) {
        console.log('err',_err)
        
        this.setState({ error: 'cartao ja utilizado' });
      }
    }
  };

  renderItem = ({item}) =>(
    <View style={styles.rect}>
      <Text style={styles.nomeDoBanco}>{item.name}</Text>
      <Text style={styles.loremIpsum}>{item.number}</Text>
      <View style={styles.validoAteStack}>
        <Text style={styles.validoAte}>Válido até</Text>
        <Text style={styles.loremIpsum2}>{item.valid_until}</Text>
      </View>
    </View>
  )
  render(){

   const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <FlatList 
          data = {this.state.cards}
          keyExtractor={item =>item._id}
          renderItem={this.renderItem}        
        >

        </FlatList>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Preencha as informações bancários abaixo</Text>
              
                <TextInput style={styles.newbank} 
                  placeholder='Nome do banco' 
                  value={this.state.name}
                  onChangeText={this.handleNameBank} />
                <TextInput style={styles.newbank} 
                  placeholder='Numero do cartão' 
                  value={this.state.number}
                  onChangeText={this.handleNumberCard}
                  keyboardType = 'numeric' />
                <TextInput style={styles.newbank} 
                  placeholder='Valido até'
                  value={ this.state.valid_until}
                  onChangeText={this.handleValidUntil} 
                  keyboardType = 'numeric' />
                <TextInput style={styles.newbank} 
                  placeholder='Seu CPF'
                  value={ this.state.cpf}
                  onChangeText={this.handleCpf} 
                  keyboardType = 'numeric' />
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={this.confirm}>
                  <Text style={styles.textStyle} >Adicionar</Text>
                </TouchableHighlight>
              
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "red" }}
                  onPress={() => {this.setModalVisible(!modalVisible);}}>
                  <Text style={styles.textStyle} >Cancelar</Text>
                </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Adicionar cartão</Text>
        </TouchableHighlight>



        <StatusBar animated={false} barStyle="light-content"></StatusBar>
        
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
    marginTop: 25,
    alignSelf: 'center'
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
  },
  
  
  modalView: {
    margin: 20,
    marginTop: 40,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    width:200,
    backgroundColor: "#2196F3",
    borderRadius: 20,
    marginTop:20,
    alignSelf:'center',
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  newbank:{    
    height: 40,
    width:300,
    color: "black",
    fontSize: 22,
    fontFamily: "roboto-regular",
    marginTop: 34,
    alignSelf: 'center'
  },
  button: {
    width: 195,
    height: 45,
    backgroundColor: "rgba(12,13,66,1)",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed",
    marginTop: 20,
    alignSelf: 'center'
  },
});

export default Cartoes;
