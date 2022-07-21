function addsample(){
    num = document.querySelector('input#num')
    res = document.querySelector('select#res')
    n=Number(num.value)
    if(list.indexOf(n)!=-1 || n<=0 || num.value>100){
        window.alert('Invalid insert. Type another number.')
    } else {
        list.push(n)
        let item = document.createElement('option')
        item.text += n
        res.appendChild(item)
        console.log(list)
    }
}
function calc(){
    main=document.querySelector('section')
    max = maxNum(list)
    min = minNum(list)
    s = sum(list)
    avg = average(list)
    
    main.innerHTML+=`There are ${list.length} numbers in the sample.<br>`
    main.innerHTML+= `The biggest number of the sample is ${max}.<br>`
    main.innerHTML+= `The smallest number of the sample is ${min}.<br>`
    main.innerHTML+= `The sum of all the numbers in the sample is ${s}.<br>`
    main.innerHTML+= `The arithmetic average of the sample is ${avg}.<br>`
}

function maxNum (x){
    let max = 0
    for(let i in x){
        if(x[i]>max){
            max=list[i]
        }
    }
    return max
}

function minNum (x){
    let min = maxNum(list)
    for(let i in x){ 
        if(x[i]<min){
            min = list[i]
        }
    }
    return min
}

function sum(x){
    let s=0
    for(let i in x){
        s += x[i]
    }
    return s
}

function average(x){
    avg = sum(x)/x.length
    return avg
}
let list =[]


