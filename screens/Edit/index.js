import { useEffect, useState } from 'react';
import {
  View,
} from 'react-native';
import Button from '../../components/atoms/Button';
import FormInput from '../../components/molecules/FormInput';
import CloseButton from '../../components/atoms/CloseButton';
import Base from '../../components/templates/Base';
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
    <Base>
      <View style={{ paddingHorizontal: 20 }}>
        <CloseButton onpress={() => { props.navigation.goBack() }} />
        <FormInput
          title={'Title'}
          placeholder={'Title'}
          value={title}
          maxLength={50}
          onChangeText={(input) => { set_title(input) }}
          height={50}
        />
        <FormInput
          title={'Content'}
          placeholder={'Content'}
          value={content}
          maxLength={150}
          onChangeText={(input) => { set_content(input) }}
          height={200}
        />
        <Button
          title={'Save'}
          onpress={save}
          backgroundColor={'#868fba'}
        />
        {props.route.params?.id && (
          <Button
            title={'Delete'}
            onpress={onDelete}
            backgroundColor={'#F48E8E'}
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
      </View>
    </Base>
  )
}

export default Edit