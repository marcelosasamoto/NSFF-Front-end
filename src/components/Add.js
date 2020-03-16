import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

function Add(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="add" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  }
});

export default Add;
