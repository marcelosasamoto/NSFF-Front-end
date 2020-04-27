import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, ScrollView } from "react-native";

class InfoCont extends Component {

  render(){
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <Text style={styles.extrato}>Extrato</Text>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            
            <View style={styles.group6}>
              <View style={styles.group2}>
                <View style={styles.group7}>
                  <View style={styles.rect}>
                    <View style={styles.loremIpsum6Row}>
                      <Text style={styles.loremIpsum6}>-350 Americanas</Text>
                      <View style={styles.cartaoBbColumn}>
                        <Text style={styles.cartaoBb}>Cartão BB</Text>
                        <Text style={styles.loremIpsum5}>13-03-2020</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.group3}>
              <View style={styles.rect2}>
                <Text style={styles.loremIpsum2}>- 760 KaBuM</Text>
              </View>
            </View>
            <View style={styles.group4}>
              <View style={styles.rect3}>
                <Text style={styles.loremIpsum3}>+ 356 João</Text>
              </View>
            </View>
            <View style={styles.group5Stack}>
              <View style={styles.group5}>
                <View style={styles.rect4}>
                  <Text style={styles.loremIpsum4}>+ 879 Maria</Text>
                </View>
              </View>
              <Text style={styles.transferencia}>Transferência</Text>
            </View>
            <Text style={styles.loremIpsum62}>29-02-2020</Text>
            <View style={styles.rect5}>
              <Text style={styles.testeScrollview}>Teste scrollview</Text>
            </View>
            <View style={styles.rect6}>
              <Text style={styles.testeScroolview}>Teste scroolview</Text>
            </View>
            <View style={styles.rect7Stack}>
              <View style={styles.rect7}></View>
              <Text style={styles.fimDoScroolview}>Fim do scroolview</Text>
            </View>
          </ScrollView>
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
  extrato: {
    width: 121,
    height: 38,
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    fontFamily: "trebuchet-ms-regular",
    marginTop: 45,
    marginLeft: 25
  },
  scrollArea: {
    height: 635,
    marginTop: 22
  },
  scrollArea_contentContainerStyle: {
    height: 3176,
    flexDirection: "column"
  },
  group6: {
    width: 362,
    height: 53,
    alignSelf: "center"
  },
  group2: {
    flex: 1
  },
  group7: {
    width: 362,
    height: 53
  },
  rect: {
    height: 53,
    backgroundColor: "rgba(255,99,101,1)",
    borderRadius: 11,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed"
  },
  loremIpsum6: {
    width: 181,
    height: 40,
    color: "rgba(255,255,255,1)",
    justifyContent: "space-between",
    fontSize: 24,
    fontFamily: "trebuchet-ms-regular",
    textAlign: "left",
    marginTop: 4
  },
  cartaoBb: {
    width: 97,
    height: 20,
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "trebuchet-ms-regular",
    textAlign: "right",
    marginLeft: 12
  },
  loremIpsum5: {
    width: 110,
    height: 20,
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "trebuchet-ms-regular",
    textAlign: "right",
    marginTop: 2
  },
  cartaoBbColumn: {
    width: 110,
    marginLeft: 49,
    marginBottom: 2
  },
  loremIpsum6Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 9,
    marginRight: 13
  },
  group3: {
    width: 362,
    height: 53,
    marginTop: 8,
    marginLeft: 24
  },
  rect2: {
    width: 362,
    height: 53,
    backgroundColor: "rgba(251,46,46,1)",
    borderRadius: 11,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed"
  },
  loremIpsum2: {
    width: 181,
    height: 31,
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "trebuchet-ms-regular",
    marginTop: 14,
    marginLeft: 9
  },
  group4: {
    width: 362,
    height: 53,
    marginTop: 7,
    marginLeft: 24
  },
  rect3: {
    width: 362,
    height: 53,
    backgroundColor: "rgba(157,157,255,1)",
    borderRadius: 11,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed"
  },
  loremIpsum3: {
    width: 172,
    height: 37,
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "trebuchet-ms-regular",
    marginTop: 16,
    marginLeft: 9
  },
  group5: {
    top: 0,
    left: 0,
    width: 362,
    height: 11,
    position: "absolute"
  },
  rect4: {
    width: 362,
    height: 53,
    backgroundColor: "rgba(0,67,255,1)",
    borderRadius: 11,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed"
  },
  loremIpsum4: {
    width: 151,
    height: 40,
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "trebuchet-ms-regular",
    marginTop: 13,
    marginLeft: 9
  },
  transferencia: {
    top: 9,
    left: 247,
    width: 100,
    height: 18,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "trebuchet-ms-regular",
    textAlign: "right"
  },
  group5Stack: {
    width: 362,
    height: 27,
    marginTop: 7,
    marginLeft: 24
  },
  loremIpsum62: {
    width: 100,
    height: 26,
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "trebuchet-ms-regular",
    textAlign: "right",
    marginTop: 5,
    marginLeft: 271
  },
  rect5: {
    width: 362,
    height: 53,
    backgroundColor: "rgba(255,147,147,1)",
    marginTop: 479,
    marginLeft: 24
  },
  testeScrollview: {
    width: 161,
    height: 29,
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "trebuchet-ms-regular",
    marginTop: 17,
    marginLeft: 100
  },
  rect6: {
    width: 362,
    height: 53,
    backgroundColor: "rgba(86,135,255,1)",
    marginTop: 426,
    marginLeft: 24
  },
  testeScroolview: {
    width: 161,
    height: 37,
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "trebuchet-ms-regular",
    marginTop: 16,
    marginLeft: 100
  },
  rect7: {
    top: 0,
    left: 0,
    width: 410,
    height: 61,
    backgroundColor: "rgba(233,168,168,1)",
    position: "absolute"
  },
  fimDoScroolview: {
    top: 20,
    width: 131,
    height: 42,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "trebuchet-ms-regular",
    left: 139
  },
  rect7Stack: {
    width: 410,
    height: 62,
    marginTop: 1864
  }
});

export default InfoCont;
