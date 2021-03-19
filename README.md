# co-fivem-discord-bot
 

| | | |
|:-------------------------:|:-------------------------:|:-------------------------:|
|<img width="1604" alt="screen shot 2017-08-07 at 12 18 15 pm" src="https://cdn.discordapp.com/attachments/769585952389070849/822017853347069952/unknown.png">  Oyuncu listesi |  <img width="1604" alt="screen shot 2017-08-07 at 12 18 15 pm" src="https://cokluk.com/dl/co2.png"> Oyuncu sayısı |<img width="1604" alt="screen shot 2017-08-07 at 12 18 15 pm" src="https://cokluk.com/dl/co3.png"> Sunucu durumu |

Kurulum ve lisans için discord adresimize bekliyoruz : [![Discord](https://img.shields.io/discord/811163975700971540?label=Discord&logo=Discord)][discord]


[discord]: https://discord.gg/QeFJDamKNS


Bu paketin çalışması için gereken fivem scriptleri = co_logger ve WebSocketServer 'dir.

##  Çalışması için gereken modüller:

```
"dependencies": {
    "discord-webhook-node": "^1.1.8",
    "discord.js": "^12.5.1",
    "mysql": "^2.18.1",
    "mysql-async-simple": "^1.0.3",
    "util": "^0.12.3"
  }
  ```
  
## Komutlar

```

Server.cfg grubu atama:
!cofivem cfg_grup steam_hex superadmin
[Bu verilen grup yetkisi kalıcı olmayacaktır, sunucu yeniden başlatıldığında silinecektir.]

Uzaktan komut gönderme:
!cofivem komut yazmak istediğiniz komut 
Örnek cfg komutları , set, exec, sets, start, stop, restart, ensure, add_ace, add_principal &&


Meslek verme komutu [ID]:
!cofivem meslek id meslek seviye

Meslek verme komutu [HEX]:
!cofivem meslekver steam_hex meslek meslek_seviyesi
 
Telefon log listeleme :
!cofivem tellog steam_hex sayı
Sayı => kaç adet göstermesini istediğiniz sayıdır. (!cofivem tellog steam:11000010adab671 10) 
 
Araç verme komutu [SPAWN + ARAÇ SAHİPLİĞİ]:
!cofivem arac_sahip id araç
id = oyuncu id'si
araç => aracın kodu örnek : dubsta 
örnek kullanım : (!cofivem arac_sahip 1 dubsta) 

Araç verme komutu [SADECE SPAWN]:
!cofivem arac id araç
id = oyuncu id'si
araç => aracın kodu örnek : dubsta 
örnek kullanım : (!cofivem arac 1 dubsta) 

Item verme komutu :
!cofivem itemver id item sayı
id = oyuncu id'si
item => itemin kodudur.
Sayı => kaç adet verilmesini istediğiniz sayıdır.
örnek kullanım : (!cofivem itemver 1 cash 9999) 

Sarı sayfaları listeleme :
!cofivem sarı sayı
Sayı => kaç adet göstermesini istediğiniz sayıdır. (!cofivem sarı 10)

Twitter listeleme :
!cofivem twitter sayı
Sayı => kaç adet göstermesini istediğiniz sayıdır. (!cofivem twitter 10)

Revive :
!cofivem revive id
id => Hangi idli kullanıcının etkilenmesini istediğinizi yazmalısınız. (!cofivem revive 10)

Kick :
!cofivem kick id
id => Hangi idli kullanıcının etkilenmesini istediğinizi yazmalısınız. (!cofivem kick 10)

Steam hex link ile :
!cofivem hex_link link
link => Kullanıcının steam linkini istenilen yazmalısınız. (!cofivem hex_link https://steamcommunity.com/id/varossevmem)

Steam hex id ile :
!cofivem hex_id id
id => Kullanıcının steam64 idsini istenilen yazmalısınız. (!cofivem hex_id 76561198142371441)

Tüm destek ekibine mesej:
!destek = yazmanız eğer destek özelliği açıksa tüm destek ekibine mesaj gönderimi yapacaktır.

Whitelist ekleme [HEX]:
!cofivem wl_ekle steam_hex

Whitelist silme [HEX]:
!cofivem wl_sil steam_hex


Durum kanalını bakıma veya aktif hale getirebilirsiniz:
!cofivem durum 1 = aktif 
!cofivem durum 0 = bakım 
 
 
```

    "discord-webhook-node": "^1.1.8",
    "discord.js": "^12.5.1",
    "mysql": "^2.18.1",
    "mysql-async-simple": "^1.0.3",
    "websocket": "^2.0.7", 
    "util": "^0.12.3"
    
## Full Temiz Kurulum
herşeyin çalışması için gereklidir.
```
npm install discord-webhook-node
npm install discord.js
npm install mysql
npm install mysql-async-simple
npm install util
npm install websocket

config.js dosyasına lisans anahtarınızı girin.

örnek :   this.lisans = "CO-FIVEM-130eca5e4e26639d3f66c8d4d4c5c6358ae9ba32";

config.js dosyasındaki mysql bilgilerinizi girin.

örnek:
        this.host = "localhost";
        this.user = "root";
        this.password = "";
        this.database = "essentialmode";



Socket kurulum :
  socket ip adresinizi ve portunuzu yazmanız gerek, port değiştirmek için server.cfg dosyanıza 
  set websocket_port 30999 // Yazmanız yeterli olacaktır, aksi takdirde portunuz 80 olacaktır ve web portunuzda çakışmaya neden olur.
  
  this.socket_bilgi = "ws://127.0.0.1:30999/"; //IP:PORT


Durum kanalı ayarları :
        this.sunucu_durum_kanali = true; // DURUM KANALINI AKTİF HALE GETİRİR
        this.durum_yenileme_zamani = 5000;  // KANALI KAÇ SANİYEDE BİR GÜNCELLEMESİNİN AYARDIR. 1000 = 1 SANİYEDİR.
        this.sunucu_durum_kanali_id = "812154522721845269"; // DİSCORD KANAL ID'sidir.
        
        
Destek mesaj ayarları :

        this.destek_mesaj = false; // DESTEK VARSAYILAN KAPALI GELİR, ID'LERE MESAJ GİTMESİNİ İSTİYORSANIZ AÇIN.
        this.destek_ekibi_id_listesi =  ["686944474945159168" , "765894055820263435", "810742313797287967"]; // DESTEK EKİBİ DİSCORD ID'LERİDİR.
        
Sunucu durum güncelleme ayarı (Durumda online sayısı):
        this.dc_durum = true; // ONLINE SAYISINI GÖSTERME AÇMA VE KAPATMA
        this.yenileme_zamani = 5000; / SAYIYI KAÇ SANİYEDE BİR GÜNCELLEMESİNİN AYARDIR. 1000 = 1 SANİYEDİR.



config.js dosyasını kendi istediğiniz gibi ayarlayabilirsiniz.


herşeyi tamamladıktan sonra terminale : node index.js  : yazarak başlatabilirsiniz.







```



Kurulum ve lisans için bize ulaşabilirsiniz - discord : https://discord.gg/QeFJDamKNS

Adresinden direk discord sunucumuza bağlanabilirsiniz.

CoMaven Tarafından ❤️ ile oluşturulmuştur.

