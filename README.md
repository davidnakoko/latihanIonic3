# latihanIonic3
Latihan ionic informatika wearnes education center tahun 2017-2018 


INSTALL
=====================================================
install NODEJS LTS 8x <br />
install GIT <br />
 <code>git config --global user.email "emailanda@gmail.com"</code><br />
 <code>git config --global user.name "Nama Anda"</code><br />

Install ionic <br />
 <code>npm install -g ionic cordova</code><br />

Install Visual Studio Code ,<br />

Install Java Developmen Kit (JDK) <br />
Install android studio <br />
 buka sampai finish wizard lalu masuk menu SDK Manager Install SDK Ver 26 <br />


GET STARTED
===================================================
buka cmd di directory / folder project anda, lalu buat project baru dengan perintah <br />
 <code>ionic start myProject</code> <br />
 <code>cd myProject</code> <br />

untuk edit project gunakan visual studio code <br />
 <code>code .</code> <br />

dari visual studio code view > Integrated Terminal pakai cmd juga boleh <br />

jalankan ionic menggunakan di browser <br />
 <code>ionic serve --lab </code><br />

untuk generate page <br />
 <code>ionic generate page NamaHalaman</code> <br />
navigasi ke halaman lain perintah .ts <br />
 this.navCtrl.push('NamaHalamanPage'); <br />

Untuk menjadikan APK dan menjalankan ke hp <br />
 <code>ionic cordova platform add android</code> <br />
 <code>ionic cordova run android</code> <br />

Untuk publish APK release <br />
 <code>ionic cordova build android --release --prod </code><br />
 -- proses signin app -- <br />

Untuk menjadikan pwa menggunakan firebase <br />
 <code>npm install -g firebase-tools </code><br />
 <code>firebase login </code><br />
 <code>firebase init </code><br />
 <code>firebase deploy </code><br />



