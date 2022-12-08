import {useDispatch} from 'react-redux';
import {addUser} from '../redux/userSlice';

const useAddUser = newUser => {
  const dispatch = useDispatch();
  return () => {
    if (newUser) {
      dispatch(addUser(newUser));
    }
  };
};

export default useAddUser;
