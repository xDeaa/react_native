import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, ScrollView } from 'react-native';
import Search from './src/Tvshow';
import List from './src/Listshows';
const datas = require('./src/movies');

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {load:true};
  }

  componentDidMount(){
    this.getData();
  }

  getData = (search = "game") => {
    fetch('http://api.tvmaze.com/search/shows?q='+ search)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        load: false,
        source: responseJson,
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    if (this.state.load) {
      return (
        <View>
        <ActivityIndicator/>
        </View>
      );
    }
    return (
      <View style= {styles.container}>
      <Search searched= {this.getData}/>
      <ScrollView>
        <List data={this.state.source}/>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#282F3A',
  },
});
