import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Merhaba from "./Merhaba";

//* ========== REACT NATIVE TEMEL KOMPONENTLERİ =============
//?- View componenti genel olarak div elemanına benzetilebilir
//?  ve bir container oluşturur. Ama içerisine yazı yazılamaz.
//?- Ekrana yazı bastirmak icin Text componenti kullanilir.
//?- Text'ler stil miraslarını sadece Text componentlerinden
//?  alabilir.
//* ===========================================================
// ? StatusBar telefondaki ustte olan durum cubugu. auto nasil ayarlandiysa oyle calisir.

export default function App() {
  return (
    <View style={stiller.kutu}>
      <Merhaba />
      <Text style={stiller.baslik}>Merhaba Mobile Devs</Text>
      <Text style={stiller.baslik}>React Native Dersimize Hos Geldiniz..</Text>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "blue" }}>
        Bu bir parent text'tir. {"\n"}
        <Text> Bu da bir child text'tir.</Text>
      </Text>
      <Merhaba />
      <StatusBar style="auto" />
    </View>
  );
}

//?- Stillendirmeler CSS’de olduğu gibi inline olarak verilebilir. */
//?  veya bir styleheet oluşturulabilir.
//?- Stylesheet export edilip sonra istenilen sayfaya import edilebilir.
//?- Property’lerde adlandırma olarak camelCase kullanılır.
//?- RN’de komponentleri ekrana hizalamak icin genelde flexbox
//?  yapisi kullanilir. Ekran, flex oranlarina gore paylastirilir.

// ! StyleSheet stillendirmek icin kullanilir. bircok stillendirme olusturup istedigimizi kullanabiliriz.
const stiller = StyleSheet.create({
  kutu: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",    
  },
  baslik: {
    color: "red",
    fontSize: 20,
    margin: 20,
  },
});
