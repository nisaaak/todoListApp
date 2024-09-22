import React from "react"
import Text from "../../atoms/Text"

const Header = ({

}) => {
    const time = new Date().getHours()
    let greet = ''
    if (time < 12) {
        greet = 'Morning'
    } else if (time >= 12 && time < 18) {
        greet = 'Afternoon'
    } else {
        greet = 'Evening'
    }

    return (
        <>
            <Text bold fontSize={25} color={'#F48E8E'}>
                {`Good ${greet}`}
            </Text>
            <Text fontSize={20} color={'#F48E8E'}>
                User
            </Text>
        </>
    )
}

export default Header