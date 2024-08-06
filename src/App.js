/* import React from 'react';
import {SafeAreaView, View, Button, Text, StyleSheet} from 'react-native'; //ekrana yazı yazdıracağımız için (Viev-> div, text -> p gibi düşünülebilir.)

const App = () => {
  const sayHello = label => {
    console.log('Merhabalar ' + label);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upper_container}>
        <Text>Ortalama Hesaplama</Text>
      </View>
      <View style={styles.center_container}>
        <Text>Harf Not Görme</Text>
      </View>
      <View style={styles.bottom_container}>
        <Text>Geçti/Kaldı</Text>
      </View>
      <Button title="Press Me" onPress={() => sayHello('Melike')} color="red" />
      <Button
        title="Dene"
        onPress={() => {
          console.log('Merhaba 2');
        }}
        color="lightcoral"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //  margin: 10, //dışarıdan boşluk
    // padding: 10, //içeriden boşluk
    // borderRadius: 5, //kenarları yumuşatma
    flex: 10,
    justifyContent: 'center',
    //alignItems: 'center', dikey sırayla merkez
  },
  upper_container: {
    backgroundColor: 'aqua',
    flex: 1,
  },
  bottom_container: {
    backgroundColor: 'purple',
    flex: 1,
  },
  center_container: {
    backgroundColor: 'yellow',
    flex: 2,
  },
});
export default App;
*/

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Card from './components/Card/Card.js';
function App() {
  return (
    <SafeAreaView style={styles.contanier}>
      <Card
        title="Berat Yükselen"
        text="24.02.1999-Yazılım Mühendisliği"
        text2="Okul: Beykoz Üniversitesi
        Sınıf:4
        Adres:Sarıyer/İstanbul"
      />
      <Card
        title="Melike Aydoğduoğlu"
        text="26.07.2003-Yazılım Mühendisliği"
        text2="Okul: Beykoz Üniversitesi
        Sınıf:3 
        Adres:Ataşehir/İstanbul"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: '#40e0d0',
  },
});

export default App;
