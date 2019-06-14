import React from 'react';
import {Text,View} from 'react-native';

const Header = (props) => {
    const { text, header } = styles;
    return (
        <View style={header}>
          <Text style={styles.text}> {props.judul} </Text>
        </View>
    );
};
const styles = {
  header: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 20, 
    paddingTop: 20,
  },
  text: {
    fontSize:20,
    color: "#fff",
    textAlign: "center"
  }
};
export default Header;