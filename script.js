// 1) 1 ile 10 arasında  rastgele sayı üretme

function rastgeleSayi(min,max){
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}
console.log(rastgeleSayi(1,10))

// 2) elimizdeki people dizisiyle  people2 yi oluşturma

let people = ["Ramazan","Esma","Elisa"];
let people2 = ["Seyfullah"]
console.log(people.concat(people2))

// 3) elimizdeki bir elemanı başka birşeye dönüştürme

let texts = ["mustafa_selman@gmail.com ","mehmet_colak@hotmail.com ","yasin_sezer@yandex.com"]

texts.splice(0,3,"Mustafa Selman","Mehmet Çolak","Yasir Sezer")
console.log(texts)

// 4) elimizdeki dizinin en büyük ikinci ve en küçük ikinci değerini yazdırma

let sayilar = [12,34,2,3,67,66,5,24]

function ikinciEnBüyük(maxDeger,çıkarılcakDeger){
    return(maxDeger-çıkarılcakDeger)
}
console.log(ikinciEnBüyük(67,1));

function ikinciEnKüçük(minDeger,eklenecekDeger){
    return(minDeger + eklenecekDeger)
}
console.log(ikinciEnKüçük(2,1))