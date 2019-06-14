import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,} from "react-native";
import Header from "./Header";
    
class Penjualan extends Component {
    constructor(props) {
        super(props);
        this.state = {nama: '',alamat: '',nohp: '',
        };
    }
    render() {
        return (
            <View style={styles.containerMain}>
              <Header judul={"arisan shake"} />

              <View style={styles.box1}>
                <Text>Nama :    </Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={nama => this.setState({ nama })}
                />
              </View>
              <View style={styles.box1}>
                <Text>Alamat :  </Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={alamat => this.setState({ alamat })}
                />
              </View>
              <View style={styles.box2}>
                <Text>No. Hp :  </Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={alamat => this.setState({ nohp })}
                />
                </View>
                
            </View>
        );
    }
}
// define your styles
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
  buttonText: {
    textAlign: "center",
    height: 40,
    width: "100%",
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 20
  },
  buttonStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    marginTop: 10,
    marginBottom: 10,
    height: 40,
    width: "100%",
    borderRadius: 5,
  },
  box1: {
    flex: 0.5,
    width: "90%",
    paddingTop: 20,
    marginTop: 10,
    marginLeft: 2,
    justifyContent: "center",
    flexDirection: "row"
  },
  box2: {
    flex: 0.4,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 200,
    flexDirection: "row"
  },
  textInput: {
    width: 170,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#880E4F"
  },
});
export default Penjualan;