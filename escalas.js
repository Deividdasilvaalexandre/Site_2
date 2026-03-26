
resposta = document.getElementById('resposta')

function principal(){
    let celsius = Number(document.getElementById('celsius').value)
    let fahrenheit = Number(document.getElementById('fahrenheit').value)
    let kelvin = Number(document.getElementById('kelvin').value)

    let resultado = ''
    let opcao = ''
}

function converterCelsius(celsius, fahrenheit, kelvin){

    if(opcao === fahrenheit){
        return resultado = celsius * 1.8 + 32
        resposta.innerHTML(`O valor de ${celsius} °C para Fahrenheit é: ${resultado.toFixed(2)})
        }`)
    }else if(opcao === kelvin){
        return celsius + 273
        console.log(``)
    }else(
        console.log('Programa encerrado.')
    )
}

function converterFahrenheit(celsius, fahrenheit, kelvin){
    
    if(opcao === celsius){
        return fahrenheit - 32 / 1.8
        console.log(``)
    }else if(opcao === kelvin){
        return (fahrenheit - 32) * 5/9 + 273
        console.log(``)
    }else(
        console.log('Programa encerrado.')
    )
}

function converterKelvin(celsius, fahrenheit, kelvin){
    
    if(opcao === fahrenheit){
        return (kelvin - 273) * 1.8 + 32
        console.log(``)
    }else if(opcao === celsius){
        return kelvin - 273
        console.log(``)
    }else(
        console.log('Programa encerrado.')
    )
}
principal()