import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>Voce deveria gastar menos com KaBuM</Text>
      <View style={styles.group}>
        <View style={styles.rect1}>
          <View style={styles.loremIpsum2Row}>
            <Text style={styles.loremIpsum2}>- 760 KaBuM</Text>
            <View style={styles.cartaoOriginal1Column}>
              <Text style={styles.cartaoOriginal1}>Cartão Original</Text>
              <Text style={styles.loremIpsum1}>16-03-2020</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.group2}>
        <View style={styles.rect3}>
          <View style={styles.loremIpsum6Row}>
            <Text style={styles.loremIpsum6}>- 338 KaBuM</Text>
            <View style={styles.cartaoOriginal3Column}>
              <Text style={styles.cartaoOriginal3}>Cartão Original</Text>
              <Text style={styles.loremIpsum5}>10-03-2020</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rect4}>
        <Text style={styles.loremIpsum7}>
          Sua despesa com a Kabum nesse mês foi 1098 reais.{"\n"} Not Stonks!
        </Text>
      </View>
      <StatusBar barStyle="light-content"></StatusBar>
    </View>
  );
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
    marginTop: 83,
    marginLeft: 34
  },
  group: {
    width: 376,
    height: 52,
    marginLeft: 17
  },
  rect1: {
    height: 52,
    backgroundColor: "rgba(255,0,0,1)",
    borderRadius: 11,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed"
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
    width: 131,
    height: 13,
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    fontFamily: "roboto-regular",
    textAlign: "right"
  },
  loremIpsum1: {
    width: 82,
    height: 16,
    color: "rgba(255,255,255,1)",
    fontFamily: "roboto-regular",
    textAlign: "right",
    alignSelf: "flex-end",
    marginTop: 7
  },
  cartaoOriginal1Column: {
    width: 132,
    marginLeft: 4
  },
  loremIpsum2Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 16,
    marginRight: 18
  },
  group2: {
    width: 376,
    height: 52,
    marginTop: 15,
    marginLeft: 17
  },
  rect3: {
    backgroundColor: "rgba(255,86,86,1)",
    borderRadius: 11,
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed",
    flex: 1
  },
  loremIpsum6: {
    width: 206,
    height: 28,
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    fontFamily: "roboto-regular",
    textAlign: "left"
  },
  cartaoOriginal3: {
    width: 131,
    height: 13,
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
    alignSelf: "flex-end",
    marginTop: 7
  },
  cartaoOriginal3Column: {
    width: 132,
    marginLeft: 4
  },
  loremIpsum6Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 12,
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
  }
});

export default Untitled;
