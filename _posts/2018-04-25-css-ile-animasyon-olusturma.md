---
layout: post
title: CSS ile Animasyon Oluşturma
date: 2018-04-25 19:00:00
category: Web Teknolojileri
tags:
- css3
- animation
- keyframes
---

Herkese merhabalar. Önceden web uygulamalarında animasyon yapmak için genelde jQuery kullanırdım. Ama CSS3 ile gelen yenilikler ile artık jQuery kütüphanesinin yüzüne bile bakmıyorum diyebilirim :) Bugün <strong>@keyframes</strong> ile neler yapabileceğimizden bahsedeceğim.

@keyframes özelliği ile hiç bir eklenti kullanmadan sadece CSS ile çeşitli animasyonlar yapabiliyoruz. Herhangi bir DOM elemanına kayma, renk değiştirme, büyüme, küçülme vb. efektler uygulayabiliyoruz. Kısaca @keyframes ile belirli bir zaman aralığı belirliyoruz ve bu zaman aralığında CSS ile yapıbilen her şeyi öğemize uygulayabiliyoruz. 

<h1>1. Tarayıcı Desteği</h1>
Anlatıma başlamadan önce tarayıcı desteğinden bahsetmek istiyorum. Google Chrome, Mozilla, Opera ve Safari'nin neredeyse tüm sürümleri bu özelliği destekliyor. <a href="https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp">Buraya</a> tıklayarak daha detaylı tabloya ulaşabilirsiniz.

<h1>2. Kullanım</h1>

Kullanımı oldukça basit. 

{% highlight css %}
@keyframes animasyon-ismi {
    from {
        css kodlari
    }
    to {
        css kodlari
    }
}
{% endhighlight %}

<kbd>"animasyon-ismi"</kbd> yazan yere animasyonunuzu tanımlayan istediğiniz bir değişken adını yazabilirsiniz. <strong>from</strong> kısmı bizim başlangıç değerlerimiz, <strong>to</strong> kısmı ise bitiş değerleriğimizi ifade ediyor.
From ve to ile kullanımın dışında bir de yüzdelik dilimler ile ifade ederek kullanabiliyoruz. Genelde yüzdelik dilimlerle ifade etmek daha esnek bir yapı kurmamızı sağlıyor. 

{% highlight css %}
@keyframes animasyon-ismi {
    10% {
        css kodlari
    }
    50% {
        css kodlari
    }
    100% {
        css kodlari
    }
}
{% endhighlight %}

Yukarıda animasyonumuzu 3 parçaya böldüm. Siz isterseniz 100 eşit parçaya bölebilirsiniz :) 10%, 25%, 50%, 75%, 100%...

<table class="table table-bordered">
    <tr>
        <th>
            Özellik
        </th>
        <th>Açıklama</th>
    </tr>
    <tr>Açıklama</tr>
    <tr>
        <td>Jill</td>
        <td>Smith</td> 
       
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td> 
       
      </tr>
</table>






