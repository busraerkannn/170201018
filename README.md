# 2. EL ve YENİ KİTAP AL SAT UYGULAMASI


`IONIC Projesi`

_Büşra Erkan_

_Kocaeli Üniversitesi Bilgisayar Mühendisliği_

### Özet

'2. El ve Yeni Kitap Al Sat Uygulaması' projesi sıfır veya ikinci el kitapları alabilmeyi veya satabilmeyi sağlayan uygulamadır. Birçok kategori ile ihtiyaç olan kitaplar bulunabilir. Kullanılmayan kitaplar kolay şekilde yüklenerek ilan oluşturulabilir.

#### 1. Giriş

- Bu şablonu kullanmaya başlamak için aşağıdaki seçeneklerden birini seçerek başlayın:

	- En son sürümü buradan indirin
    - Depoyu klonlayın(Clone the repo):  `git clone https://github.com/busraerkannn/170201018.git`
    - Fork the repo

- Projeyi kendi bilgisayarınızda açın.
- Projeyi çalıştırmadan önce npm bağımlılıklarının yüklenmesi için terminalden şu komutu yazın: `   $ npm install` Bu işlem biraz uzun sürebilir.
- 2.El ve Yeni Kitap Al Sat Uygulaması'nı başlatmak için terminal ekranına şu komutu yazın: `$ ionic cordova run browser`
- Komutu çalıştırdığınızda karşısına bu soru çıkacak: `
Platform browser is not installed! Would you like to install it? (Y/n)`

- Uygulama tarayıcı üzerinden başlatılacağı için bu soruya `y` cevabını vermeniz gerekmektedir.
	- **NOT: SQLite Porter dahil edildiği için proje** `ionic serve` **komutuyla çalışmamaktadır. Projenin başarılı bir şekilde çalışması için lütfen bu uyarıyı dikkate alın.**
- Bu kodu çalıştırdıktan kısa bir süre sonra uygulama tarayıcı üzerinde çalışmaya başlayacaktır. 
- Uygulama çalıştığında çıkan ilk ekran 'Giriş' ekranıdır. Burada kayıtlı e-mail ve şifre girilerek uygulamaya giriş yapılır.
- Giriş yapıldıktan sonra çıkan ilk ekran 'Anasayfa' ekranıdır. Burada uygulamada olup öne çıkan kitaplar ve arama yapma seçeneği bulunur.
- Kullanıcı bir kitaba tıkladığında karşısına'Kitap Bilgileri' sayfası çıkar.  Burada tıklanılan kitabın bilgileri ve sepete ekleme butonu gelir.
- Sol üstte bulunan geri butonuna tıkladığında tekrar 'Anasayfa' ekranına geri dönebilir.
- Kullanıcı arama seçeğine tıkladığı zaman karşısına 'Arama' ekranı çıkmaktadır. İstenilen kitabın adı buraya yazılarak kitabın olup olmadığına bakılabilir. Eğer kitap varsa kitabın adının yazıldığı bir sonuç çıkacaktır ve buna tıklayarak kitabın bilgilerine ulaşıp sepete ekleme yapılabilir.
- Sol üstte bulunan geri butonlarıyla 'Anasayfa' ekranına dönülebilir.
- 'Anasayfa' seçeğinden başka 'Kategoriler', 'Kitap Satma', 'Sepetim','Hesabım' olarak 4 seçenek bulunur.
- 'Kategoriler' seçeneğine tıklandığında 10 kategori adı ve kategoriyi temsil eden görseller gelmektedir.
- Kullanıcı herhangi bir kategoriye tıkladığında başka bir sayfa açılmaktadır.
- Açılan sayfada kategoriye ait kitapların ismi, fotoğrafı, fiyatı, yazar adı bilgileri gelir. Bu kitaplardan herhangi birine tıklandığı zaman kitap bilgilerinin ve sepete ekleme butonunun olduğu 'Kitap Bilgileri' sayfası açılır.
- Kullanıcı 'Kitap Satma' seçeneğine tıkladığında kitap satmak için kitap bilgilerinin eklendiği sayfa çıkmaktadır.
- Burada istenilen tüm bilgiler girilip kitap ekle butonuna tıklandığı zaman kitap uygulamaya yüklenir.
- Kullnıcı 'Sepetim' seçeğine tıkladığı zaman sepete eklenen kitap varsa eklenen kitaplar görülür yoksa ekran boş olarak gelmektedir.
- Kullanıcı 'Hesabım' sayfasına tıkladığı zaman kendisiyle ilgili bilgileri görebilir.

#### 2. Temel Bilgiler

Program Ionic 5 kullanılarak yapılmıştır. Veri tabanı için SQLite Porter kullanılmıştır.

#### 3. Tasarım

##### 3.1 Veri Tabanı

Projede veri tabanı olarak SQLite Porter kullanılmaktadır. 

- Veritabanını kullanabilmek için öncelikle şu kodu yazarak bir service oluşturuldu:

`ionic g service services/database`

- Daha sonra sayfalar oluşturuldu.

```
ionic g page pages/home
ionic g page pages/hesap
ionic g page pages/login
ionic g page pages/arama
ionic g page pages/sale
ionic g page pages/kitapDetay
ionic g page pages/developer
ionic g page pages/developers
ionic g page pages/basket
ionic g page pages/detay
ionic g page pages/detayHome
```

- SQLLite Porter kurulumu şu kodlar ile tamamlandı:

```
npm install @ionic-native/sqlite @ionic-native/sqlite-porter
 
ionic cordova plugin add cordova-sqlite-storage

ionic cordova plugin add uk.co.workingedge.cordova.plugin.sqliteporter
```

- `/assets/` içine `seed.sql` adında bir dosya eklendi. Bu dosyanın içinde **kategori** , **kitap** , **sepet** ve **kullanici** tabloları oluşturuldu. 'kategori' tablosunda integer olarak otomatik oluişturulan bir id, text tipinde kategori adının tutulduğu name ve yine text tipinde görüntünün dosya yolunun alındığı img sütunları bulunmaktadır. 'kitap' tablosunda ise integer olarak otomatik oluişturulan bir id, text tipinde kitap adı tutulan name, integer tipinde kategori numarasının tutulduğu creatorID, text tipinde kitap fotoğrafı için dosya yolunun gösterildiği img, text tipinde kitap yazar bilgisinin tutulduğu yazarAdi, integer tipinde kitap ISBN numarasının tutulduğu noISBN, integer tipinde kitap sayfa sayısının tutulduğu sayfaSayisi, text tipinde kitabın dil bilgisinin tutulduğu dil ve real tipinde kitabın fiyat bilgisinin tutulduğu fiyat sütunları bulunmaktadır. 'kullanici' tablosunda integer olarak otomatik oluişturulan bir id, text tipinde kullanıcı e-mail bilgisinin tutulduğu email, text tipinde şifre bilgisinin tutulduğu sifre, text tipinde kullanıcının ad ve soyadının tutulduğu userName sütunları bulunmaktadır. 'sepet' tablosunda integer olarak otomatik oluişturulan bir id, text tipinde kullanıcı e-mail bilgisinin tutulduğu email ve integer tipinde sepete eklenen kitap numarasına ait kitapId sütunları bulunmaktadır.
- Dosyayı yüklemek için `app/app.module.ts` içine `HttpClientModule` ekledim.
- `services/database.service.ts` dosyasında gerekli değişikleri yaptım.
- `projeKitap.db` adında bir sqlite oluşturdum. 
- Sayfalara veri yükleyebilmek adına SQL sorgularının olduğu fonksiyonları oluşturdum.
	- `loadKategori()` kategori tablosundan kategori bilgilerini alır.
	- `loadKitap(id)` fonksiyona gelen id bilgisi(ile ait tanımlayıcı) koşuluyla kitap tablosundan o kategoriye ait kitap listesi alınıyor.
	- `loadKitapAdi(value)` gelen value bilgisi(arama yapılan kitap adı) koşuluyla kitap tablosundan kitaba ait id ve kitap adı bilgilerini alır.
	- `loadAnasayfa()` kitap tablosundan kitap bilgilerini alır.
	- `loadSepet()` sepet tablosundan sepete eklenen kitap bilgilerini alır.
	- `addKitap(name,kategori,img,yazar,no,sayfa,dil,fiyat)` kitap tablosuna fonksiyona gelen bilgiler kullanılarak kitap eklemesi yapılır.
	- `addSepet(userEmail,kitapId)` sepet tablosuna fonksiyona gelen bilgiler kullanılarak sepete eklenen kitap eklenir.
	- `loginKontrol(email,sifre)` fonksiyona gelen bilgilerle kullanici tablosu kullanılarak doğru giriş yapılıp yapılmadığı kontrol edilir.
	- `getLoginState(email,sifre)` loginKontrol(email,sifre) fonksiyonu çağrılıyor ve doğru giriş yapılıp yapılmadığının sonucu döndürülüyor.
	- `getKategori()` kategori bilgilerinin olduğu nesne sonuç olarak döndürülüyor.
	- `getKitaplar(id)` loadKitap(id) fonksiyonu çağırılıyor daha sonra kategoriye ait kitap bilgileri nesnesi sonuç olarak döndürülüyor.
	- `getKitapAdlari2(value)` loadKitapAdi(value) fonksiyonu çağırılıyor daha sonra arama sonucuna ait kitap bilgileri nesnesi sonuç olarak döndürülüyor.
	- `getAnasayfa()` Anasayfa ekranına ait kitap bilgileri nesnesi sonuç olarak döndürülüyor.
	- `getSepet()` loadSepet() fonksiyonu çağırılıyor daha sonra sepete eklenen kitaplara ait kitap bilgileri nesnesi sonuç olarak döndürülüyor.
	-  `getAktif()` Uygulamaya giriş yapan kullanıcıya ait email bilgisi sonuç olarak döndürülüyor.
	-  `getKategoriID(id)` fonksiyona gelen id bilgisi(ile ait tanımlayıcı) koşuluyla kategori tablosundan o kategoriye ait bilgiler alınıyor.
	- `getKitap(id)` fonksiyona gelen id bilgisi(ile ait tanımlayıcı) koşuluyla kitap tablosundan o kitaba ait bilgiler alınıyor.
	- `getBilgi(item)` fonksiyona gelen item bilgisi(aktif kullanıcıya ait e-mail) koşuluyla kullanici tablosundan o kullanıcıya ait bilgiler alınıyor.

- Yukarıdaki fonksiyonlarda kullanmak üzere üç nesne tanımladım. Bunlar: `Cat, Bilgi, Kitaplar` .
- Veri tabanı bağlantısının sağlanması için bağlantıyı yapacağım sayfaların .ts dosyalarına `DatabaseService` i ve çekeceğim veri türüne ait nesneyi `./../../services/database.service` ile import ettim. (Örnek: `import { DatabaseService, Kitaplar } from './../../services/database.service' `

##### 3.2 Sayfaların Özellikleri

Projede login, home, basket, detay, detay-home, developer, developers, developer, hesap, kitap-detay ve sale olmak üzere 11 sayfa bulunmaktadır. Sayfalar projenin src > app > pages klasörü altında yer almaktadır.

- **Login:** Bu sayfa uygulama başlatıldığında ortaya çıkan ilk sayfadır. Uygulamaya giriş yapmayı sağlar. Giriş yapmak için sadece `seed.sql` dosyasının içinde olan kullanici tablosuna eklenmiş kullanıcı bilgileri kullanılabilir. Sayfa açıldığında otomatik olarak bu tabloda olan kullanıcı bilgilerinden biri gelir. Giriş butonuna bastıktan sonra kısa bir süre beklenir ve giriş yapılır.

	**NOT:Bu sayfada `Reactive Form` kullanılmıştır.**
- **Home:** Bu sayfa uygulamaya giriş yaptıktan sonra açılan sayfadır.  Veri tabanından bu sayfada gösterilecel verilerin çekilebilmesi için yukarıda anlatılan `getAnasayfa()` fonksiyonu çağırılır. Kitaplar gösterilir.Arama yapmak için arama seçeneğine tıklandığında arama sayfasına yönlendirilmektedir. Herhangi bir kitaba tıklanıldığı zaman o kitaba ait bilgilerin gösterildiği sayfaya yönlendirilir. Bunun için home sayfasından detay-home sayfasına bir id bilgisi gönderilmektedir. id bilgisi gönderebilmek için `app-routing.module.ts` üzerinde home sayfasını şöyle tanımladım:
```
const routes: Routes = [
...

{ path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
{ path: 'home/:id', loadChildren: './pages/detay-home/detay-home.module#DetayHomePageModule' },

...
];
```
- **detay-home:** Seçilen kitaba ait bilgilerin gösterildiği sayfadır. Home sayfasından alınan id bilgisiyle yukarıda tanımlanan `getKitap(id)` fonksiyonu çağırılarak ilgili bilgilerin alınması sağlanır. Eğer bir kitap sepete eklenecekse `addSepet()` fonksiyonu çağrılır. Sepete ekleme yaparken aktif kullanıcı bilgisinin alınması için `getAktif()` fonskiyonu çağılır.
- **Arama:** Arama yapmak için açılan sayfadır. Arama yapılan kitap adının sonucunu almak için `getKitapAdlari2(value)` fonksiyonu çağrılır. Eğer kitap varsa çıkan sonuca tıklanıldığı zaman detay sayfasına yönlendirilmektedir.Bunun için arama sayfasından detay sayfasına bir id bilgisi gönderilmektedir. id bilgisi gönderebilmek için `app-routing.module.ts` üzerinde home sayfasını şöyle tanımladım: 
```
const routes: Routes = [
...

{ path: 'arama',loadChildren: () => import('./pages/arama/arama.module').then( m => m.AramaPageModule)
},
{ path: 'arama/:id', loadChildren: './pages/detay/detay.module#DetayPageModule' },

...
];
```
- **detay:** Seçilen kitaba ait bilgilerin gösterildiği sayfadır. Arama sayfasından alınan id bilgisiyle yukarıda tanımlanan `getKitap(id)` fonksiyonu çağırılarak ilgili bilgilerin alınması sağlanır. Eğer bir kitap sepete eklenecekse `addSepet()` fonksiyonu çağrılır. Sepete ekleme yaparken aktif kullanıcı bilgisinin alınması için `getAktif()` fonskiyonu çağılır.
- **developers:** Kategorilerin listelendiği sayfadır. Kategorilerin listelenmesi için `getKategori()` fonksiyonu çağırılarak ilgili bilgilerin alınması sağlanır. Bir kategori seçildiğinde kitapların listelenmesi için developer sayfasına yönlendirilmektedir. Bunun için developers sayfasından developer sayfasına bir id bilgisi gönderilmektedir. id bilgisi gönderebilmek için `app-routing.module.ts` üzerinde home sayfasını şöyle tanımladım: 
```
const routes: Routes = [
...

{ path: 'developers', loadChildren: './pages/developers/developers.module#DevelopersPageModule' },
{ path: 'developers/:id', loadChildren: './pages/developer/developer.module#DetayPageModule' },

...
];
```
**developer:** Seçilen kategoriye ait kitapların listelendiği sayfadır. Kitapların listelenmesi için `getKitaplar()` fonksiyonu çağırılarak ilgili bilgilerin alınması sağlanır. Bir kitap seçildiğinde o kitaba ait bilgilerin gösterildiği sayfaya yönlendirilir. Bunun için developer sayfasından kitap-detay sayfasına bir id bilgisi gönderilmektedir. id bilgisi gönderebilmek için `app-routing.module.ts` üzerinde home sayfasını şöyle tanımladım: 
```
const routes: Routes = [
...


{ path: 'developer/:id', loadChildren: './pages/kitap-detay/kitap-detay.module#KitapDetayPageModule' },

...
];
```
- **kitap-detay:** Seçilen kitaba ait bilgilerin gösterildiği sayfadır. developer sayfasından alınan id bilgisiyle yukarıda tanımlanan `getKitap(id)` fonksiyonu çağırılarak ilgili bilgilerin alınması sağlanır. Eğer bir kitap sepete eklenecekse `addSepet()` fonksiyonu çağrılır. Sepete ekleme yaparken aktif kullanıcı bilgisinin alınması için `getAktif()` fonskiyonu çağılır.
- **sale:** Uygulamaya kitap eklemek için kullanılan sayfadır. Kitap eklemek  için sayfadaki tüm bilgiler girildikten sonra  `addKitap()` fonksiyonu çağırılarak kitap eklenir.
- **basket:** Kullanıcının sepete eklediği kitapları görmek için kullanılan sayfadır. Sepette olan kitapları listelemek için `getSepet()` fonksiyonu çağırılarak kitaplar listelenir.
- **hesap:** Kullanıcının bilgilerinin gsterildiği sayfadır. Hangi kullanıcının aktif olduğunu öğrenmek için ve kullanıcıya ait bilgileri almak için sırasıyla `getAktif()` ve `getBilgi(item)`fonksiyonları çağırılır. 

#### 4. Ekran Görüntüleri

`Giriş Ekranı`

![](/img/img1.PNG)

`Anasayfa Ekranı`

![](/img/img2.PNG)

`Kategoriler Ekranı`

![](/img/img3.PNG)

`Kitap Satma Ekranı`

![](/img/img4.PNG)

`Sepetim Ekranı`

![](/img/img7.PNG)

`Hesabım Ekranı`

![](/img/img5.PNG)

`Kitap Bilgileri Ekranı`

![](/img/img6.PNG)
