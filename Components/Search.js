import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native'
import films from '../Helpers/filmData'
import FilmItem from './FilmItem'

class Search extends Component {
  render(){
    return(
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder='Titre du Film' />
        <Button title='Rechercher' onPress={() => {}} />
        <FlatList
          data={films}
          keyExtractor= {(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item}/>}
        />
      </View>
    )
  }
}

export default Search

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})
