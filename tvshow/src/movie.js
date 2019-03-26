import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


export default class Movie extends React.Component {
  render() {
    return (
        <View style = {styles.between}>
          <View style= {styles.img}>
            <Image
            style = {{height:50 , width: 50}}
            source= {{uri: this.props.data.show.image.medium}}/>
          </View>
          <View style = {styles.info}>
            <Text style={styles.text}> Title : {this.props.data.show.name}</Text>
            <Text style={styles.text}> Genre : {this.props.data.show.genres}</Text>
          </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  between: {
    margin: 15,
    flexDirection: 'row',
  },
  info: {
    flex: 6,
    marginStart: 5,
    alignItems: 'flex-start',
  },
  img: {
    flex: 3,
    alignItems: 'flex-end'
  },
  text: {
    color: 'white'
  }
});
