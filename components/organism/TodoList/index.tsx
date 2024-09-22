import {
    View,
    ScrollView,
    Image
} from 'react-native';
import CardTodo from "../../molecules/CardTodo"
import styles from './styles';
import { IForm } from 'interfaces/IForm';

type Props = {
    todo: IForm[];
} & React.ComponentProps<typeof View>

const TodoList: React.FC<Readonly<Props>> = ({
    // navigation,
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
                        // navigation={navigation}
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