import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";


export interface Props {
  points: number
}

const styles = StyleSheet.create({
  points: {
    width: 125,
    height: 20,
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 10,
    alignItems: 'center',
    textAlign:'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
});

export const PointsInfo = ({points} : Props) => {
  return (
    <TouchableOpacity style={styles.points} onFocus={()=> {
      console.log("elo");
    }}>
    <Text style={{ fontSize: 16, color: "#FFF"}}>
      {`${points}`}
    </Text>
  </TouchableOpacity>
  )
}
