import {
  View,
} from 'react-native';
import { useEffect, useState } from 'react';
import AddButton from '../../components/atoms/AddButton';
import Search from '../../components/molecules/Search';
import Header from '../../components/molecules/Header';
import Base from '../../components/templates/Base';
import { useSelector } from 'react-redux'
import TodoList from '../../components/organism/TodoList';
import FilterBar from '../../components/organism/FilterBar';
import styles from './styles';

const Home = (props) => {
  const todo = useSelector(state => state.todoData.todo)
  const [search, set_search] = useState('')
  const [filter, set_filter] = useState('')
  const [press, set_press] = useState(false)
  const [data, set_data] = useState(false)

  useEffect(() => {
    const filtered =
      search === ''
        ? todo
        : todo.filter((e) => (e.title.includes(search)
          || e.content.includes(search)))
    if (filter === 'Done') {
      set_data(filtered.filter((e) => e.isDone))
    } else if (filter === 'Not Done') {
      set_data(filtered.filter((e) => !e.isDone))
    } else if (filter === '') {
      set_data(filtered)
    }
  }, [search, todo, filter])

  return (
    <Base>
      <View style={styles.container}>
        <View style={{ padding: 20 }}>
          <Header />
          <View style={styles.search}>
            <Search
              press={press}
              search={search}
              onChange={(input) => { set_search(input) }}
              onPressIn={() => { set_press(true) }}
              onPressOut={() => { set_press(false) }}
            />
            <AddButton
              onpress={() => {
                props.navigation.navigate('Edit')
              }} />
          </View>

          <FilterBar
            filter={filter}
            set_filter={(input) => { set_filter(input) }}
          />
        </View>
        <TodoList
          todo={data}
          navigation={props.navigation}
        />
      </View>
    </Base>
  )
}

export default Home