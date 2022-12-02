import {View, Text, FlatList, SafeAreaView, Button} from 'react-native';
import React from 'react';
import ListItem from '../ListItem/ListItem';

const List = ({users, column}) => {
  return (
    <View>
      <FlatList
        style={{height: '90%'}}
        data={users}
        renderItem={({item, index}) => <ListItem item={item} />}
        keyExtractor={item => item.id}
        numColumns={column}
      />
    </View>
  );
};

export default List;
