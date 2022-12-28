var a=[1,2,3,4]
var b=[1,2,5,6]
var newArray=[]
for (let i = 0; i < a.length; i++) {
    const element = a[i];
    if(!newArray.includes(element)){
        newArray.push(element)
    }
}
for (let i = 0; i < b.length; i++) {
    const element = b[i];
    if(!newArray.includes(element)){
        newArray.push(element)
    }
}
console.log(newArray)
