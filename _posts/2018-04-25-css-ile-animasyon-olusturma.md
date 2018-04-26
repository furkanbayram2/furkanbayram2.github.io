---
layout: post
title: CSS ile Animasyon Oluşturma
date: 2018-04-26 17:15:00
category: Web Teknolojileri
tags:
- css3
- animation
- keyframes
---

<h4>Herkese merhabalar. 
    Öncelikle başlamadan önce 10-15 dakika gibi bir sürede yaptığım örneği göstererek neler yapabileceğimizi göstermek istiyorum.
    <a href="https://furkanbayram2.github.io/finalOdevi1" target="blank">Buraya</a> tıklayarak çalışmama, <a href="https://github.com/furkanbayram2/furkanbayram2.github.io/blob/master/finalOdevi1/index.html" target="blank">buraya</a> tıklayarak kaynak kodlarına erişebilirsiniz. <strong>NOT:</strong> JS kısmına takılmayın sadece butonlara tıklayınca yeni class ataması yapmak için kullandım. <strong>OLDUKÇA SPAGETTİ :)</strong></h4>

<p>Önceden web uygulamalarında animasyon yapmak için genelde jQuery kullanırdım. Ama CSS3 ile gelen yenilikler
    ile artık jQuery kütüphanesinin yüzüne bile bakmıyorum diyebilirim :)</p> Bugün
<strong>@keyframes</strong> ile neler yapabileceğimizden bahsedeceğim. @keyframes özelliği ile hiç bir eklenti kullanmadan sadece
CSS ile çeşitli animasyonlar yapabiliyoruz. Herhangi bir DOM elemanına kayma, renk değiştirme, büyüme, küçülme vb. efektler
uygulayabiliyoruz. Kısaca @keyframes ile belirli bir zaman aralığı belirliyoruz ve bu zaman aralığında CSS ile yapıbilen
her şeyi öğemize uygulayabiliyoruz.

<h1>1. Tarayıcı Desteği</h1>
Anlatıma başlamadan önce tarayıcı desteğinden bahsetmek istiyorum. Google Chrome, Mozilla, Opera ve Safari'nin neredeyse
tüm sürümleri bu özelliği destekliyor.
<a href="https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp">Buraya</a> tıklayarak daha detaylı tabloya ulaşabilirsiniz.

<h1>2. Kullanım</h1>

Kullanımı oldukça basit.
{% highlight css %}
@keyframes animasyon-ismi{
    from { css kodları }
    to { css kodları }
}
{% endhighlight %}



<kbd>"animasyon-ismi"</kbd> yazan yere animasyonunuzu tanımlayan istediğiniz bir değişken adını yazabilirsiniz.
<strong>from</strong> kısmı bizim başlangıç değerlerimiz,
<strong>to</strong> kısmı ise bitiş değerleriğimizi ifade ediyor. From ve to ile kullanımın dışında bir de yüzdelik dilimler ile
ifade ederek kullanabiliyoruz. Genelde yüzdelik dilimlerle ifade etmek daha esnek bir yapı kurmamızı sağlıyor.
{% highlight css %}

.kutu{
    width:25px;
    height:25px;
    background-color:blue;
    animation-name:animasyon-ismi;
    animation-duration:2s;
}

@keyframes animasyon-ismi{
10% { 
    width:100px;
    height:100px;
    background-color:red;
 }
50% {
    width:150px;
    height:150px;
    background-color:purple;
 }
100% { 
    width:50px;
    height:50px;
    background-color:yellow;
 } 
} 
{% endhighlight %}
Yukarıda
animasyonumuzu 3 parçaya böldüm. Siz isterseniz 100 eşit parçaya bölebilirsiniz :) 10%, 25%, 50%, 75%, 100%... Örnek olarak
yaptığım uygulamayı
<a href="https://codepen.io/furkanbayram2/pen/mLrjKp" target="_blank">buraya</a> tıklayarak görebilirsiniz. 

<h1>3. Özellikler</h1>

Animasyonu uygulayacağımız seçicinin aldığı bir kaç değer var. Bu değerler;

<table class="table table-bordered">
    <tr>
        <th>
            Özellik
        </th>
        <th>Açıklama</th>
    </tr>
    <tr>Açıklama</tr>
    <tr>
        <td>animation-name</td>
        <td>DOM elemanımızda kullanacağımız @keyframes'in adını belirtir.</td>

    </tr>
    <tr>
        <td>animation-duration</td>
        <td>Animasyonun ne kadar sürede tamamlanacağı belirtir.</td>

    </tr>
    <tr>
        <td>animation-timing-function</td>
        <td>Animasyonun hız eğrisini belirtir.</td>

    </tr>
    <tr>
        <td>animation-delay</td>
        <td>Animasyonun başlaması için ne kadar gecikme olacağını belirtir.</td>

    </tr>
    <tr>
        <td>animation-iteration-count</td>
        <td>Animasyonun kaç defa oynatılacağı belirtir.</td>

    </tr>
    <tr>
        <td>animation-direction</td>
        <td>Animasyon tamamlandıktan sonra geriye doğru oynatılıp oynatılmayacağını belirtir.</td>

    </tr>
    <tr>
        <td>animation-fill-mode</td>
        <td>Animasyon bittikten sonra veya animasyon oynatılırken animasyonun nasıl davranacağını belirler.</td>

    </tr>
    <tr>
        <td>animation-play-state</td>
        <td>Animasyonun başlangıçta çalışıp çalışmayacağını belirtir.</td>

    </tr>
</table>

<h3>
    Yukarıdaki özellikler çeşitli değerler alır. Bunları başka bir yazıda daha detaylı bir şekilde anlatmayı düşünüyorum. Eğer bu konuyla ilgili aklınıza takılan bir yer olursa <a href="https://www.facebook.com/profile.php?id=100006148155735" target="_blank">facebook</a> veya <a href="https://www.instagram.com/furkanbayram2/" target="_blank">instagram</a> adreslerimden bana ulaşabilirsiniz. İyi akşamlar.
</h3>

 

