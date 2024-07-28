import { isEmpty } from 'lodash'
import React from 'react'
import { Pressable, Text } from 'react-native'
import { defaultButtonStyle } from './style'

interface styleProps{
    button: object,
    text: object
}

interface props{
    onClick: () => void
    style?: styleProps|null|undefined,
    disabled?: boolean,
    text: string
}

export function Button({
    onClick,
    style,
    disabled,
    text
}: props) {
    return (
        <Pressable
            style={isEmpty(style) ? defaultButtonStyle.button : style.button}
            disabled={disabled}
            onPress={onClick}
        >
            <Text style={isEmpty(style) ? defaultButtonStyle.text : style.text}>{text}</Text>
        </Pressable>
    )
}