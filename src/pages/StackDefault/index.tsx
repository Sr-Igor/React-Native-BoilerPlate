import { View, Text, Button } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { userLoginAction } from '../../redux/reducers/user/actions';
import { State } from '../../redux/reducers/user';

const StackDefault = (props: {
  navigation: { navigate: (arg0: string, arg1: { name: string }) => void };
}) => {
  const profile = useSelector((state: any) => state?.profile as State);
  const dispatch = useDispatch();

  const handleNavigate = () => {
    props.navigation.navigate('TabDefault', { name: 'TabDefault' });
  };

  return (
    <View>
      <Text>StackDefault</Text>
      <Text>{profile.user}</Text>
      <Text>{profile.email}</Text>

      <Button
        title="Login"
        onPress={() =>
          dispatch(
            userLoginAction({ user: 'UserLogged', email: 'user@email.com' })
          )
        }
      />
      <Button title="Go to TabDefault" onPress={handleNavigate} />
    </View>
  );
};

export default StackDefault;
