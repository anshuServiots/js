// map method in js

const arr = [1,2,3,4,5,6,7,8,9]
let newArr = []

// copying array using forEach
arr.forEach((value)=>{
    newArr.push(value)
})

console.log('copying using forEach :' ,newArr)

//copying array using map
newArr = []

newArr = arr.map((value)=>{
      return value
    })

console.log('copying using map :' ,newArr)



