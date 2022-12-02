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
  const backupImage =
    'https://img.freepik.com/free-vector/hand-drawn-caricature-illustration_23-2149871993.jpg?w=2000';
  const handlePress = () => {
    navigation.navigate('User', {item: item});
  };
  return (
    <View>
      <ImageBackground
        source={{uri: image || backupImage}}
        resizeMode="cover"
        style={styles.image}>
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.userDetails}>
            <Text style={styles.text}>{username},</Text>
            <Text style={styles.text}>{age}</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
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
    position: 'relative',
  },
  text: {
    color: 'Black',
    fontSize: 18,
    justifyContent: 'center',
    backgroundColor: '#fff',
    opacity: 0.7,
    padding: 5,
    // backgroundColor:'red',
    zIndex: 10,
  },
  userDetails: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
});

export default ListItem;
