let resposta = document.getElementById('resposta')

function principal(){
    let celsius = Number(document.getElementById('celsius').value)
    let fahrenheit = Number(document.getElementById('fahrenheit').value)
    let kelvin = Number(document.getElementById('kelvin').value)
    let opcao = document.getElementById('opcao').value
    
    let resultado = ''
    
    // Verifica qual escala foi inserida e chama a função apropriada
    if(celsius !== 0 && !isNaN(celsius)){
        resultado = converterCelsius(celsius, opcao)
    } else if(fahrenheit !== 0 && !isNaN(fahrenheit)){
        resultado = converterFahrenheit(fahrenheit, opcao)
    } else if(kelvin !== 0 && !isNaN(kelvin)){
        resultado = converterKelvin(kelvin, opcao)
    } else {
        resposta.innerHTML = 'Por favor, insira um valor válido em uma das escalas!'
        return
    }
    
    resposta.innerHTML = resultado
}

function converterCelsius(celsius, opcao){
    if(opcao === 'fahrenheit'){
        let resultado = celsius * 1.8 + 32
        return `O valor de ${celsius} °C para Fahrenheit é: ${resultado.toFixed(2)} °F`
    } else if(opcao === 'kelvin'){
        let resultado = celsius + 273.15
        return `O valor de ${celsius} °C para Kelvin é: ${resultado.toFixed(2)} K`
    }
}

function converterFahrenheit(fahrenheit, opcao){
    if(opcao === 'celsius'){
        let resultado = (fahrenheit - 32) / 1.8
        return `O valor de ${fahrenheit} °F para Celsius é: ${resultado.toFixed(2)} °C`
    } else if(opcao === 'kelvin'){
        let resultado = (fahrenheit - 32) * 5/9 + 273.15
        return `O valor de ${fahrenheit} °F para Kelvin é: ${resultado.toFixed(2)} K`
    }
}

function converterKelvin(kelvin, opcao){
    if(opcao === 'celsius'){
        let resultado = kelvin - 273.15
        return `O valor de ${kelvin} K para Celsius é: ${resultado.toFixed(2)} °C`
    } else if(opcao === 'fahrenheit'){
        let resultado = (kelvin - 273.15) * 1.8 + 32
        return `O valor de ${kelvin} K para Fahrenheit é: ${resultado.toFixed(2)} °F`
    }
}