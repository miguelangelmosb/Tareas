const padre = {
    nombre : 'Rafael',
    apellido : ' Mosquera',
    edad : 52,
    sexo : 'Masculino'
  }
  
  const gato = {
    nombre : 'Bagheera',
    apellido : ' Mosquera',
    edad : 1,
    sexo : 'Masculino'
  }
  
  const yo = {
    nombre : 'Miguel',
    apellido : ' Mosquera',
    edad : 22,
    sexo : 'Masculino'
  }
  
  const arrayFinal = [padre, gato, yo]
  
  arrayFinal.forEach(item =>
    {
      for(i in item)
      {
        console.log(`\n ${i}: ${item[i]}`)
      }
    })