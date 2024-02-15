let nome = "Pedro Henrique"
let ranking = 10000

    if (ranking <= 1000){
    	console.log ("O Herói de nome " + nome + " está no nível de" + " ferro")
        }    
        
    else if (ranking >= 1001 && ranking <= 2000){
    	console.log("O Herói de nome " + nome + " está no nível de" + " bronze")
        }
	else if (ranking >= 2001 && ranking <= 5000){
    	console.log("O Herói de nome " + nome + " está no nível de" + " prata")
        }  
    else if (ranking >= 5001 && ranking <= 7000){
    	console.log("O Herói de nome " + nome + " está no nível de" + " ouro")
        }
    else if (ranking >= 7001 && ranking <= 8000){
    	console.log("O Herói de nome " + nome + " está no nível de" + " platina")
        }    
    else if (ranking >= 8001 && ranking <= 9000){
    	console.log("O Herói de nome " + nome + " está no nível de" + " ascendente")
        }
    else if (ranking >= 9001 && ranking <= 10000){
    	console.log("O Herói de nome " + nome + " está no nível de" + " imortal")
        }
    else {
    	console.log("O Herói de nome " + nome + " está no nível de" + " radiante")
        }