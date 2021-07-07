$(() => {

const $text = $('#input')
const $btn = $('#submit')

$btn.on('click', (event)=>{
  event.preventDefault()
  const userInput = $text.val()




  $.ajax({
    url:"https://api.openweathermap.org/data/2.5/weather?zip="+userInput+",us&appid=724e99c34181dddb70e43c218698fb6e"

  }).then((data)=>{
    console.log(data)
    const temperature = Math.floor((parseInt(data.main.temp)-273.15) * 9/5+32)
    console.log(temperature + ' degre')
  })


})




})
