import React from "react"
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./styles";

const Base = ({
    children
}) => (
    <SafeAreaView style={styles.container}>
        {children}
    </SafeAreaView>
)

export default Base