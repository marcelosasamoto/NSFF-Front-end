import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, FlatList } from "react-native";
import api from '../services/api';
import {getUser} from '../services/auth';
import {Picker} from '@react-native-community/picker';
import axios from "axios";
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
  
  updateCategory (){

  }

  changePicker(value,index,id){
      console.log(1111,value,index,id)
      let a = this.state.transacao
      for (var i=0;i<a.length;i++){
        //console.log(a[i].valor)
        if (a[i]._id == id){
          a[i].categoria = value
          console.log('user:',this.state.user,value,id,)
          this.setState({categoria:a.Despesas})

          axios.post('http://192.168.0.117:3200/api/user/categorizar',{
            cpf:10000000000,      //OLHA AQUI TEM Q MEXER DEPOIS
            categoria:value,
            id_fatura:id
          })
          .then(s=>{
            console.log('post mandado')
          })
          .catch(err=>{
            console.log('erro in postapi',err)
          })
        }
      }
     
  }
  enablePicker(tipo){
    if(tipo =='deposito'){
      return false
    }
    return true
  }
  enableshowpicker(tipo,categoria){
    if (tipo == 'deposito'){
      return 'deposito'
    }
    return categoria
  }
  enableP(tipo,cat){
    if (tipo == 'deposito'){
      return <Picker.Item label="" value="deposito" />
    }
    var a=[]
    a.push(<Picker.Item key='entretenimento' label="Entretenimento" value="entretenimento" />,
    <Picker.Item key='despesas' label="Despesas" value="despesas" />,
    <Picker.Item key='investimento' label="Investimento" value="investimento" />)
    return  (a)
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
          
              enabled={this.enablePicker(item.tipo)}
              selectedValue={this.enableshowpicker(item.tipo,item.categoria)}
              style={styles.picker}
              onValueChange={(itemValue,itemIndex) =>
                  this.changePicker(itemValue,itemIndex,item._id)
              }>
                {this.enableP(item.tipo)}
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
