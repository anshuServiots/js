//shallow copy

let a = {
    name:"anshu" , 
    address: "ahmedabad",
    skills:['git' , 'github']
}

let b = JSON.parse(JSON.stringify(a)) ;

b.name = 'devansh' ;  
b.skills[2] = 'js'
console.log ('a = ' ,  a )
console.log ('b = ' ,  b )


