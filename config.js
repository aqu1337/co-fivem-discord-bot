module.exports = class Config  {

    constructor(){
        // CoMaven Tarafından ❤️ ile oluşturulmuştur.

        //CO-FIVEM LISANS
        this.lisans = "CO-FIVEM-LISANS";
        this.test_mod = false;

        // FIVEM 
        this.dc_aktif_on = "CoMaven | Aktif oyuncu 0/";
        this.dc_durum = true; // ONLINE SAYISI 
        this.yenileme_zamani = 5000; // 1000 = 1sn
        this.sunucu_ismi = "CoMaven";
        this.sunucu_ip_adresi = "127.0.0.1";
        this.sunucu_ts3_ip = "ts3.cokluk.com";
        this.sunucu_aktif_yazi = "Sunucu aktif.";
        this.sunucu_aktif_resim = "https://cdn.discordapp.com/attachments/769585952389070849/812260890325024778/giphy_3.gif";
        this.bakim_yazisi = "Bakım"; 
        this.sunucu_bakim_resim = "https://cdn.discordapp.com/attachments/769585952389070849/812260891696824340/giphy_4.gif";

        this.sunucu_durum_kanali = true;
        this.durum_yenileme_zamani = 5000;  // 1000 = 1sn
        this.sunucu_durum_kanali_id = "812154522721845269";
 
        //KOMUTLAR
        this.durum = "!durum";
        this.durum_perm = false; // true YAPARSANIZ SADECE rol_izni OLANLAR KULLANIR


        //WEBSOCKET BILGILERI
        this.socket_bilgi = "ws://127.0.0.1:30999/"; //IP:PORT


        //MYSQL - UZAK - LOCAL DESTEKLENIR
        this.host = "localhost";
        this.user = "root";
        this.password = "";
        this.database = "essentialmode";
 
        //CO-FIVEM
        this.prefix = "!";
        this.prefix2 = "cofivem";
        this.discord_token = "BURAYA DISCORD TOKENINIZ";
        this.rol_izni =  "CO-FIVEM";
        this.destek_mesaj = false; // DESTEK VARSAYILAN KAPALI GELİR
        this.guncelleme_kontrol = true;
        this.destek_ekibi_id_listesi =  ["686944474945159168" , "765894055820263435", "810742313797287967"];
 
    }


}
