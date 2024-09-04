import React from "react"
import { View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { BounceIn, BounceOut, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import FilterButton from "../../atoms/FilterButton";

const FilterBar = ({
    filter,
    set_filter
}) => (
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
)

export default FilterBar