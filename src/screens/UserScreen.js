import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const UserScreen = props => {

  const {
    image,
    firstName,
    lastName,
    age,

    address: {address, postalCode, state},
  } = props.route.params.item;
  const backupImage =
    'https://img.freepik.com/free-vector/hand-drawn-caricature-illustration_23-2149871993.jpg?w=2000';
  return (
    <View>
      <Image source={{uri: image || backupImage}} style={styles.image}></Image>
      <View style={styles.nameContainer}>
        <Text style={styles.title}>{firstName} </Text>
        <Text style={styles.title}>{lastName} </Text>
        <Text style={styles.title}>{age} years</Text>
      </View>
      {address && (
        <View style={{margin: 10}}>
          <Text style={styles.subtitle}>Company Details:</Text>
          <Text style={styles.subtitle}>
            Adress: {address} ,postalCode: {postalCode} ,state: {state}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {width: '100%', height: 200, resizeMode: 'contain'},
  nameContainer: {flexDirection: 'row', justifyContent: 'center', padding: 10},
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 16,
  },
});

export default UserScreen;
