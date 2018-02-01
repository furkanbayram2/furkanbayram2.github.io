---
layout: post
title: SASS ve SCSS Nedir ? Neden Kullanmalıyız ? Nasıl Kurulur ?
date: 2018-01-12 16:29:00
category: CSS
tags:
- sass
- scss
- css
- css-preprocessor
---


Herkese merhaba,
Neredeyse her yazıma uzun zamandır yazamıyorum diye başlamak zorunda kalıyorum :) Ama bundan sonra düzenli olarak bildiklerimi sizlerle paylaşmaya çalışacağım. Bugün CSS-preprocessor'lerden SASS ve SCSS hakkında bilgi vereceğim.

<h1>CSS Preprocessor Nedir ?</h1>

Preprocessor'ün Türkçe karşılığı <strong>Ön-derleyeci</strong>'dir. Önderleyiciler bize programlama dillerinde olduğu gibi CSS yazarken de fonksiyon oluşturma, değişken tanımlama, operatörleri kullanma gibi olanaklar sağlıyor.

Şuanda popüler olan 3 adet önderleyici vardır. Bunlar <strong>SASS, LESS, </strong>ve <strong>Stylus</strong>'dur. Bu yazımda <strong>SASS </strong> ve <strong>SCSS</strong>'den bahsedeceğim.

<h1>SASS Nedir ?</h1>
<strong>SASS</strong>, 2006 yılında geliştirilmeye başlanan, Ruby diline yakın bir dille CSS yazmayı hedefleyen bir Ruby Gem'dir. 2008 yılına kadar <a href="https://www.google.com.tr/search?q=Hampton+Catlin&oq=Hampton+Catlin&aqs=chrome..69i57.150j0j7&sourceid=chrome&ie=UTF-8" target="_blank">Hampton Catlin</a> tarafından geliştirilmiştir. Şu anda ise açık kaynak bir teknoloji olarak geliştirilmeye devam etmektedir.

Sürekli gelişen yazılım dünyasında CSS'in eski bir teknoloji olarak kalmasını beklemeyezdik. <strong>SASS</strong> sayesinde dinamik bir şekilde CSS yazmaya başladık ve sayfalarımıza javascript dahil etmeden ileri seviye animasyonlar yapmak SASS sayesinde daha kolay ve basit bir hale geldi.

<strong>SASS</strong>, Ruby benzeri bir syntax ile yazılır ve yazılan bu kodlar CSS'e dönüştürülür. Bu dönüştürme işlemi otomatik olarak yapılır ve projeye dahil edilir. Ekstra bir derleme komutu gerekmeden projenizdeki her "*.sass" ve "*.scss" uzantılı dosyayı derleyerek projenize dahil eder.

SASS bir uzantı dilidir. CSS ile yaptığımız işleri daha kolay, daha hızlı ve daha okunabilir bir şekilde yazmamızı sağlayan bir teknolojidir.

<h1>SCSS Nedir ?</h1>
<strong>SCSS, SASS'ın syntax olarak CSS'e daha çok benzeyen halidir.</strong>

SASS yazarken parantez işaretleri ve noktalı virgül kullanılmadığı için CSS yazmaya alışan geliştiriciler <strong>SASS</strong> yazarken zorlanıyordu. Bu sebeple <strong>SCSS</strong> ile parantezler ve noktalı virgül kullanımı geri geldi. Syntax biraz daha CSS'e benzedi.

<h2>Neden SCSS Kullanmalıyız ?</h2>
Neden <strong>SCSS</strong> kullanmanız gerektiğini diğer yazılarda göstereceğim örneklerle daha rahat anlayacaksınız ama şimdilik size <strong>SCSS</strong>'in bir kaç müthiş özelliğinden bahsedeyim.

1. Bence <strong>SCSS</strong> kullanmamızın en önemli sebebi CSS'i statik yapıdan çıkartıp dinamik bir programlama dili gibi kullanabilmemizi sağlamasıdır.
2. Hızlı bir şekilde stil dosyalarını oluşturmamıza olanak sağlar.
3. Projeler büyüdükçe CSS dosyalarımız daha karmaşık bir hal alıyor. Belirli bir süreden sonra kodlar tekrarlamaya başlıyor ve bu da gereksiz yere kod yazmamıza neden oluyor. <strong>SCSS</strong> bizi bu karmaşıklıktan kurtarıp kod tekrarı yapmamızı önlüyor.
4. Örneğin: sayfamızda bir renk kodunu sürekli kullanmamız gerekiyor. Bu renk kodunu SCSS ile bir değişkene atıyoruz ve o değişkeni istediğimiz yerde kullanabiliyoruz. Böylece stil dosyamız büyüse bile istediğimiz değişikliği o değişkenin değerini değiştirerek tüm sayfada yapabiliyoruz.


<h2>SASS ve SCSS Nasıl Kurulur ?</h2>
SASS ve SCSS kurulumunu ayrı ayrı yapmıyoruz. Yukarıda belirttiğim gibi ikiside aynı çatı altında çalışıyor, sadece syntax farkı var. Aşağıdaki kurulum ikisi içinde geçerlidir.

Bilgisayarınıza kurabilmek için iki seçeneğimiz var. Birincisi yardımcı  masaüstü programlar ile, ikinci yol ise komut satırından kurulum. Ben size komut satırından kurulumu anlatacağım.

1. <strong>SASS</strong> ve <strong>SCSS</strong> ile çalışabilmek için bilgisayarımızda Ruby'nin kurulu olması gerekiyor.
<a href="https://rubyinstaller.org/downloads/">Buradan</a>, işletim sisteminize uygun olan sürümü seçerek indirip, kurulumu gerçekleştirebilirsiniz.

2. Ruby'i bilgisayarımıza kurduktan sonra masaüstüne gelip, <strong>Windows + R</strong> tuşlarına basıyoruz ve açılan ekrandaki alana <strong>cmd</strong> yazıp komut satırını başlatıyoruz.

3. Komut satırına aşağıdaki komutu yazarak sass kurulumunu gerçekleştiriyoruz.
{% highlight bash %}
gem install sass 	// sass kurulumunu gerçekleştiriyoruz.
{% endhighlight %}

Kurulum tamamlandıktan sonra aşağıdaki gibi bir mesaj alacaksınız. 

<img class="img-responsive" src="../static/images/post_image/sass-ve-scss-nedir-neden-kullanmaliyiz-nasil-kurulur.html/1.png" />

Kurulumun gerçekleştiğini kontrol etmek için aşağıdaki komutu yazın ve sonuç olarak bilgisayarınızda kurulu olan sass versiyonunu size döndürüyorsa eksiksiz bir şekilde kurulum tamamlanmış demektir.
{% highlight bash %}

sass -v 	// sass versiyonunu ekrana yazdırıyoruz.

{% endhighlight %}

<h1>Sonuç</h1>
Temiz ve okunaklı bir kod yapısının önemini anlatmaya gerek yok. Projeler büyüdükçe CSS dosyları içinden çıkılamayacak bir hal alıyor ve salt CSS ile bu stil dosyalarını temiz ve okunaklı bir şekilde yazmak oldukça güçleşiyor. İşte tam burada devreye <strong>CSS preporecessor</strong>'ler giriyor. SCSS kullanmamın sebebi ise syntax'ının oldukça CSS'e benzemesi ve bir çok kaynağın bulunması.

<strong>SCSS</strong> yazarken dikkatli bir şekilde yazmazsınız bir süre sonra normal CSS'den farkı kalmayacaktır. Buda <strong>CSS preporecessor</strong> kullanmanın bir anlamı kalmaması demektir. O yüzden dikkatli ve temiz bir şekilde kodlama yapmanız gerekiyor.

Birdahaki yazımda SASS ve SCSS ayarları nasıl yapılır ondan bahsedeceğim. Yararlı olabildiysem ne mutlu bana.
İyi çalışmalar, iyi günler...
