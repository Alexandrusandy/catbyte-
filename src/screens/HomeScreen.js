import React, {useState} from 'react';
import List from './componenet/List/List';
import {useSelector} from 'react-redux';
import {Button, View} from 'react-native';
import ModalScreen from '../componenet/modal/Modal';
import useFetch from '../hooks/useFetch';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const reduxStore = useSelector(state => state.users);
  useFetch('https://dummyjson.com/users');

  return (
    <View>
      <List users={reduxStore.users} column={2} />
      <Button onPress={() => setModalVisible(true)} title="Add User" />
      <ModalScreen
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default HomeScreen;
