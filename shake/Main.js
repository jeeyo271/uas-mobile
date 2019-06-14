import React, { Component } from "react";
import {View,Text,StyleSheet,TextInput,TouchableHighlight,ScrollView,Image} from "react-native";
import Header from "./Header";

class Main extends Component {
    render() {
        return (
            <View style={styles.containerMain}>
                <Header judul={"arisan shake"} />

                <View style={styles.box2}>
                    <Image source={require("./benefit.png")} style={styles.image} />
                </View>
                
              <View>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style}>
                <Text style={styles.Text}>Tambah</Text>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style}>
                <Text style={styles.Text}>Lihat</Text>
                </TouchableHighlight>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        margin: 5,
        flexDirection: "column",
        alignItems: "center",
        marginTop:10,
        backgroundColor: 'white',
        paddingBottom:60,
    },
    button2Style: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        backgroundColor: "orange",
        marginTop: 20,
        height: 60,
        width: 300,
        borderRadius: 5
    },
    box2: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 40,
        marginBottom:20,
        flexDirection: "column",
        alignItems: "center"
      },
    Text:{
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 18,
    },
    image: {
        justifyContent: 'center',
        alignItems: "center",
      },
});
export default Main;
