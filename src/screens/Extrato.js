import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, FlatList } from "react-native";
import api from '../services/api';
import {getUser} from '../services/auth';
import {Picker} from '@react-native-community/picker';

class InfoCont extends Component {
  state = {
    user:'',
    idbank:'',
    transacao:[],
    categoria:{
      Investimento:[],
      Despesas:[],
      Entretenimento:[]
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
    this.loadtransactions();
    });
  }
  componentWillUnmount(){
    this.subs.remove();
  }
  loadtransactions = async() => {
    await api.get('/user/'.concat(this.state.user,'/extrato'))
    .then( s => {
      this.setState({transacao:s.data})
    })
    .catch(s=>{
      console.log('errr',s)
    })
    
    
  };
  

  changePicker(value,index,id){
      //console.log(1111,value,index,id)
      let a = this.state.transacao
      for (var i=0;i<a.length;i++){
        //console.log(a[i].valor)
        if (a[i]._id == id){
          a[i].categoria = value
        }
      }
      this.setState({categoria:a})
     
  }
  renderItem = ({item}) =>(
    
    <View style={styles.container2}>
        <View style={styles.rect}>
          <Text style={styles.valor}>{item.valor}</Text>
          <Text style={styles.descricao}>{item.descricao}</Text>
        </View>
        <Text style={styles.data}>{item.data.slice(0,10)}</Text>
        <View style={styles.viewpicker}>
          <Picker
              selectedValue={item.categoria}
              style={styles.picker}
              onValueChange={(itemValue,itemIndex) =>
                  this.changePicker(itemValue,itemIndex,item._id)
              }>
              <Picker.Item label="Não necessario" value="Entretenimento" />
              <Picker.Item label="Necessario" value="Despesas" />
              <Picker.Item label="Útil" value="Investimento" />
          </Picker>
        </View>
    </View>
  )
  render(){
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <Text style={styles.extrato}>Extrato</Text>



        <FlatList 
          data = {this.state.transacao}
          keyExtractor={item =>item._id}
          renderItem={this.renderItem}
        >

        </FlatList>
        

      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(5,9,25,1)"
  },
  container2:{
    flex:1,
    alignSelf:'center'
  },
  extrato: {
    width: 121,
    height: 40,
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    fontFamily: "trebuchet-ms-regular",
    marginTop: 55,
    marginLeft: 25
  },

  
  rect:{
    marginTop:7,
    flexDirection:'row',
    width: 370,
    backgroundColor: "rgba(0,67,255,1)",
    borderRadius: 11,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed"
  },
  data: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "trebuchet-ms-regular",
    textAlign: "right",
    marginRight:10,
    marginTop:-20
  },
  descricao:{
    width:300,
    color:'white',
    fontSize:22,
    marginLeft:10,
    marginTop:10
  },
  valor:{
    color:'white',
    height:40,
    fontSize:22,
    marginTop:10,
    marginLeft:15
  },
  viewpicker: {
    width: 180,
    //backgroundColor:'rgba(0,0,230,0.1)',
    alignSelf:'flex-end',
    marginTop: -65,
    
    
  },
  picker: {
    color: "rgba(255,255,255,1)",
    width:180,
    alignSelf:'flex-end',
    height:65,
    fontSize: 26,
    fontFamily: "trebuchet-ms-regular",
    
    }
  
});

export default InfoCont;
