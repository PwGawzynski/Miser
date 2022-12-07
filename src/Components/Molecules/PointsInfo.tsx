import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Green from '../../assets/green.svg';
import Red from '../../assets/red.svg';

export interface Props {
  points: number;
}

const styles = StyleSheet.create({
  points: {
    width: 125,
    height: 20,
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 10,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    fontSize: 13,
  },
});

export const PointsInfo = ({ points }: Props) => {
  const [newPoints, setNewPoints] = useState(points);
  return (
    <TouchableOpacity
      style={styles.points}
      onFocus={() => {
        console.log('elo');
      }}
      className={'flex flex-row items-center justify-center'}
    >
      <TouchableOpacity
        className={'z-100 p-2'}
        onPress={() => setNewPoints((prevState) => prevState - 1)}
      >
        <Red />
      </TouchableOpacity>
      <Text
        style={{ fontSize: 16, color: '#FFF', fontWeight: '500' }}
      >{`${newPoints}`}</Text>
      <TouchableOpacity
        className={'z-100 p-2'}
        onPress={() => setNewPoints((prevState) => prevState + 1)}
      >
        <Green />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
