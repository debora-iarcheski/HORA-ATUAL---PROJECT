
function carregar() {
   const msg = document.getElementById("msg")
   const img = document.getElementById("img")
   const data = new Date()
   const hora = data.getHours() //2
   
   msg.innerHTML = `Agora são ${hora} horas.`

   if (hora >= 0 && hora < 12) {
      img.src = "./assets/manha.png"
      document.body.style.background = '#fac66d'
   } else if (hora >= 12 && hora <= 18) {
      document.body.style.background = '#f45404'
      img.src = "./assets/tarde.png"
   } else {
      img.src = "./assets/noite.png"
      document.body.style.background = '#1f498e'
   }
}
