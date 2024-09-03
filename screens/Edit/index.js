import {
  TextInput,
  Pressable
} from 'react-native';
import { useEffect, useState } from 'react';
import Text from '../../components/atoms/Text';
import Button from '../../components/atoms/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import { saveTodo, clearTodo } from '../../store/actions/todoAction';
import uuid from "react-native-uuid"

const Edit = (props) => {
  const dispatch = useDispatch();
  const [title, set_title] = useState('')
  const [content, set_content] = useState('')
  const todo = useSelector(state => state.todoData.todo)

  useEffect(() => {
    console.log('page edit', props.route.params)
    if (props.route.params?.id) {
      set_title(props.route.params?.title)
      set_content(props.route.params?.content)
    }
  }, [])

  const save = () => {
    if (props.route.params?.id) {
      console.log('ediiiiitttt', title, content)
      let tempTodo = todo
      tempTodo.filter(e => e.id === props.route.params?.id)[0].title = title
      tempTodo.filter(e => e.id === props.route.params?.id)[0].content = content
      dispatch(saveTodo(tempTodo));
      console.log(tempTodo)
    } else {
      if (title && content) {
        const data = [
          ...todo,
          {
            title: title,
            content: content,
            isDone: false,
            id: uuid.v1()
          }
        ]
        dispatch(saveTodo(data));

      }
    }
    props.navigation.navigate('Home')
  }

  const onDelete = () => {
    let tempTodo = todo
    let index = tempTodo.findIndex(e => e.id === props.route.params?.id)
    tempTodo.splice(index, 1)
    dispatch(saveTodo(tempTodo));
    props.navigation.navigate('Home')
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#FDE6BD', flex: 1, paddingHorizontal: 20 }}>
      <Pressable
        onPress={() => {
          props.navigation.navigate('Home')
        }}
        style={{ alignItems: 'flex-end' }}>
        <MaterialIcons name="close" size={32} color='#868fba' />
      </Pressable>
      <Text fontSize={30} color={'#F48E8E'}>
        Title
      </Text>
      <TextInput
        placeholder={'Title'}
        value={title}
        maxLength={50}
        onChangeText={(input) => {
          set_title(input)
        }}
        style={{
          borderWidth: 1,
          borderColor: '#868fba',
          backgroundColor: '#fff',
          borderRadius: 8,
          height: 50,
          padding: 10
        }}
      />
      <Text fontSize={30} color={'#F48E8E'}>
        Content
      </Text>
      <TextInput
        placeholder={'Content'}
        value={content}
        maxLength={150}
        multiline
        onChangeText={(input) => {
          set_content(input)
        }}
        style={{
          borderWidth: 1,
          borderColor: '#868fba',
          backgroundColor: '#fff',
          borderRadius: 8,
          height: 100,
          padding: 10
        }}
      />

      <Pressable
        onPress={save}
        style={{
          marginTop: 20,
          backgroundColor: '#868fba',
          borderRadius: 20,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>
          Save
        </Text>
      </Pressable>
      {props.route.params?.id && (
        <Button
          title={'Delete'}
          onpress={onDelete}
        />
      )}
      {/* <Pressable
        onPress={() => {
          dispatch(clearTodo())
        }}
        style={{
          marginTop: 20,
          backgroundColor: '#868fba',
          borderRadius: 20,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>
          clear
        </Text>
      </Pressable> */}
    </SafeAreaView>
  )
}

export default Edit