import React from "react"
import Text from "../Text"
import { Pressable } from "react-native"
import styles from "./styles"

type Props = {
    title: string;
    onpress: () => void;
    filter: string;
} & React.ComponentProps<typeof Pressable>

const FilterButton: React.FC<Readonly<Props>> = ({
    title,
    onpress,
    filter
}) => (
    <Pressable
        onPress={() => {
            onpress()
        }}
        style={[
            styles.container,
            { backgroundColor: filter === title ? '#F48E8E' : '#fff' }
        ]}>
        <Text>{title}</Text>
    </Pressable>
)

export default FilterButton