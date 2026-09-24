/**
 * PORTFOLIO CONTROLLER
 * Handles category filtering and modal details preview
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Portfolio items database
  const projectDatabase = {
    1: {
      title: 'NOVA Brand Identity & Visual System',
      category: 'Graphic Design',
      categoryTag: 'graphic',
      image: 'assets/images/project-1.svg',
      client: 'Creative Studio Project',
      year: '2026',
      tools: 'Adobe Illustrator, Photoshop, Figma',
      description: 'โครงการออกแบบอัตลักษณ์และระบบภาพลักษณ์สำหรับแบรนด์สตรีมเมอร์และสตูดิโอสร้างสรรค์ยุคใหม่ เน้นการผสมผสานสีฟ้า-เหลืองสไตล์นีออน ออกแบบโลโก้ Typographic มอคอัพแพ็กเกจจิ้ง และ Brand Guidelines ฉบับสมบูรณ์',
      demoUrl: '#'
    },
    2: {
      title: 'Cinematic Urban Life Photography',
      category: 'Photography',
      categoryTag: 'photo',
      image: 'assets/images/project-2.svg',
      client: 'Independent Creative Series',
      year: '2025 - 2026',
      tools: 'Sony Alpha, Lightroom Classic, DaVinci Resolve',
      description: 'ชุดภาพถ่ายพอร์ตเทรตและวิถีชีวิตคนเมืองในโทนสีจัดจ้านแบบ Cyberpunk ผสมผสานแสงธรรมชาติและแสงนีออนยามค่ำคืน ถ่ายทอดอารมณ์ความเหงาและพลังของเมืองหลวงผ่านมุมมองภาพขนาดกว้างและระยะชัดตื้น',
      demoUrl: '#'
    },
    3: {
      title: 'Short Film "ECHOES" & Color Grading',
      category: 'Video Editing',
      categoryTag: 'video',
      image: 'assets/images/project-3.svg',
      client: 'Creative Media Short Film Contest',
      year: '2026',
      tools: 'Premiere Pro, DaVinci Resolve Studio, Audition',
      description: 'ภาพยนตร์สั้นความยาว 7 นาที นำเสนอประเด็นทางสังคมและการค้นหาตัวตน ควบคุมงานตัดต่อ ลำดับภาพ Sound Design มิกซ์เสียง และการย้อมสี (Color Grading) ให้ได้โทนภาพภาพยนตร์ระดับพรีเมียม',
      demoUrl: '#'
    },
    4: {
      title: '3D Kinetic Typography & Motion Brand',
      category: 'Motion Graphic',
      categoryTag: 'graphic',
      image: 'assets/images/project-4.svg',
      client: 'Festival Intro & Promo Teaser',
      year: '2026',
      tools: 'After Effects, Blender, Cinema 4D',
      description: 'งานสร้างสรรค์โมชันกราฟิกและ 3D ไคเนติกไทโปเน้นจังหวะความเคลื่อนไหวที่เร้าใจ ออกแบบการเคลื่อนที่ของแสงและวัตถุสามมิติเพื่อใช้เป็นไตเติลเปิดงานอีเวนต์และคอนเทนต์โปรโมตบนโซเชียลมีเดีย',
      demoUrl: '#'
    },
    5: {
      title: 'EcoSmart Smart Home Mobile App UI/UX',
      category: 'UI/UX Design',
      categoryTag: 'web',
      image: 'assets/images/project-5.svg',
      client: 'UX Research & Design Case Study',
      year: '2026',
      tools: 'Figma, FigJam, Protopie',
      description: 'งานวิจัยผู้ใช้และออกแบบแอปพลิเคชันควบคุมอุปกรณ์ประหยัดพลังงานในบ้าน สร้าง User Persona, Journey Map, Wireframe และ High-Fidelity Prototype พร้อม Design System ที่รองรับ Dark / Light Mode',
      demoUrl: '#'
    },
    6: {
      title: 'Immersive 3D Interactive Web Experience',
      category: 'Web Design',
      categoryTag: 'web',
      image: 'assets/images/project-6.svg',
      client: 'Digital Showcase Concept',
      year: '2026',
      tools: 'HTML5, CSS3, JavaScript, Three.js, GSAP',
      description: 'เว็บไซต์แสดงนิทรรศการเสมือนจริงแบบอินเทอร์แอคทีฟ รองรับการโต้ตอบแบบ 3D ผ่าน Three.js มีแอนิเมชันเลื่อนหน้าเว็บที่ลื่นไหลด้วย GSAP และออกแบบให้เปิดได้อย่างรวดเร็วในทุกขนาดหน้าจอ',
      demoUrl: '#'
    }
  };

  // 1. Filtering Logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCols = document.querySelectorAll('.project-col');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active filter button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCols.forEach(col => {
        const itemCategory = col.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory.includes(filterValue)) {
          col.style.display = 'block';
          // Trigger smooth fade in
          setTimeout(() => {
            col.style.opacity = '1';
            col.style.transform = 'scale(1)';
          }, 50);
        } else {
          col.style.opacity = '0';
          col.style.transform = 'scale(0.95)';
          setTimeout(() => {
            col.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // 2. Modal Dynamic Population
  const projectModalElement = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalCategory = document.getElementById('modalProjectCategory');
  const modalImage = document.getElementById('modalProjectImage');
  const modalClient = document.getElementById('modalProjectClient');
  const modalYear = document.getElementById('modalProjectYear');
  const modalTools = document.getElementById('modalProjectTools');
  const modalDesc = document.getElementById('modalProjectDesc');

  document.querySelectorAll('[data-bs-target="#projectModal"]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const projectId = trigger.getAttribute('data-project-id');
      const projectData = projectDatabase[projectId];

      if (projectData && modalTitle) {
        if (modalTitle) modalTitle.textContent = projectData.title;
        if (modalCategory) modalCategory.textContent = projectData.category;
        if (modalImage) {
          modalImage.src = projectData.image;
          modalImage.alt = projectData.title;
        }
        if (modalClient) modalClient.textContent = projectData.client;
        if (modalYear) modalYear.textContent = projectData.year;
        if (modalTools) modalTools.textContent = projectData.tools;
        if (modalDesc) modalDesc.textContent = projectData.description;
      }
    });
  });
});
