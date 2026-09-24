# 🎨 Creative Media Student Portfolio (เว็บไซต์พอร์ตโฟลิโอสื่อนฤมิต)

เว็บไซต์ Portfolio ส่วนตัวสำหรับนักศึกษาสาขาสื่อนฤมิต (Creative Media) ในรูปแบบ Landing Page ที่มีความสวยงาม ทันสมัยระดับมืออาชีพ ด้วยสไตล์ **Glassmorphism**, **Modern Gradients**, ธีมสี **ฟ้า - เหลือง (Blue & Yellow)** พร้อมลูกเล่น Interactive ครบครัน

---

## 📁 โครงสร้างโปรเจกต์ (Folder Structure)

```text
webportfolio/
├── index.html                   # ไฟล์หน้าแรก (Home Landing Page)
├── about.html                   # หน้าเกี่ยวกับฉัน (About Me, ประวัติ, การศึกษา, เป้าหมาย)
├── skills.html                  # หน้าทักษะความสามารถ (Skills, 10 ทักษะสื่อ & เทคโนโลยี)
├── portfolio.html               # หน้าผลงาน (Portfolio, 6 ผลงาน, ตัวกรอง และ Modal รายละเอียด)
├── contact.html                 # หน้าติดต่อ (Contact, ช่องทาง Social Media และฟอร์มส่งข้อความ)
├── README.md                    # เอกสารคู่มือการใช้งานและปรับแต่ง
└── assets/
    ├── css/                     # แยกไฟล์ CSS ตามส่วนเมนูและโครงสร้าง
    │   ├── variables.css        # โทนสี ธีมฟ้า-เหลือง Dark/Light tokens & fonts
    │   ├── navbar.css           # สไตล์แถบเมนู Sticky & Glassmorphism
    │   ├── hero.css             # สไตล์ส่วน Hero, Orb Gradients, Avatar Ring
    │   ├── about.css            # สไตล์ส่วนเกี่ยวกับฉัน, ไทม์ไลน์, การศึกษา
    │   ├── skills.css           # สไตล์การ์ดทักษะ 10 ทักษะ และหลอดระดับ
    │   ├── portfolio.css        # สไตล์แสดง 6 ผลงาน, ฟิลเตอร์, และป๊อปอัป Modal
    │   ├── contact.css          # สไตล์ช่องทางติดต่อโซเชียลมีเดีย และแบบฟอร์ม
    │   └── style.css            # สไตล์รวมหลัก พรีโหลดเดอร์ ปุ่ม Back to top
    ├── js/                      # แยกไฟล์ JavaScript ตามโมดูลฟังก์ชัน
    │   ├── theme.js             # ควบคุม Dark / Light Mode พร้อมบันทึกใน LocalStorage
    │   ├── navigation.js        # แถบเมนู Sticky, ScrollSpy ไฮไลต์เมนูตามตำแหน่งเลื่อน
    │   ├── portfolio.js         # ระบบฟิลเตอร์ผลงาน และโหลดข้อมูลใส่ Modal อัตโนมัติ
    │   └── main.js              # จัดการ Preloader, Scroll-to-Top, Scroll Reveal, แบบฟอร์ม
    └── images/                  # รูปภาพเวกเตอร์ SVG ความละเอียดสูง คมชัดทุกหน้าจอ
        ├── favicon.svg          # ไอคอนแท็บเบราว์เซอร์
        ├── profile-avatar.svg   # รูปโปรไฟล์จำลองสไตล์ครีเอทีฟ
        ├── project-1.svg        # จำลองผลงาน Graphic Design (Brand Identity)
        ├── project-2.svg        # จำลองผลงาน Photography (Cinematic Portraits)
        ├── project-3.svg        # จำลองผลงาน Video Editing (Short Film & Grading)
        ├── project-4.svg        # จำลองผลงาน Motion Graphic (3D Kinetic Typography)
        ├── project-5.svg        # จำลองผลงาน UI/UX Design (Mobile App Design System)
        └── project-6.svg        # จำลองผลงาน Web Design (Interactive 3D Experience)
```

---

## ✨ คุณสมบัติเด่น (Features & Highlights)

1. **ธีมสี ฟ้า-เหลือง (Blue & Yellow Palette)**:
   - โทนสีฟ้าสว่าง นีออน (Sky/Electric Blue) ผสานสีเหลืองอำพัน (Amber/Warm Yellow)
   - แบ็กกราวด์สไตล์ Dark Mode ทรงพลัง ตัดกับแสงสะท้อนเรืองแสง (Glow Orbs)

2. **ดีไซน์ระดับพรีเมียม (Premium Creative Styling)**:
   - **Glassmorphism**: พื้นหลังการ์ดโปร่งแสงพร้อม `backdrop-filter: blur(14px)`
   - **Rotating Dual-Gradient Ring**: วงแหวนนีออนหมุนรอบรูปโปรไฟล์พร้อม Floating Badges
   - **Micro-Interactions**: Hover Lift, Button Shimmer, Card Glow

3. **ครบทั้ง 7 ส่วนตามข้อกำหนด**:
   - **Navigation Bar**: Sticky ติดด้านบน, เบลอพื้นหลังเมื่อเลื่อน, มี ScrollSpy ไฮไลต์เมนูตามหน้าจอ, เมนูมือถือพับเก็บอัตโนมัติ
   - **Hero Section**: ข้อความทักทาย, แนะนำตัว, แบดจ์สถานะนักศึกษาสื่อนฤมิต, ปุ่ม CTA "ดูผลงาน" และ "ติดต่อ", ปุ่มโซเชียล
   - **About Me**: ประวัติย่อ, เส้นทางเวลาการศึกษา (Education Timeline), แท็กความสนใจ (Interests), กล่องคำคมวิสัยทัศน์การทำงาน (Career Goals), สถิติผลงาน
   - **Skills (10 ทักษะ)**: การ์ด 3D สลับธีมสีฟ้า-เหลือง พร้อมหลอดแสดงระดับความชำนาญ (Graphic Design, Photography, Video Editing, Motion Graphic, UI/UX Design, Web Design, HTML5, CSS3, JavaScript, AI Tools)
   - **Portfolio (6 ผลงาน)**: จัดเรียง Grid Responsive, ฟิลเตอร์หมวดหมู่, ซูมภาพเมื่อ Hover, พร้อมปุ่มเปิดดูรายละเอียดแบบ **Modal Popup**
   - **Contact**: แสดงการ์ดไอคอนติดต่อ (Email, Facebook, Instagram, GitHub, Behance) และแบบฟอร์มส่งข้อความพร้อม Toast แจ้งเตือนเมื่อกดส่ง
   - **Footer**: ลิขสิทธิ์ © 2026 My Portfolio และเครดิตนักศึกษาสาขาสื่อนฤมิต

4. **ลูกเล่นเสริม (Extra Enhancements)**:
   - 🌓 **Dark / Light Mode**: สลับธีมได้ทันทีและจำค่าไว้ใน LocalStorage
   - 🚀 **Preloader**: หน้าจอโหลดแบบโมเดิร์นก่อนเข้าสู่เว็บไซต์
   - ⬆️ **Scroll to Top**: ปุ่มลอยมุมขวาล่าง เลื่อนกลับสู่ด้านบนอย่างนุ่มนวล
   - 👁️ **Scroll Reveal Animation**: เอฟเฟกต์เฟดลอยขึ้นเมื่อเลื่อนหน้าจอมาถึงด้วย IntersectionObserver

---

## 🚀 วิธีการเปิดใช้งาน (How to Run)

### วิธีที่ 1: ดับเบิลคลิกเปิดไฟล์ได้ทันที (Direct File)
- ดับเบิลคลิกที่ไฟล์ `index.html` เพื่อเปิดใช้งานผ่านเบราว์เซอร์ใดก็ได้ (Chrome, Edge, Firefox, Safari)
- ทุกรูปภาพและโค้ดสร้างขึ้นเป็น Vector SVG และ Local assets ทำให้ใช้งานได้ทันทีแม้ไม่ได้ต่ออินเทอร์เน็ต

### วิธีที่ 2: เปิดผ่าน XAMPP Localhost (Apache Server)
1. เปิดโปรแกรม **XAMPP Control Panel**
2. กดปุ่ม **Start** ที่โมดูล **Apache**
3. เปิดเว็บเบราว์เซอร์แล้วเข้าไปที่ URL:
   ```text
   http://localhost/webportfolio
   ```

---

## 🛠️ วิธีการปรับแต่งข้อมูลส่วนตัว (Customization Guide)

- **แก้ไขชื่อและข้อมูลแนะนำตัว**: เปิดไฟล์ [index.html](file:///c:/xampp/htdocs/webportfolio/index.html) แล้วค้นหาคำว่า `กิตติภณ วงศ์สวรรค์` เพื่อเปลี่ยนเป็นชื่อ-นามสกุลของคุณ
- **เปลี่ยนรูปโปรไฟล์**: วางไฟล์ภาพของคุณ (เช่น `my-photo.jpg` หรือ `my-photo.png`) ในโฟลเดอร์ `assets/images/` แล้วเปลี่ยนที่แท็ก `<img>` ในส่วน `#home`
- **แก้ไขลิงก์โซเชียล**: ในส่วน `#contact` สามารถแทนที่ลิงก์ `mailto:` และ URL ของ Facebook, Instagram, GitHub, Behance เป็นของตนเองได้ทันที
- **เปลี่ยนโทนสี**: ปรับแต่งค่าสีหลักในไฟล์ [assets/css/variables.css](file:///c:/xampp/htdocs/webportfolio/assets/css/variables.css) ในตัวแปร `--blue-400` และ `--yellow-400`
