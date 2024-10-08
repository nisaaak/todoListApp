import {
  View,
  Pressable,
  TouchableOpacity
} from 'react-native';
import Text from '../../atoms/Text'
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import { saveTodo } from '../../../store/actions/todoAction';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { IRootState } from 'store/reducers';
import styles from './styles';
import { IForm } from 'interfaces/IForm';

type Props = IForm & React.ComponentProps<typeof TouchableOpacity>

type ReduxList = {
  todoData: IRootState;
};

const CardTodo: React.FC<Props> = ({
  title,
  content,
  isDone,
  id,
}) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation()
  const dispatch = useDispatch();
  const todo = useSelector<ReduxList>(state => state.todoData.todo) as IForm[]

  const onpressCheck = () => {
    let tempTodo = todo
    tempTodo.filter(e => e.id === id)[0].isDone = !isDone
    dispatch(saveTodo(tempTodo));
    console.log('checkk', tempTodo)
  }

  const onPressCard = () => {
    navigation.navigate('Edit', {
      title,
      content,
      isDone,
      id
    })
  }

  const iconstyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scaleY: withSpring(isDone ? 1 : -1, {
            damping: 20,
            stiffness: 100
          })
        }
      ]
    }
  })

  return (
    <TouchableOpacity
      onPress={onPressCard}
      style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text fontSize={20} color={'#8f96bd'}>
          {title}
        </Text>
        <Text color={'#8f96bd'}>
          {content}
        </Text>
      </View>
      <Pressable
        onPress={onpressCheck}
        style={styles.check}>
        {isDone && (
          <Animated.View style={iconstyle}>
            <MaterialIcons
              name={'done'}
              size={30}
              color="#fff" />
          </Animated.View>
        )}
      </Pressable>
    </TouchableOpacity>
  )
}

export default CardTodo