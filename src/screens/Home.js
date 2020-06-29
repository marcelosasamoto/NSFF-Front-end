import React, { Component } from "react";

import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import { StackActions, NavigationActions } from "react-navigation";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  
} from "react-native";
import {Picker} from '@react-native-community/picker';
import MaterialButtonTransparentHamburger from "../components/MaterialButtonTransparentHamburger";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";

import api from '../services/api'
import { TOKEN_KEY, setToken, getUser } from "../services/auth";
import { chartDATA } from "../components/ChartHome";


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: '', 
      saldo:0,
      analiseG:'',
      graph: [],
      chartSelect:'Anual',
      refreshing:false,
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
        //this.loadGraph('Anual')
        this.loadAnalise();
      }else{
        this.props.navigation.navigate("Login")
      }
    })
  }
  componentWillUnmount(){
    this.subs.remove();
  }
  
  
  loadUser = async() => {
    let saldo = 0
    await api.get('/user/'.concat(this.state.user,'/saldo')) //pega o dado do usuario da api
    .then( function(response){
      if (response.data.saldo !== undefined ){
        saldo = response.data.saldo
      }
    })
    .catch( function (err){
      console.log('erro',err)
    })
    this.setState({saldo}) //armazena o dados do usuario
    
  };
  handleSelectChange = (a) => {

    this.setState({ chartSelect : a});
    this.loadGraph(a)
    this.renderGraph()
    console.log('mudar periodo', this.state.chartSelect)
  };
  loadGraph = async(a) =>{
    console.log('loadG char',this.state.chartSelect)
    
    let doc = []
    try {
      await api.post('/user/'.concat(this.state.user.concat('/graph')), {
        select: a,
      })
      .then(function(response){
        doc =response.data
      })
    }
    catch (_err) {
      console.log(2111,_err)
    }
    this.setState({graph:doc})
  }

  loadAnalise = async() => {
    await api.get('/user/'.concat(this.state.user,'/analise'))
    .then( s => {
      this.setState({analiseG:s.data.message})
      
      
      //console.log(this.state.analiseG)
    })
    .catch(s=>{
      console.log('errr',s)
    })
    
    
  };

  renderGraph = () =>(
    <View>
      
      <View style={styles.chart}>
        <VictoryChart >
          <VictoryBar
          data={this.state.graph}
          />
        </VictoryChart>
      </View> 
        <Picker
            selectedValue={this.state.chartSelect}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
                this.handleSelectChange(itemValue)
            }>
            <Picker.Item label="Anual" value="Anual" />
            <Picker.Item label="Mensal" value="Mensal" />
        </Picker>
    </View>
    
  )

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
          onPress={() => this.props.navigation.navigate("Extrato")}
          style={styles.button7}
        >
          <View style={styles.card1}>
            <Text style={styles.saldoDisponivel}>Saldo disponivel</Text>
            <Text style={styles.saldoDisponivelValor}>{this.state.saldo}</Text>
            <Text style={styles.verGastos}>Ver gastos</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.button6Row}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Analise")}
            style={styles.button6}
          >
            <View style={styles.group41}>
              <View style={styles.group35}>
                <View style={styles.rect222}>
                  <Text style={styles.gastos4}>Ver analise</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Dica")}
            style={styles.button6}
          >
          <View style={styles.group43}>
          <View style={styles.group5}>
            <View style={styles.rect22}>
              <Text style={styles.saldo2}>Ver dicas</Text>
            </View>
          </View>
        </View>

          </TouchableOpacity>
            
        </View>
        <StatusBar
          animated={false}
          barStyle="light-content"
          hidden={false}
        ></StatusBar>
        
        
      {/*this.renderGraph()*/}
      <View style={styles.tip}>
        
    <Text style={styles.txt}>{this.state.analiseG}</Text>

      </View>
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
  tip:{
    backgroundColor:"white",
    marginTop:20,
    height:300,
    width:365,
    backgroundColor: "rgba(12,13,66,1)",
    borderRadius: 9,
    alignSelf:'center'
  },
  txt:{
    color:"white",
    marginTop:15,
    fontSize:19, 
    marginLeft:10,
    fontFamily: "trebuchet-ms-regular",
    textAlign:'auto',
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
    marginTop: 0,
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
  },
  chart:{
    marginTop:-300, 
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor:"white",
    borderRadius: 9,
  },
  picker: {
    marginTop: -300,
    width: 120,
    fontSize: 26,
    alignSelf:'flex-end',
    fontFamily: "trebuchet-ms-regular",
    borderRadius:9,
    }
});

export default Home;
