function addsample(){
    num = document.querySelector('input#num')
    res = document.querySelector('select#res')
    n=Number(num.value)
    if(list.indexOf(n)!=-1 || n<=0){
        window.alert('Insira um valor diferente')
    } else {
        list.push(n)
        let item = document.createElement('option')
        item.text += n
        res.appendChild(item)
        console.log(list)
    }
}

let list =[]


