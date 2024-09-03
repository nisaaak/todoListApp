import {
    View,
    ScrollView,
    Image
} from 'react-native';
import CardTodo from "../../molecules/CardTodo"

const TodoList = ({
    navigation,
    todo
}) => {

    return (
        <View style={{
            backgroundColor: '#fff',
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
            flex: 1,
            paddingTop: 80,
            paddingHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {todo.length ?
                    todo?.map((it, idx) => (
                        <CardTodo
                            key={idx}
                            title={it.title}
                            content={it.content}
                            isDone={it.isDone}
                            id={it.id}
                            navigation={navigation}
                        />
                    )) : (
                        <Image
                            source={require('../../../assets/images/empty.png')}
                            style={{ width: 300, height: 300 }}
                        />
                    )}
            </ScrollView>

            {/* <Text>
                {JSON.stringify(todo)}
            </Text> */}
        </View>
    )
}

export default TodoList