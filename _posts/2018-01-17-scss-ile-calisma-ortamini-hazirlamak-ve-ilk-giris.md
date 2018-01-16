---
layout: post
title: SCSS ile Çalışma Ortamını Hazırlamak ve İlk Giriş
date: 2018-01-16 23:15:43
tags:
- sass
- scss
- css
- css-preprocessor
---

Merhaba arkadaşlar bir önceki yazımda <strong>"SASS ve SCSS Nedir? Neden Kullanmalıyız ve Nasıl Kurulur?"</strong> konularına değinmiştim. Bu sefer ise <strong>SCSS</strong> ile nasıl çalışmaya başlayacağımızdan ve benim genelde kullandığım klasör yapısından bahsedeceğim. 
Bilgisayarında <strong>SCSS</strong> kurulu olmayanlar <a href="http://furkanbayram.net/sass-ve-scss-nedir-neden-kullanmaliyiz-nasil-kurulur.html" target="?blank">buradan</a> yardım alabilirler. 




Genelde giriş seviyesindeki projelerde klasör yapımı aşağıdaki gibi oluşturuyorum.

<img src="/static/img/post_image/scss-ile-calisma-ortamini-hazirlamak-ve-ilk-giris/1.png" class="img-responsive img-thumbnail" alt="">
Dikkat ettiyseniz <strong>css</strong> ve <strong>scss</strong> diye iki farklı klasörümüz var. Önceden hep css içinde çalışıyorduk ama artık scss klasörü içinde çalışacağız. 

scss klasörünün içine giriyoruz ve "style.scss" ismiyle scss dosyamızı oluşturuyoruz. (istediğiniz ismi verebilirsiniz ben genelde "style" ismini kullanıyorum.)

Oluşturduğumuz "style.scss" dosyasının içerisine aşağıdaki kodları kopyalıyoruz ve <strong>kaydediyoruz</strong>.

{% highlight scss %}
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  backgorund-color: $primary-color;
}
{% endhighlight %}

Şimdi biz bu kodları buraya yazdık ve kaydettik ama sayfamızda bir değişiklik olmadı. Çünkü bu kodların css formatına çevrilmesi gerekiyor. Yani burada yazdığımız kodların yazıldıktan hemen sonra css klasörünün içine aktarılması gerekiyor. Bunu nasıl yapacağız diye sakın korkmayın, çok basit.

Projemizin kök dizininde komut satırını açıyoruz. 
<img src="/static/img/post_image/scss-ile-calisma-ortamini-hazirlamak-ve-ilk-giris/2.png" class="img-responsive img-thumbnail" alt="">


Komut satırına aşağıdaki kodu yazıyoruz.
{% highlight bash %}
sass --watch scss:css 
{% endhighlight %}

Bu tek satırlık kod css klasörünün içinde bizim için bir css dosyası oluşturuyor. Bu işlem sayesinde scss tarafında yazdığımız her kod anında css'e otomatik olarak dönüştürülüyor.

Eğer başarılı bir şekilde tüm adımları gerçekleştirdiyseniz komut satırında şöyle bir çıktı almanız gerekiyor.
<img src="/static/img/post_image/scss-ile-calisma-ortamini-hazirlamak-ve-ilk-giris/4.png" class="img-responsive img-thumbnail" alt="">


Aşağıda scss ve css dosyalarımızın çıktısını görüyorsunuz.
<img src="/static/img/post_image/scss-ile-calisma-ortamini-hazirlamak-ve-ilk-giris/3.png" class="img-responsive img-thumbnail" alt="">
Biz kodlarımızı sadece scss kısmına yazıyoruz ve "--watch" komutu sayesinde yaptığımız her değişiklik izlenip css kısmına aktarılıyor.

<h1>Özet</h1>

1. SCSS'i bilgisayarımıza kuruyoruz. Kurulu değil ise <a href="http://furkanbayram.net/sass-ve-scss-nedir-neden-kullanmaliyiz-nasil-kurulur.html" target="?blank">buradan</a> kurabilirsiniz.
2. İsteğe bağlı olarak klasör yapısını oluşturuyoruz.
3. "scss" klasörünün içine istediğiniz isimde bir scss dosyası oluşturuyoruz. Örneğin: style.scss
4. Projemizin ana dizininde komut satırını çalıştırıyoruz.
5. Komut satırına <code> sass --watch scss:css</code> yazıyoruz ve enter'a basıp çalıştırıyoruz.
6. <strong>Html sayfamızda css dosyamızı çağırmayı unutmuyoruz.</strong>
<h4>Ve artık SCSS ile çalışmaya başlayabiliriz.</h4>

Eğer takıldığınız bir yer olursa aşağıya yorum olarak yazabilirsiniz. Bir sonraki yazıda scss'in syntax yapısına değineceğim. Kendinize iyi bakın, bol kahveler :)

