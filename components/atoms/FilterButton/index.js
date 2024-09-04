import React from "react"
import Text from "../Text"
import { Pressable } from "react-native"
import styles from "./styles"

const FilterButton = ({
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