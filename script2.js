let a
a = prompt("Lutfen islem seciniz:  (+ , / )")


function topla(sayi1="" , sayi2=""){
    sayi1 = prompt("Ilk sayiyi girin")
    sayi2 = prompt("Ikinci sayiyi girin")
    let sonuc = Number(sayi1) + Number(sayi2)
    console.log(sonuc)
}


function bol(sayi1="" , sayi2=""){
    sayi1 = prompt("Ilk sayiyi girin:")
    sayi2 = prompt("Ikinci sayiyi girin:")
    let sonuc = Number(sayi1) / Number(sayi2)
    console.log(sonuc)
}

if( a == "+"){
    let islem1 = document.querySelector('#toplama')
    islem1.innerHTML = topla()
}
else if( a == "/"){
    let islem2 = document.querySelector('#bolme')
    islem2.innerHTML = bol()
}
else{
    console.log("Lutfen gecerli bir islem seciniz.")
}