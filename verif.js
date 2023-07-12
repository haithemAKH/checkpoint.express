let day = new Date().getDay()
let hours = new Date().getHours()
// afficher l heure et la date dans le console
console.log(day,hours);
// fonction pour la vérification de la date et l heure de fonctionnement du site
function verif1(req,res,next){
   if(day > 0 && day < 6 && hours > 8 && hours < 17)
    next()
    else (res.send(`<h1> welcome, our service is closed now ,our service is open at 8  to 21  from monday to friday</h1>`))
}
module.exports = verif1 ;


