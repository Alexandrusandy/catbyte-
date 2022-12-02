import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ListItem = ({item}) => {
  const navigation = useNavigation();
  const {image, username, age} = item;

  const handlePress = () => {
    navigation.navigate('User', {item: item});
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <ImageBackground
          source={{uri: image}}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.userDetails}>
            <Text style={styles.text}>{username},</Text>
            <Text style={styles.text}>{age}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    flex: 1,
    justifyContent: 'center',
    width: 150,
    height: 150,
    margin: 20,
    backgroundColor: 'white',
  },
  text: {
    color: 'Black',
    fontSize: 18,
    justifyContent: 'center',
    backgroundColor: '#fff',
    opacity: 0.7,
    padding: 5,
  },
  userDetails: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
  },
});

export default ListItem;
