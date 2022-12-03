import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {removeUser} from '../../../redux/userSlice';

const ListItem = ({item, index}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {image, username, age} = item;
  const backupImage =
    'https://img.freepik.com/free-vector/hand-drawn-caricature-illustration_23-2149871993.jpg?w=2000';
  const handlePress = () => {
    navigation.navigate('User', {item: item});
  };
  const removeItem = () => {
    dispatch(removeUser(index));
  };
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <ImageBackground
          source={{uri: image || backupImage}}
          resizeMode="cover"
          style={styles.image}>
          <TouchableOpacity onPress={removeItem} style={styles.iconAbsolute}>
            <Text style={styles.removeIcon}>X</Text>
          </TouchableOpacity>
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
    width: 150,
    height: 150,
    margin: 20,
    backgroundColor: 'white',
    position: 'relative',
    justifyContent: 'flex-end',
  },
  text: {
    color: 'Black',
    fontSize: 18,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,248 ,227,0.8)',
    padding: 5,
    zIndex: 10,
  },
  userDetails: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  removeIcon: {
    color: 'red',
    fontSize: 25,
  },
  iconAbsolute: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default ListItem;
