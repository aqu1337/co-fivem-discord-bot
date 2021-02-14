# co-fivem-discord-bot


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
Meslek verme komutu:
!cofivem meslekver steam_hex meslek meslek_seviyesi
 
Telefon log listeleme :
!cofivem tellog steam_hex sayı
Sayı => kaç adet göstermesini istediğiniz sayıdır. (!cofivem tellog steam:11000010adab671 10) 
 
Sarı sayfaları listeleme :
!cofivem sarı sayı
Sayı => kaç adet göstermesini istediğiniz sayıdır. (!cofivem sarı 10)

Twitter listeleme :
!cofivem twitter sayı
Sayı => kaç adet göstermesini istediğiniz sayıdır. (!cofivem twitter 10)
 
```

    "discord-webhook-node": "^1.1.8",
    "discord.js": "^12.5.1",
    "mysql": "^2.18.1",
    "mysql-async-simple": "^1.0.3",
    "nodemon": "^2.0.7",  // İSTEĞE BAĞLI
    "util": "^0.12.3"
    
## Full Temiz Kurulum
herşeyin çalışması için gereklidir.
```
npm install discord-webhook-node
npm install discord.js
npm install mysql
npm install mysql-async-simple
npm install util

config.js dosyasına lisans anahtarınızı girin.

örnek :   this.lisans = "CO-FIVEM-130eca5e4e26639d3f66c8d4d4c5c6358ae9ba31";

config.js dosyasındaki mysql bilgilerinizi girin.

örnek:
        this.host = "localhost";
        this.user = "root";
        this.password = "";
        this.database = "essentialmode";

config.js dosyasını kendi istediğiniz gibi ayarlayabilirsiniz.


herşeyi tamamladıktan sonra terminale : node index.js  : yazarak başlatabilirsiniz.






```

Kurulum ve lisans için bize ulaşabilirsiniz - discord : https://cokluk.com/discord

Adresinden direk discord sunucumuza bağlanabilirsiniz.

