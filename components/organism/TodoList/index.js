import {
    View,
    ScrollView,
    Image
} from 'react-native';
import CardTodo from "../../molecules/CardTodo"
import styles from './styles';

const TodoList = ({
    navigation,
    todo
}) => {

    return (
        <View style={styles.container}>
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
                            style={styles.img}
                        />
                    )}
            </ScrollView>
        </View>
    )
}

export default TodoList