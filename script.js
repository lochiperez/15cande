const dias = document.getElementById('dias')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')



setInterval(() => {
    const diaInicio = new Date().getTime()
    const diaFinal = new Date('mar 9, 2024 21:00:00').getTime()
    const distance = diaFinal - diaInicio
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours =  '0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    const minutes = '0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = '0' + Math.floor((distance % (1000 * 60)) / (1000))

    this.dias.innerHTML = days;
    this.horas.innerHTML = hours.slice(-2);
    this.minutos.innerHTML = minutes.slice(-2);
    this.segundos.innerHTML = seconds.slice(-2);
    
}, 1000);