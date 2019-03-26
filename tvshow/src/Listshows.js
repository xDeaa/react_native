import React from 'react';
import { StyleSheet, Text, View, FlatList , ScrollView} from 'react-native';
import Movie from './movie';

export default class List extends React.Component {
  render() {
    return (

        <FlatList
        data={this.props.data}
        keyExtractor={(item,index) => `${index}`}
        renderItem={({item}) => <Movie data={item}/>}
        />
    );
  }
}
