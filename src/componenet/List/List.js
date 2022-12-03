import {View, Text, FlatList} from 'react-native';
import React from 'react';
import ListItem from '../ListItem/ListItem';

const List = ({users, column}) => {
  const footer = () => {
    return <Text>footer</Text>;
  };

  return (
    <View>
      <FlatList
        style={{height: '90%'}}
        data={users}
        renderItem={({item, index}) => <ListItem item={item} />}
        keyExtractor={item => item.id}
        numColumns={column}
        ListFooterComponent={footer}
      />
    </View>
  );
};

export default List;
