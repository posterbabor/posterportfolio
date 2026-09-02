import "./Projects.css";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Tasknest",
      description:
        "ระบบจัดการงานสำหรับนักศึกษาและกลุ่มทำงาน สามารถสร้างบอร์ด แบ่งงานเป็นคอลัมน์ มอบหมายงาน แสดงความคิดเห็น และติดตามสถานะงานได้",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Socket.IO",
        "JWT",
      ],
      github: "https://github.com/posterbabor",
      demo: "#",
      category: "Full Stack · Productivity",
      period: "ปี 3 / 1-2568",
      format: "โปรเจกต์กลุ่ม",
      problem:
        "นักศึกษาที่ทำโปรเจกต์ร่วมกันมักมีปัญหาเรื่องการแบ่งงาน การติดตามสถานะ และการสื่อสารภายในทีม ทำให้ข้อมูลกระจัดกระจายและตรวจสอบความคืบหน้าได้ยาก",
      features: [
        "สมัครสมาชิกและเข้าสู่ระบบ",
        "เข้าสู่ระบบด้วย Google OAuth",
        "สร้าง แก้ไข และลบบอร์ด",
        "สร้างคอลัมน์สำหรับแบ่งสถานะงาน",
        "สร้างและจัดการงานภายในบอร์ด",
        "ลากและวางงานระหว่างคอลัมน์",
        "มอบหมายงานให้สมาชิก",
        "แสดงความคิดเห็นภายในงาน",
        "ระบบ Inbox และการแจ้งเตือน",
        "อัปเดตข้อมูลแบบ Real-time ด้วย Socket.IO",
        "ระบบจัดการผู้ใช้งานสำหรับ Admin",
        "เอกสาร API ด้วย Swagger",
      ],
      responsibilities: [
        "พัฒนา Frontend ด้วย React และ Tailwind CSS",
        "พัฒนา Backend ด้วย Node.js และ Express",
        "ออกแบบ REST API สำหรับ Board, Column, Task และ Comment",
        "เชื่อมต่อฐานข้อมูล MongoDB ผ่าน Mongoose",
        "พัฒนาระบบ Authentication ด้วย JWT และ Passport",
        "พัฒนาระบบ Real-time ด้วย Socket.IO",
        "ทดสอบ Backend API ด้วย Mocha และ Chai",
      ],
    },
    {
      title: "Smart Restaurant",
      description:
        "ระบบจัดการร้านอาหารที่ช่วยจัดการเมนู โต๊ะอาหาร ออเดอร์ การชำระเงิน โปรโมชั่น และการสั่งอาหารผ่าน QR Code ได้ในระบบเดียว",
      technologies: ["ASP.NET Core", "C#", "SQL Server", "Bootstrap"],
      github: "https://github.com/posterbabor",
      demo: "#",
      category: "Restaurant Management",
      period: "ปี 3 / 1-2568",
      format: "โปรเจกต์เดี่ยว",
      problem:
        "ร้านอาหารต้องจัดการข้อมูลเมนู โต๊ะ ออเดอร์ และการชำระเงินจากหลายขั้นตอน ทำให้เกิดความล่าช้าและตรวจสอบข้อมูลได้ยาก จึงพัฒนาระบบกลางเพื่อช่วยให้การทำงานเป็นระเบียบมากขึ้น",
      features: [
        "สมัครสมาชิกและเข้าสู่ระบบ",
        "จัดการข้อมูลสมาชิกและผู้ใช้งาน",
        "จัดการหมวดหมู่และรายการอาหาร",
        "จัดการโต๊ะอาหารและสถานะโต๊ะ",
        "สร้างและจัดการรายการสั่งอาหาร",
        "สั่งอาหารผ่าน QR Code",
        "จัดการโปรโมชั่น",
        "รองรับการชำระเงินและออกใบเสร็จ",
        "ติดตามสถานะออเดอร์",
        "ดูรายงานยอดขายและข้อมูลการสั่งซื้อ",
      ],
      responsibilities: [
        "พัฒนาเว็บแอปพลิเคชันด้วย ASP.NET Core MVC",
        "ออกแบบหน้าเว็บด้วย Bootstrap และ Razor Views",
        "พัฒนา Controller สำหรับระบบสมาชิก เมนู โต๊ะ และออเดอร์",
        "ออกแบบและเชื่อมต่อฐานข้อมูล SQL Server ด้วย Entity Framework",
        "พัฒนาระบบจัดการเมนูและโต๊ะอาหาร",
        "พัฒนาขั้นตอนการสั่งอาหารและชำระเงิน",
        "ทดสอบการทำงานของระบบและแก้ไขข้อผิดพลาด",
      ],
    },
    {
      title: "SlideMe",
      description:
        "เว็บแอปสำหรับเรียกรถสไลด์ โดยลูกค้าสามารถระบุตำแหน่ง ส่งคำขอรับบริการ และรับข้อเสนอราคาจากผู้ให้บริการได้ ส่วนคนขับสามารถดูคำขอและเสนอราคาให้ลูกค้าได้",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Prisma ORM",
        "MySQL",
        "Google Maps",
        "Socket.IO",
      ],
      github: "https://github.com/posterbabor",
      demo: "#",
      category: "Frontend + Backend",
      period: "ปี 2 / 1-2567",
      format: "โปรเจกต์กลุ่ม",
      problem:
        "ผู้ใช้ที่รถเสียหรือเกิดอุบัติเหตุค้นหาผู้ให้บริการรถสไลด์ใกล้เคียงได้ยาก ข้อมูลกระจัดกระจาย และไม่สามารถติดตามสถานะของผู้ให้บริการได้อย่างชัดเจน",
      features: [
        "สมัครสมาชิกและเข้าสู่ระบบสำหรับลูกค้าและคนขับ",
        "ค้นหาตำแหน่งด้วยแผนที่",
        "สร้างคำขอเรียกรถสไลด์",
        "ระบุตำแหน่งรับรถ",
        "ระบบเสนอราคาจากคนขับ",
        "เลือกและยอมรับข้อเสนอราคา",
        "ติดตามสถานะคำขอ",
        "ระบบสนทนาระหว่างลูกค้าและผู้ให้บริการ",
        "ระบบให้คะแนนและรีวิวคนขับ",
        "จัดการข้อมูลรถและผู้ให้บริการ",
      ],
      responsibilities: [
        "พัฒนา Frontend ด้วย React",
        "เชื่อมต่อ Google Maps และระบบระบุตำแหน่ง",
        "พัฒนา Backend ด้วย Node.js และ Express",
        "ออกแบบ REST API สำหรับลูกค้า คนขับ และคำขอบริการ",
        "ใช้ Prisma ORM เชื่อมต่อฐานข้อมูล MySQL",
        "พัฒนาระบบ Authentication ด้วย JWT",
        "เชื่อมต่อระบบ Real-time ด้วย Socket.IO",
      ],
    },
    {
      title: "Roadbot AI n8n",
      description:
        "ระบบ Discord Bot สำหรับรับคำถามเกี่ยวกับข้อมูลอุบัติเหตุจากผู้ใช้งาน และส่งข้อมูลเข้าสู่ Workflow ของ n8n เพื่อประมวลผลก่อนตอบกลับผ่าน Discord",
      technologies: ["n8n", "Discord Bot", "Webhook", "Automation", "Backend"],
      github: "https://github.com/posterbabor",
      demo: "#",
      category: "Automation · Discord Bot",
      period: "ปี 3 / 2-2568",
      format: "โปรเจกต์กลุ่ม",
      problem:
        "ผู้ใช้งานต้องการเข้าถึงข้อมูลอุบัติเหตุได้อย่างรวดเร็วโดยไม่จำเป็นต้องเปิดเว็บไซต์หรือต้องค้นหาข้อมูลด้วยตนเอง",
      features: [
        "รับข้อความจากผู้ใช้งานผ่าน Discord Bot",
        "ส่งข้อมูลเข้าสู่ Workflow ผ่าน Webhook",
        "ประมวลผลคำถามด้วย AI",
        "ค้นหาและสรุปข้อมูลอุบัติเหตุ",
        "ส่งคำตอบกลับไปยัง Discord โดยอัตโนมัติ",
      ],
      responsibilities: [
        "ออกแบบ Workflow Automation ด้วย n8n",
        "เชื่อมต่อ Discord Bot กับ Webhook",
        "ออกแบบลำดับการรับและส่งข้อมูล",
        "ทดสอบการทำงานของ Workflow",
      ],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <p className="section-subtitle">03 / SELECTED WORK</p>

        <h2 className="section-title">A few things I’ve built</h2>

        <p className="projects-description">
          Projects that show how I think about UI, user flows, and the code
          behind them.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <button
              className="project-card reveal"
              key={project.title}
              type="button"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-content">
                <div className="project-number">0{index + 1}</div>

                <h3>{project.title}</h3>

                <p className="project-text">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {selectedProject && (
          <div
            className="project-modal-backdrop"
            onClick={() => setSelectedProject(null)}
          >
            <article
              className="project-modal"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="project-modal-close"
                type="button"
                aria-label="Close project details"
                onClick={() => setSelectedProject(null)}
              >
                x
              </button>

              <div className="project-modal-heading">
                <div>
                  <div className="project-modal-kicker">
                    ปี 3 / 1-2568 · {selectedProject.category}
                  </div>
                  <h2>{selectedProject.title}</h2>
                  <p>{selectedProject.description}</p>
                </div>
                <div className="project-modal-tags">
                  {selectedProject.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <div className="project-modal-grid">
                <section className="project-detail-panel">
                  <div className="project-detail-label">PROBLEM</div>
                  <h3>ปัญหาที่ต้องการแก้ไข</h3>
                  <p>{selectedProject.problem}</p>
                </section>

                <section className="project-detail-panel">
                  <div className="project-detail-label">
                    PROJECT INFORMATION
                  </div>
                  <h3>ข้อมูลโปรเจกต์</h3>
                  <dl>
                    <div>
                      <dt>ประเภท</dt>
                      <dd>{selectedProject.category}</dd>
                    </div>
                    <div>
                      <dt>ช่วงเวลาพัฒนา</dt>
                      <dd>{selectedProject.period}</dd>
                    </div>
                    <div>
                      <dt>รูปแบบงาน</dt>
                      <dd>{selectedProject.format}</dd>
                    </div>
                  </dl>
                </section>

                <section className="project-detail-panel">
                  <div className="project-detail-label">FEATURES</div>
                  <h3>ฟีเจอร์หลัก</h3>
                  <ul>
                    {selectedProject.features?.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </section>

                <section className="project-detail-panel">
                  <div className="project-detail-label">RESPONSIBILITIES</div>
                  <h3>สิ่งที่ได้พัฒนา</h3>
                  <ul>
                    {selectedProject.responsibilities?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </article>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
