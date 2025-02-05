//shallow copy

let a = {
    name:"anshu" , 
    address: "ahmedabad",
    skills:[ 'git' , 'github' ]
}

let b = {...a} ;

b.name = 'devansh' ;  
b.skills[2] = 'js'
console.log ('a = ' ,  a )
console.log ('b = ' ,  b )