import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { styles } from '../theme/AppTheme'


export const CalculadoraScreen = () => {


    const [numeoAnterior, setNumeoAnterior] = useState('0');
    const [numero, setNumero] = useState('0');


    const limpiar = () => {
        setNumero('0');
    }

    const armarNumero = ( numeroTexto: string ) => {

        setNumero( numero + numeroTexto );

    }


    return (
        <View style={ styles.calculadoraContainer } >
            <Text style={ styles.resultadoPequeno } >{ numeoAnterior }</Text>
            <Text style={ styles.resultado } numberOfLines={1} adjustsFontSizeToFit >{ numero }</Text>

            {/* Fila de Botones */}
            <View style={ styles.fila }>
                <BotonCalc texto="C" color="#9b9b9b" accion= { limpiar }  />
                <BotonCalc texto="+/-" color="#9b9b9b" accion={ armarNumero }  />
                <BotonCalc texto="del" color="#9b9b9b" accion={ armarNumero }  />
                <BotonCalc texto="/" color="#ff9427" accion={ armarNumero }  />
            </View>

            {/* Fila de Botones */}
            <View style={ styles.fila }>
                <BotonCalc texto="7" accion={ armarNumero }  />
                <BotonCalc texto="8" accion={ armarNumero } />
                <BotonCalc texto="9" accion={ armarNumero } />
                <BotonCalc texto="*" color="#ff9427" accion={ armarNumero }  />
            </View>

            {/* Fila de Botones */}
            <View style={ styles.fila }>
                <BotonCalc texto="4" accion={ armarNumero } />
                <BotonCalc texto="5" accion={ armarNumero } />
                <BotonCalc texto="6" accion={ armarNumero } />
                <BotonCalc texto="-" color="#ff9427" accion={ armarNumero }  />
            </View>

            {/* Fila de Botones */}
            <View style={ styles.fila }>
                <BotonCalc texto="1" accion={ armarNumero } />
                <BotonCalc texto="2" accion={ armarNumero } />
                <BotonCalc texto="3" accion={ armarNumero } />
                <BotonCalc texto="+" color="#ff9427" accion={ armarNumero }  />
            </View>

             {/* Fila de Botones */}
             <View style={ styles.fila }>
                <BotonCalc texto="0" ancho accion={ armarNumero } />
                <BotonCalc texto="." accion={ armarNumero } />
                <BotonCalc texto="=" color="#ff9427" accion={ armarNumero }  />
            </View>
            
        </View>
    )
}
