import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, TextInput} from 'react-native';

export default class Search extends React.Component {

  constructor(props){
    super(props);
  }

  _onPressButton = () => {
    // this.props.searched(this.search);
    this.props.searched(this.search);
  }

  getSearch = (value) => {
    this.search = value;
  }

  render() {
    return (

        <View style={styles.between}>
          <TextInput
          style={{ width: 250, height: 40, borderColor: 'gray', borderWidth: 1 , textAlign: 'center', color: 'white'}}
          placeholder = " Name of the movie"
          onChangeText = {this.getSearch}
          />
          <Button
            onPress={this._onPressButton}
            title="Search"
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  between: {
    margin: 40,
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-between'

  }
});
