import {
  View,
} from 'react-native';
import { useMemo, useState } from 'react';
import AddButton from '../../components/atoms/AddButton';
import Search from '../../components/molecules/Search';
import Header from '../../components/molecules/Header';
import Base from '../../components/templates/Base';
import { useSelector } from 'react-redux'
import TodoList from '../../components/organism/TodoList';
import FilterBar from '../../components/organism/FilterBar';

const Home = (props) => {
  const todo = useSelector(state => state.todoData.todo)
  const [search, set_search] = useState('')
  const [filter, set_filter] = useState('')
  const [press, set_press] = useState(false)

  const data = useMemo(() => {
    const filtered =
      search === ''
        ? todo
        : todo.filter((e) => (e.title.includes(search)
          || e.content.includes(search)))
    if (filter === 'Done') {
      return filtered.filter((e) => e.isDone)
    } else if (filter === 'Not Done') {
      return filtered.filter((e) => !e.isDone)
    } else if (filter === '') {
      return filtered
    }
  }, [todo, filter, search])

  return (
    <Base>
      <View style={{ justifyContent: 'space-between', flex: 1 }}>
        <View style={{ padding: 20 }}>
          <Header />
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
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