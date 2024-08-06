import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './style';

const Card = props => {
  const {title, text2, text} = props;
  console.log('hey');
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      <TouchableOpacity
        style={styles.button_container}
        onPress={() => Alert.alert('Bilgileri: ' + text2)}>
        <Text style={styles.button_title}>Bilgileri Göster</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
