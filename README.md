# To Do List App
Aplikasi untuk mencatat list todo yang perlu dilakukan. Dilengkapi dengan fitur search dan filter serta check mark todo.

![image](https://github.com/user-attachments/assets/4e1e2962-670a-405e-af14-bdf059b10fd7)

# Fitur
1. Add todo
2. Edit todo
3. Delete todo
4. Check mark todo yang sudah selesai
5. Filter todo berdasarkan check mark
6. Search todo berdasarkan title dan content

# Struktur
Aplikasi ini dibuat menggunakan struktur atomic design. Atomic Design adalah metodologi desain antarmuka yang bertujuan untuk menciptakan sistem desain yang lebih konsisten, terstruktur, dan mudah dikelola. Metodologi ini terinspirasi oleh konsep kimia, di mana antarmuka dibangun seperti struktur molekul, dimulai dari komponen-komponen terkecil hingga menjadi halaman lengkap.

Atomic design terbagi menjadi 5 tingkatan:
1. **Atom** => Elemen Ui terkecil yang merupakan blok pembangun dasar
2. **Molekul** => Kombinasi atom yang bekerja sebagai satu unit
3. **Organisme** => Komponen yang lebih kompleks, terbentuk dari molekul dan atom
4. **Template** => Template adalah tata letak dasar yang mengatur organisme ke dalam struktur halaman.
5. **Pages** => Pages adalah implementasi konkret dari template dengan data atau konten spesifik.

Atomic design mempunyai manfaat reusabilitas, pemeliharaan yang mudah dan konsistensi UI pada aplikasi.

# Teknologi yang digunakan
1. **Expo** => Framework untuk membuat Aplikasi React Native dengan konfigurasi proyek yang sederhana. Expo digunakan pada proyek ini karena memungkinkan pengembangan aplikasi dengan cepat tanpa perlu mengkhawatirkan pengaturan khusus perangkat atau dependensi kode asli. Namun Expo mempunyai keterbatasan akses native module. 
2. **Redux** => Library untuk state management global, memungkinkan kita untuk mengakses state yang sama pada halaman yang berbeda. Redux digunakan untuk management state global karena dilengkapi dengan fitur midleware yang lengkap, salah satunya dapat dikombinasikan dengan asyncstorage. Redux juga mempunyai performance yang baik untuk struktur aplikasi yang kompleks.
3. **Asyncstorage** => Library storage berdasarkan key-value yang asycnchronous dan unencrypted. Bersama dengan Redux, asyncstorage digunakan untuk menyimpan state Redux secara lokal agar dapat diakses kembali saat aplikasi dimulai.
4. **React Native Reanimated** => Library untuk menerapkan animasi pada react native. Animasi di terapkan pada transisi UI dan efek interaksi pada UI.
5. **React Native uuid** =>Library untuk mengasilkan UUID (Universally Unique Identifier). UUID adalah serangkaian karakter unik yang sering digunakan sebagai identifier. Library ini digunakan untuk memastikan setiap ID todo yang dibuat benar-benar unik.
