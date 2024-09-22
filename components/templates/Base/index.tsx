import React from "react"
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./styles";

type Props = {
    children: React.ReactNode;
} & React.ComponentProps<typeof SafeAreaView>

const Base: React.FC<Readonly<Props>> = ({
    children
}) => (
    <SafeAreaView style={styles.container}>
        {children}
    </SafeAreaView>
)

export default Base