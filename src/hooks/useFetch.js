import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setUsers} from '../redux/userSlice';

const useFetch = url => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(resJson => dispatch(setUsers(resJson.users)));
  }, [dispatch, url]);

  return;
};

export default useFetch;
