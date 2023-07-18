// 1) 1 ile 10 arasında  rastgele sayı üretme

function rastgeleSayi(min,max){
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}
console.log(rastgeleSayi(1,10))

// 2.soruda elimizde örnekte size verdiğim people dizisini kullanarak people2 ye dönüştürmeni istiyorum. people dizisinden bir şeyler çıkarıp ekleyerek people2 ye ulaşacaksın

let people = ["Greg", "Mary", "Devon", "James"];
// people2 = ["Greg", "Elizabeth", "Mary", "Artie", "James"]

people.pop();
people.pop();
people.pop();
people.push("Elizabeth","Mary","Artie","James")
console.log(people)


//3.soruda ise ben bir donusturucu() fonksiyonu yazmanı istedim. 
var metinler = ["mustafa_selman@gmail.com","mehmet_colak@hotmail.com","yasin_sezer@yandex.com"]
metinler.splice(0,3,"Mustafa Selman","Mehmet Çolak","Yasin Sezer")
console.log(metinler)



        

// 4.soruda ise sayılar dizisindeki en büyük 2. değeri çıktı olarak veren bir fonksiyon ile en küçük ikinci değeri veren fonksiyon istiyorum sen sayıları önce sıralayıp sonrasında 2. en büyük ile 2. en küçüğü vereceksin

let sayilar = [12,34,2,3,67,66,5,24]

let sayilar2 = sayilar.sort((a,b) =>b-a);
console.log(sayilar2)
console.log(sayilar2[1])

sayilar3 = sayilar2.reverse();

console.log(sayilar3[1])
