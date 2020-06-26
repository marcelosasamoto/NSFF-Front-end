import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";



function Untitled(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>Dicas:</Text>
      <Text style={styles.dicatxt}>

        Você depositou 1 vezes neste período! tendo depositado um total de 200 com média de R$200.0 por depósito!
        Você gastou um total de R$650 neste período! Com um total de 3 transações, sendo:
        {"\n"}- 1 em entretenimento, compondo 38% do total gasto, com média de R$250.0 por transação.
        {"\n"}- 1 em investimentos, compondo 31% do total gasto, com média de R$200.0 por transação.
        {"\n"}- 1 em despesas, compondo 31% do total gasto, com média de R$200.0 por transação.
        {"\n\n"}
        Suas transações foram centradas nas seguintes empresas/despesas:
        Conta de Luz (Total gasto R$200, 1 pagamentos com média de R$200.0 por transação)
        Líder (Total gasto R$450, 2 pagamentos com média de R$225.0 por transação)
        {"\n\n"}

        Você parece estar indo bem! caso continuar assim não precisará de dicas!
      </Text>
      
      
      
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
    height: 60,
    color: "rgba(255,255,255,1)",
    fontSize: 26,
    fontFamily: "trebuchet-ms-regular",
    marginTop: 83,
    marginLeft: 34
  },
  dicatxt:{
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    alignSelf: 'center',
    marginLeft: 20,
    marginRight: 10
  
  }
});

export default Untitled;
