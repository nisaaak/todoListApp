import React from "react"
import Text from "../Text"
import { Pressable } from "react-native"

const FilterButton = ({
    title,
    onpress,
    filter
}) => (
    <Pressable
        onPress={() => {
            onpress()
        }}
        style={{
            borderWidth: 2,
            backgroundColor: filter === title ? '#F48E8E' : '#fff',
            borderColor: '#F48E8E',
            borderRadius: 8,
            paddingHorizontal: 10,
            marginHorizontal: 10
        }}>
        <Text>{title}</Text>
    </Pressable>
)

export default FilterButton