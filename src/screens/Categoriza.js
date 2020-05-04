import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import {Picker} from '@react-native-community/picker';
class Categoriza extends Component {
    constructor(){
        super();
        this.state = {
            language : ''
        }
    }
    ver (){
        console.log(this.state.language)
    }
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.loremIpsum}>Categorize essa compra.</Text>
                <View style={styles.rect1}>
                    <View style={styles.loremIpsum2Row}>
                        <Text style={styles.loremIpsum2}>- 760 KaBuM</Text>
                        <View style={styles.cartaoOriginal1Stack}>
                            <Text style={styles.cartaoOriginal1}>Cartão Original</Text>
                            <Text style={styles.loremIpsum1}>16-03-2020</Text>
                        </View>
                    </View>
                </View>
               
                {this.ver()}
                <View style={styles.viewpicker}>
                    <Picker
                        selectedValue={this.state.language}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>
                        <Picker.Item label="Selecione" value="" />
                        <Picker.Item label="Investimento" value="Investimento" />
                        <Picker.Item label="Despesas" value="Despesas" />
                        <Picker.Item label="Entretenimento" value="Entretenimento" />
                    </Picker>
                </View>
                

                      
              
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
    height: 98,
    color: "rgba(255,255,255,1)",
    fontSize: 26,
    fontFamily: "trebuchet-ms-regular",
    marginTop: 60,
    marginLeft: 34
  },
  rect1: {
    width: 376,
    height: 52,
    backgroundColor: "rgba(255,0,0,1)",
    borderRadius: 11,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed",
    flexDirection: "row",
    marginLeft: 17
  },
  loremIpsum2: {
    width: 206,
    height: 28,
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    fontFamily: "roboto-regular",
    textAlign: "left"
  },
  cartaoOriginal1: {
    top: 0,
    left: 0,
    width: 131,
    height: 21,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 15,
    fontFamily: "roboto-regular",
    textAlign: "right"
  },
  loremIpsum1: {
    top: 20,
    width: 82,
    height: 16,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    right: 0,
    fontFamily: "roboto-regular",
    textAlign: "right"
  },
  cartaoOriginal1Stack: {
    width: 132,
    height: 36,
    marginLeft: 4
  },
  loremIpsum2Row: {
    height: 36,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 16,
    marginTop: 12
  },
  rect3: {
    width: 376,
    height: 52,
    backgroundColor: "rgba(255,86,86,1)",
    borderRadius: 11,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed",
    marginTop: 15,
    marginLeft: 17
  },
  loremIpsum6: {
    width: 206,
    height: 28,
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    fontFamily: "roboto-regular",
    textAlign: "left",
    marginTop: 1
  },
  cartaoOriginal3: {
    width: 131,
    height: 21,
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    fontFamily: "roboto-regular",
    textAlign: "right"
  },
  loremIpsum5: {
    width: 82,
    height: 16,
    color: "rgba(255,255,255,1)",
    fontFamily: "roboto-regular",
    textAlign: "right",
    alignSelf: "flex-end"
  },
  cartaoOriginal3Column: {
    width: 132,
    marginLeft: 4
  },
  loremIpsum6Row: {
    height: 37,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 16,
    marginRight: 18
  },
  rect4: {
    width: 376,
    height: 118,
    backgroundColor: "rgba(245,0,4,1)",
    borderRadius: 14,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed",
    marginTop: 49,
    marginLeft: 17
  },
  loremIpsum7: {
    width: 340,
    height: 69,
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 17,
    marginLeft: 17
  },
  viewpicker: {
    width: 376,
    height: 52,
    backgroundColor: "rgba(55,55,155,1)",
    borderRadius: 11,
    borderWidth: 0,
    borderStyle: "dashed",
    flexDirection: "row",
    marginLeft: 17,
    marginTop: 15
  },
  picker: {
    width: 376,
    height: 52,
    color: "rgba(255,255,255,1)",
    fontSize: 26,
    fontFamily: "trebuchet-ms-regular",
    
    marginLeft: 34
    }
});

export default Categoriza;
