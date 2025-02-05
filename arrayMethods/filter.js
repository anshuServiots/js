// filter method in js

const arr = [1,2,3,4,5,6,7,8,9]
let newArr = []

// copying even elements into new array using forEach
arr.forEach((value)=>{
    if(value % 2 == 0){
        newArr.push(value)
    }
    
})

console.log('copying using forEach :' ,newArr)

// copying even elements into new array using filter
newArr = []

newArr = arr.filter((value)=>{

    if(value % 2 ==0)  return value

    })

console.log('copying using map :' ,newArr)



