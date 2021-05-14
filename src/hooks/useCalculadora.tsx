import React, { useRef, useState } from 'react';

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {

    
    const [numeroAnterior, setNumeoAnterior] = useState('0');
    const [numero, setNumero] = useState('0');
    const ultimaOperacion = useRef<Operadores>();


    const limpiar = () => {
        setNumero('0');
        setNumeoAnterior('0');
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

    const cambiarNumPorAnterior = () => {
        if( numero.endsWith('.') ) {
            
        } else {
            setNumeoAnterior( numero );
        }

        setNumero('0');
    }

    const btnDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnMultiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const btnRestar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    const btnSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = () => {
        const num1 = Number( numero );
        const num2 = Number( numeroAnterior );

        switch ( ultimaOperacion.current ) {
            case Operadores.sumar:
                setNumero( `${ num1 + num2 }` );
                break;

            case Operadores.restar:
                setNumero( `${ num2 - num1 }` );
                break;

            case Operadores.multiplicar:
                setNumero( `${ num1 * num2 }` );
                break;

            case Operadores.dividir:
                setNumero( `${ num2 / num1 }` );
                break;
        }

        setNumeoAnterior('0');
    }

    return {

        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,

    }

}
