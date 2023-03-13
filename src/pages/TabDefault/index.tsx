import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { userLogoutAction } from '../../redux/reducers/user/actions';
import { State } from '../../redux/reducers/user';

const StackDefault = () => {
  const profile = useSelector((state: any) => state?.profile as State);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>TabDefault</Text>
      <Text>{profile.user}</Text>
      <Text>{profile.email}</Text>
      <Button title="Logout" onPress={() => dispatch(userLogoutAction())} />
    </View>
  );
};

export default StackDefault;
