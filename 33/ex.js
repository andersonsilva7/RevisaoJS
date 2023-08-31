var agora = new Date()

var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas `)

if (hora >= 6 && hora <= 11) {
    console.log('Bom dia!')
}else if (hora <= 17 && hora >= 12 ) {
    console.log('Boa tarde!')
}else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!')
}else if ( hora <= 5 && hora >= 0){
    console.log('Boa madrugada')
}