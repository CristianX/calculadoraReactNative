import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'

interface Props {
    texto: string,
    color?: string,
    colorTexto?: string
}



export const BotonCalc = ({ texto, color='#2d2d2d', colorTexto= 'white' }: Props) => {
    return (
        <View style={{
                ...styles.boton,
                backgroundColor: color
            }}>
            <Text style={{
                    ...styles.botonTexto,
                    color: colorTexto
                }} >{ texto }</Text>
        </View>
    )
}

