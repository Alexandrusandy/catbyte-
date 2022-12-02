import React, {useEffect, useState} from 'react';
import List from './componenet/List/List';
import {useDispatch, useSelector} from 'react-redux';
import {setUsers} from '../redux/userSlice';
import {Button, View} from 'react-native';
import ModalScreen from '../componenet/modal/Modal';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const reduxStore = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    getData([]);
  }, []);

  const getData = () => {
    const apiUrl = 'https://dummyjson.com/users';
    fetch(apiUrl)
      .then(res => res.json())
      .then(resJson => dispatch(setUsers(resJson.users)))
      .catch(error => {
        console.error('Error:', error);
      });
  };

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
