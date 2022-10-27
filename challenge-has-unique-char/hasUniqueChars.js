// Write your code below
let bool = true
function uniqueCharacters(str){

    for(let i = 0; i < str.length; i++){

    for(let j = i + 1; j < str.length; j++){
        if (str[i] === str[j]){
            bool = false
        }
         

        

    }

             
        
    
        
}
return bool
}

console.log(uniqueCharacters('monday'))
console.log(uniqueCharacters('moonday'))