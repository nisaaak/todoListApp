import {
  View,
} from 'react-native';
import { useMemo, useState } from 'react';
import Text from '../../components/atoms/Text';
import AddButton from '../../components/atoms/AddButton';
import Search from '../../components/atoms/Search';
import FilterButton from '../../components/atoms/FilterButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import TodoList from '../../components/organism/TodoList';
import Animated, { BounceIn, BounceOut, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const Home = (props) => {
  const todo = useSelector(state => state.todoData.todo)
  const [search, set_search] = useState('')
  const [filter, set_filter] = useState('')
  const [press, set_press] = useState(false)

  const data = useMemo(() => {
    const filtered =
      search === ''
        ? todo
        : todo.filter((e) => (e.title.includes(search) || e.content.includes(search)))
    if (filter === '') {
      return filtered;
    } else if (filter === 'Done') {
      return filtered.filter((e) => e.isDone);
    } else if (filter === 'Not Done') {
      return filtered.filter((e) => !e.isDone);
    }
  }, [todo, filter, search])

  const iconstyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scaleY: withSpring(press ? -1 : 1, {
            damping: 20,
            stiffness: 100
          })
        }
      ]
    }
  })

  return (
    <SafeAreaView style={{ backgroundColor: '#FDE6BD', flex: 1, }}>
      <View style={{ justifyContent: 'space-between', flex: 1 }}>
        <View style={{ padding: 20 }}>
          <Text bold fontSize={25} color={'#F48E8E'}>Good Morning</Text>
          <Text fontSize={20} color={'#F48E8E'}>Tsuki</Text>
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

          <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
            <MaterialIcons name="sort" size={32} color='#868fba' />
            <FilterButton
              title={'Done'}
              onpress={() => { set_filter('Done') }}
              filter={filter}
            />
            <FilterButton
              title={'Not Done'}
              onpress={() => { set_filter('Not Done') }}
              filter={filter}
            />
            {filter && (
              <Animated.View entering={BounceIn} exiting={BounceOut}>
                <FilterButton
                  title={'x'}
                  onpress={() => { set_filter('') }}
                  filter={filter}
                />
              </Animated.View>
            )}
          </View>
        </View>
        <TodoList
          todo={data}
          navigation={props.navigation}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home