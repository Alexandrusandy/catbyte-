import React, {useState} from 'react';
import {SafeAreaView, TextInput, Modal, StyleSheet, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {addUser} from '../../redux/userSlice';

const ModalScreen = ({modalVisible, setModalVisible}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const handlePress = () => {
    let newUser = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      image: image,
      address: '',
    };
    dispatch(addUser(newUser));
    setModalVisible(false);
  };
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView>
        <TextInput
          placeholder={'image'}
          value={image}
          onChangeText={setImage}
          style={styles.contactInput}
        />
        <TextInput
          placeholder={'First Name'}
          value={firstName}
          onChangeText={setFirstName}
          style={styles.contactInput}
        />
        <TextInput
          placeholder={'Last Name'}
          value={lastName}
          onChangeText={setLastName}
          style={styles.contactInput}
        />
        <TextInput
          placeholder={'age'}
          value={age}
          onChangeText={setAge}
          style={styles.contactInput}
        />
        <Button onPress={handlePress} title="Save User" />
        <Button
          title="Cancel "
          style={{color: 'red'}}
          onPress={() => setModalVisible(value => !value)}
        />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contactInput: {
    borderRadius: 5,
    marginHorizontal: '15%',
    padding: 10,
    borderColor: 'black',
    borderWidth: 2,
    margin: 5,
  },
});

export default ModalScreen;
