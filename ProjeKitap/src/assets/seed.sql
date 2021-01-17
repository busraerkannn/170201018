CREATE TABLE IF NOT EXISTS kategori(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,img TEXT);
INSERT or IGNORE INTO kategori VALUES (1, 'Edebiyat', '/assets/resim/kategori1.jpg');
INSERT or IGNORE INTO kategori VALUES (2, 'Bilim', '/assets/resim/kategori2.jpg');
INSERT or IGNORE INTO kategori VALUES (3, 'Tarih', '/assets/resim/kategori3.jpg');
INSERT or IGNORE INTO kategori VALUES (4, 'Çocuk ve Gençlik', '/assets/resim/kategori4.jpg');
INSERT or IGNORE INTO kategori VALUES (5, 'Çizgi Roman', '/assets/resim/kategori5.jpg');
INSERT or IGNORE INTO kategori VALUES (6, 'Sanat', '/assets/resim/kategori6.jpg');
INSERT or IGNORE INTO kategori VALUES (7, 'Din Tasavvuf', '/assets/resim/kategori7.jpg');
INSERT or IGNORE INTO kategori VALUES (8, 'Felsefe', '/assets/resim/kategori8.jpg');
INSERT or IGNORE INTO kategori VALUES (9, 'Hobi', '/assets/resim/kategori9.jpg');
INSERT or IGNORE INTO kategori VALUES (10, 'Ders ve Sınav Kitapları', '/assets/resim/kategori10.jpg');


CREATE TABLE IF NOT EXISTS kullanici(id INTEGER PRIMARY KEY AUTOINCREMENT,email TEXT,sifre TEXT,userName TEXT);
INSERT or IGNORE INTO kullanici VALUES (1,'ornek1@gmail.com','-456789','Büşra Erkan');


CREATE TABLE IF NOT EXISTS sepet(id INTEGER PRIMARY KEY AUTOINCREMENT,userEmail TEXT,kitapId INTEGER);


CREATE TABLE IF NOT EXISTS kitap(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT, creatorId INTEGER,img TEXT,yazarAdi TEXT,noISBN INTEGER,sayfaSayisi INTEGER,dil TEXT, fiyat REAL);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (1, 'Madalyonun içi', 1,'/assets/resim/kitap1.jpg','Gülseren Budayıcıoğlu',9789751409935,383,'Türkçe',25);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (2, 'Şeker Portakalı', 1,'/assets/resim/kitap2.jpg','José Mauro de Vasconcelos',9789750738609,182,'Türkçe',12.99);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (3, 'Hayvan Çiftliği', 1,'/assets/resim/kitap3.jpg','George Orwell',9789750719387,152,'Türkçe',13.99);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (4, 'Kürk Mantolu Madonna', 1,'/assets/resim/kitap4.jpg','Sabahattin Ali',9789753638029,160,'Türkçe',4.99);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (5, 'Kara Delikler', 2,'/assets/resim/kitap5.jpg','Stephen Hawking',9786051715513,75,'Türkçe',9.99);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (6, 'Türlerin Kökeni', 2,'/assets/resim/kitap6.jpg','Charles Darwin',9789753510257,661,'Türkçe',23.99);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (7, 'Beyin Senin Hikayen', 2,'/assets/resim/kitap7.jpg','David Eagleman',9786054729692,272,'Türkçe',22.99);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (8, 'İzafiyet Teorisi', 2,'/assets/resim/kitap8.jpg','Albert Einstein',9789754680119,144,'Türkçe',10.99);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (9, 'Son Cüret', 3,'/assets/resim/kitap9.jpg','Yılmaz Özdil',9786254440489,456,'Türkçe',19.32);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (10, 'Harry Potter ve Felsefe Taşı', 4,'/assets/resim/kitap10.jpg','J. K. Rowling',9789750802942,274,'Türkçe',15.99);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (11, 'Suikast Sınıfı 1', 5,'/assets/resim/kitap11.jpg','Yusei Matsui',9786059141529,184,'Türkçe',16.80);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (12, 'Bir Fotoğrafı Anlamak', 6,'/assets/resim/kitap12.jpg','John Berger',9786053160229,240,'Türkçe',25.99);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (13, 'Türklerin Tarihi', 3,'/assets/resim/kitap13.jpg','Prof. Dr. İlber Ortaylı ',9786050819267,320,'Türkçe',22.50);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (14, 'Dedemin Bakkalı', 4,'/assets/resim/kitap14.jpg','Şermin Yaşar ',9786058422841,200,'Türkçe',24.00);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (15, 'Kahramanlık Akademim 1. Cilt', 5,'/assets/resim/kitap15.jpg','Kohei Horikoşi',9786059520195,196,'Türkçe',13.99);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (16, 'Sanat 101', 6,'/assets/resim/kitap16.jpg','Eric Grzymkowski',9786050204322,288,'Türkçe',20.99);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (17, 'İnsanlığın Medeniyet Destanı', 3,'/assets/resim/kitap17.jpg','Roger Garaudy',9786050828498,456,'Türkçe',14.99);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (18, 'Üç Kedi Bir Dilek', 4,'/assets/resim/kitap18.jpg','Sara Şahinkanat',9789750821820,32,'Türkçe',15.99);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (19, 'Uzumaki 1.Cilt', 5,'/assets/resim/kitap19.jpg','Junji İto',9786059520133,208,'Türkçe',26.00);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (20, 'Mitoloji ve İkonografi', 6,'/assets/resim/kitap20.jpg','Bedrettin Cömert',9789944492331,272,'Türkçe',42.99);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (21, 'Ben Ney’im', 7,'/assets/resim/kitap21.jpg','Hakan Mengüç',9786053113577,320,'Türkçe',20.50);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (22, 'Diriliş Neslinin Amentüsü', 8,'/assets/resim/kitap22.jpg','Sezai Karakoç',9789123494293,68,'Türkçe',11.80);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (23, 'Kulaktan Dolma Tarifler', 9,'/assets/resim/kitap23.jpg','Şemsa Denizsel ',9786059318686,320,'Türkçe',58.90);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (24, 'Paragrafın Ritmi', 10,'/assets/resim/kitap24.jpg','Hamza Kaya',9786052330517,372,'Türkçe',16.60);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (25, 'Kesin İnançlılar', 7,'/assets/resim/kitap25.jpg','Eric Hoffer ',9786056923975,210,'Türkçe',12.70);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (26, 'İtiraflarım', 8,'/assets/resim/kitap26.jpg','Lev N. Tolstoy',9786059489133,84,'Türkçe',4.99);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (27, 'Böcek Atlası', 9,'/assets/resim/kitap27.jpg','Fatih Dikmen',9786059756006,112,'Türkçe',36.90);
INSERT or IGNORE INTO kitap(id, name, creatorId, img, yazarAdi, noISBN, sayfaSayisi,dil, fiyat) VALUES (28, 'Problemler', 10,'/assets/resim/kitap28.jpg','Fatih İhtiyaroğlu',9786058152885,223,'Türkçe',20.99);



