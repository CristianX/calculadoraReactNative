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

        // No aceptar doble punto
        if( numero.includes('.') && numeroTexto === '.' ) return;

        if( numero.startsWith( '0' ) || numero.startsWith('-0') ) {

            // Punto decimal
            if( numeroTexto === '.' ) {
                setNumero( numero + numeroTexto );

                // Evaluar si es otro 0 y hay un punto
            } else if( numeroTexto === '0' && numero.includes('.') ) {
                setNumero( numero + numeroTexto );

                // Evaluar si es diferente de cero y no tiene un punto
            } else if( numeroTexto !== '0' && !numero.includes('.') ) {
                setNumero( numeroTexto );
            
                // Evitar 00000.0
            } else if( numeroTexto === '0' && !numero.includes('.') ) {
                setNumero( numero );
            } else {
                setNumero( numero + numeroTexto );
            }

        } else {
            setNumero( numero + numeroTexto );
        }
    }

    const btnDelete = () => {
        if( numero.length == 1 || ( numero.startsWith('-') && numero.length == 2 ) ){
            setNumero('0');
        } else {
            setNumero( numero.slice( 0, -1 ) );
        }
    }

    const positivoNegativo = () => {
        if( numero.includes('-') ) {
            setNumero( numero.replace('-', '') );
        } else {
            setNumero( '-' + numero );
        }
    }


    return (
        <View style={ styles.calculadoraContainer } >
            <Text style={ styles.resultadoPequeno } >{ numeoAnterior }</Text>
            <Text style={ styles.resultado } numberOfLines={1} adjustsFontSizeToFit >{ numero }</Text>

            {/* Fila de Botones */}
            <View style={ styles.fila }>
                <BotonCalc texto="C" color="#9b9b9b" accion= { limpiar }  />
                <BotonCalc texto="+/-" color="#9b9b9b" accion={ positivoNegativo }  />
                <BotonCalc texto="del" color="#9b9b9b" accion={ btnDelete }  />
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
