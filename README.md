# latihanIonic3
Latihan ionic informatika wearnes education center tahun 2017-2018 


INSTALL
=====================================================
install NODEJS LTS 8x
install GIT
 git config --global user.email "emailanda@gmail.com"
 git config --global user.name "Nama Anda"


Install ionic
 npm install -g ionic cordova

Install Visual Studio Code

Install Java Developmen Kit (JDK)
Install android studio
 buka sampai finish wizard lalu masuk menu SDK Manager Install SDK Ver 26


GET STARTED
===================================================
buka cmd di directory / folder project anda, lalu buat project baru dengan perintah
 ionic start myProject
 cd myProject

untuk edit project gunakan visual studio code
 code .

dari visual studio code view > Integrated Terminal pakai cmd juga boleh

jalankan ionic menggunakan di browser 
 ionic serve --lab

untuk generate page
 ionic generate page NamaHalaman
navigasi ke halaman lain perintah .ts
 this.navCtrl.push('NamaHalamanPage');

Untuk menjadikan APK dan menjalankan ke hp
 ionic cordova platform add android
 ionic cordova run android

Untuk publish APK release
 ionic cordova build android --release --prod
 -- proses signin app --

Untuk menjadikan pwa menggunakan firebase
 npm install -g firebase-tools
 firebase login
 firebase init
 firebase deploy



