# 🎯 UTS Web Service Engineering  
**Project:** RESTful API Manajemen Events  
**Nama:** M. Reyhan  
**Email:** mraihan.app1@gmail.com  
**No. HP:** +62895366683512  
**Kampus/Jurusan:** (Isi sesuai jurusan dan kampus kamu)

---

## 📄 Deskripsi Proyek
Proyek ini merupakan implementasi **RESTful Web Service sederhana** menggunakan **Node.js + Express.js** untuk memenuhi tugas Ujian Tengah Semester (UTS) mata kuliah **Web Service Engineering**.

Aplikasi ini mengelola data **Events** (kegiatan seperti seminar atau workshop) dengan operasi **CRUD** lengkap:
- Membaca semua event
- Membaca detail event berdasarkan ID
- Menambah event baru
- Mengubah event
- Menghapus event

Seluruh data disimpan dalam file JSON lokal tanpa menggunakan database.

---

## ⚙️ Teknologi yang Digunakan
- **Node.js**
- **Express.js**
- **File System (fs)**
- **Nodemon** (untuk hot reload saat development)
- **Postman** (untuk pengujian API)

---

## 🧩 Struktur Folder
```
project-root/
│
├── app.js
├── controllers/
│   └── eventsController.js
├── routes/
│   └── eventsRoutes.js
├── middlewares/
│   ├── validation.js
│   └── errorHandler.js
├── data/
│   └── events.json
└── README.md
```

---

## 🚀 Cara Menjalankan Aplikasi

1. **Clone atau buat folder baru**
   ```bash
   git clone https://github.com/username/uts-restful-events.git
   cd uts-restful-events
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan server**
   ```bash
   npm run dev
   ```

4. **Buka di browser atau Postman**
   ```
   http://localhost:3000/api/info
   ```

---

## 📬 Endpoint API

| Method | Endpoint | Deskripsi | Body (JSON) | Status Response |
|---------|-----------|-----------|--------------|-----------------|
| **GET** | `/api/events` | Mendapatkan semua event | – | 200 |
| **GET** | `/api/events/:id` | Mendapatkan event berdasarkan ID | – | 200 / 404 |
| **POST** | `/api/events` | Menambah event baru | `{ "title": "", "date": "", "location": "" }` | 201 / 400 |
| **PUT** | `/api/events/:id` | Memperbarui event berdasarkan ID | `{ "title": "", "date": "", "location": "" }` | 200 / 400 / 404 |
| **DELETE** | `/api/events/:id` | Menghapus event berdasarkan ID | – | 200 / 404 |
| **GET** | `/api/info` | Informasi layanan API | – | 200 |

---

## 🧠 Contoh Request & Response

### 🔹 GET `/api/events`
**Response:**
```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "title": "Seminar IoT Kampus",
      "date": "2025-05-20",
      "location": "Aula Utama"
    }
  ]
}
```

---

### 🔹 POST `/api/events`
**Body:**
```json
{
  "title": "Workshop Node.js",
  "date": "2025-12-10",
  "location": "Lab Komputer"
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "id": 2,
    "title": "Workshop Node.js",
    "date": "2025-12-10",
    "location": "Lab Komputer"
  }
}
```

---

### 🔹 PUT `/api/events/2`
**Body:**
```json
{
  "title": "Workshop Node.js Advanced",
  "date": "2025-12-15",
  "location": "Ruang Seminar"
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "id": 2,
    "title": "Workshop Node.js Advanced",
    "date": "2025-12-15",
    "location": "Ruang Seminar"
  }
}
```

---

### 🔹 DELETE `/api/events/2`
**Response:**
```json
{
  "status": "success",
  "message": "Event berhasil dihapus"
}
```

---

### 🔹 GET `/api/info`
**Response:**
```json
{
  "status": "success",
  "service": "Events API",
  "version": "1.0.0",
  "description": "API sederhana untuk mengelola data events (UTS)",
  "endpoints": {
    "getAll": "GET /api/events",
    "getById": "GET /api/events/:id",
    "create": "POST /api/events",
    "update": "PUT /api/events/:id",
    "delete": "DELETE /api/events/:id",
    "info": "GET /api/info"
  }
}
```

---

## 🧱 Format File `data/events.json`
```json
[
  {
    "id": 1,
    "title": "Seminar IoT Kampus",
    "date": "2025-05-20",
    "location": "Aula Utama"
  }
]
```

---

## ✅ Penerapan 7 Prinsip RESTful API

| No | Prinsip | Implementasi dalam Proyek |
|----|----------|---------------------------|
| 1 | **Resource-Oriented URI** | Menggunakan endpoint `/api/events` (kata benda jamak) |
| 2 | **HTTP Methods** | GET, POST, PUT, DELETE digunakan sesuai operasi CRUD |
| 3 | **Stateless Communication** | Setiap request membawa data lengkap tanpa session |
| 4 | **Proper Status Code** | Menggunakan 200, 201, 400, 404, 500 sesuai kondisi |
| 5 | **JSON Response Format** | Semua response dalam format JSON terstruktur |
| 6 | **Validation & Error Handling** | Validasi input dan middleware penanganan error diterapkan |
| 7 | **Discoverability** | Endpoint `/api/info` menyediakan metadata API |

---

## 📸 Bukti Screenshot (Postman)
> Sertakan 5 screenshot hasil pengujian berikut:

1. GET `/api/events`
2. GET `/api/events/:id`
3. POST `/api/events` (berhasil)
4. POST `/api/events` (gagal validasi)
5. DELETE `/api/events/:id`

---

## 📚 Lisensi
Proyek ini dibuat untuk tujuan pembelajaran dan memenuhi UTS mata kuliah **Web Service Engineering**.  
Dilarang menggunakan atau mendistribusikan ulang untuk tujuan komersial tanpa izin pembuat.

---

**© 2025 – M. Reyhan**
