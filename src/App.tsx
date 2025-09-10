import { ThemeToggle } from "./components/ThemeToggle"; 
import { PORTFOLIO_PROJECTS, PORTFOLIO_SKILLS, PORTFOLIO_SOFTSKILLS } from "./data/portfolio";
import { useContext, useState, useEffect } from "react";
import { TranslateContext } from "./contexts/translate.context.ts";
import profileImg from "./assets/p.png";

function App() {
  const { language, setLanguage, translate } = useContext(TranslateContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-dvh bg-white text-black dark:bg-black dark:text-white transition-colors duration-200">
      
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-neutral-200 dark:border-neutral-800 backdrop-blur">
        <nav className="max-w-5xl mx-auto flex justify-between items-center p-4">
          <a href="#home" className="font-semibold">{translate('พอร์ตโฟลิโอ', 'My Portfolio')}</a>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about">{translate('เกี่ยวกับ', 'About')}</a>
            <a href="#projects">{translate('โปรเจกต์', 'Projects')}</a>
            <a href="#skills">{translate('ทักษะ', 'Skills')}</a>
            <a href="#certificates">{translate('ประกาศนียบัตร', 'Certificates')}</a>
            <a href="#contact">{translate('ติดต่อ', 'Contact')}</a>
          </div>
          <div className="flex items-center gap-3 ml-3 md:ml-6">
            <div role="group" aria-label="Language selector" className="flex gap-1">
              <button
                type="button"
                className={`text-xs border px-2 py-1 rounded ${language === 'TH' ? 'bg-neutral-200 dark:bg-neutral-800' : ''}`}
                onClick={() => setLanguage('TH' as any)}
                aria-pressed={language === 'TH'}
              >
                TH
              </button>
              <button
                type="button"
                className={`text-xs border px-2 py-1 rounded ${language === 'EN' ? 'bg-neutral-200 dark:bg-neutral-800' : ''}`}
                onClick={() => setLanguage('EN' as any)}
                aria-pressed={language === 'EN'}
              >
                EN
              </button>
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-4">
        {/* Hero */}
        <section id="home" className="min-h-[70dvh] flex items-center">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className={`${windowWidth < 480 ? "hidden" : "block"} text-sm text-neutral-500`}>
                {translate('สวัสดีค่ะ', "Hi, I'm")}
              </p>
              <h1 className="text-4xl font-bold mt-2">{translate('นางสาวอาภาศิริ สีสม', 'Arpasiri Seesom')}</h1>
              <p className="text-neutral-600 dark:text-neutral-400">{translate('นางสาว อาภาศิริ สีสม', 'Ms. Arpasiri Seesom')}</p>
              <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                {translate(
                  'ต้องการฝึกงานในตำแหน่งที่ท้าทายและน่าสนใจ เพื่อศึกษาและเก็บเกี่ยวประสบการณ์ด้านเทคโนโลยีใหม่ ๆ รวมถึงแก้ไขปัญหาและสร้างสรรค์สิ่งใหม่ พร้อมนำทักษะการเขียนโปรแกรมมาใช้ให้เกิดประโยชน์สูงสุดต่อทีมและองค์กร ควบคู่ไปกับการพัฒนาตนเองอย่างต่อเนื่องเพื่อยกระดับความชำนาญให้สูงขึ้น',
                  'I am seeking an internship in a challenging and interesting position to learn and gain experience in new technologies, as well as to solve problems and create new ideas. I aim to apply my programming skills to maximize benefits for the team and organization, while continuously developing myself to achieve a higher level of proficiency.'
                )}
              </p>

              {/* Resume + GitHub */}
              <div className="mt-6 flex gap-3">
                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  download="Arpasiri_Resume.pdf"
                  className="px-4 py-2 rounded bg-purple-600 text-white text-sm flex items-center gap-2"
                >
                  Resume
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-6-4v8m0 0l-4-4m4 4l4-4M12 4v12" />
                  </svg>
                </a>

                <a
                  href="https://github.com/Arpasiri10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-neutral-200 dark:bg-neutral-800 text-sm flex items-center gap-2"
                >
                  GitHub
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.16 0 0 1-.32 3.3 1.23a11.46 11.46 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.85 1.24 1.93 1.24 3.25 0 4.63-2.8 5.66-5.48 5.96.43.37.82 1.1.82 2.21v3.28c0 .32.21.7.82.58A12 12 0 0012 0z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* รูปโปรไฟล์ */}
            <div className="flex justify-center md:justify-end">
              <div className="rounded-full overflow-hidden h-48 w-48 md:h-64 md:w-64 lg:h-72 lg:w-72 ring-2 ring-white dark:ring-neutral-900 shadow-lg">
                <img src={profileImg} alt={translate('รูปโปรไฟล์', 'Profile photo')} className="h-full w-full object-cover"/>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-10 py-16">
          <h2 className="text-2xl font-semibold">{translate('เกี่ยวกับ', 'About')}</h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            {translate('2565 - ปัจจุบัน | ระดับปริญญาตรี', "2022 - Present | Bachelor's Degree")}<br />
            {translate('มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน', 'Kasetsart University, Kamphaeng Saen Campus')}<br />
            {translate('คณะศิลปศาสตร์และวิทยาศาสตร์', 'Faculty of Liberal Arts and Science')}<br />
            {translate('สาขาเทคโนโลยีสารสนเทศ', 'Information Technology Major')}
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-10 py-16 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-2xl font-semibold">{translate('โปรเจกต์', 'Projects')}</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_PROJECTS.filter(p => p.featured).map((p) => (
              <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer" className="p-4 border rounded hover:shadow transition">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs border px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-10 py-16">
          <h2 className="text-2xl font-semibold">{translate('ทักษะ', 'Skills')}</h2>
          <div className="flex flex-wrap gap-2 mt-6">
            {PORTFOLIO_SKILLS.map((s) => (
              <span key={s} className="text-sm border px-3 py-1 rounded">{s}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {PORTFOLIO_SOFTSKILLS.map((s) => (
              <span key={s} className="text-sm border px-3 py-1 rounded">{s}</span>
            ))}
          </div>
        </section>

        {/* Certificates */}
        <section id="certificates" className="scroll-mt-10 py-16 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-2xl font-semibold">{translate('ประกาศนียบัตร & การอบรม', 'Certificates & Training')}</h2>
          <ul className="mt-6 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li>{translate('หลักสูตร JavaScript, SQL (Basic) และ SQL (Intermediate) โดย HackerRank วันที่ 18 กุมภาพันธ์ 2567', 'HackerRank Certifications: JavaScript (Basic), SQL (Basic), SQL (Intermediate) - Feb 18, 2024')}</li>
            <li>{translate('หลักสูตร DevLab 3 Open Access Program โดย BorntoDev วันที่ 26 พฤศจิกายน 2566', 'DevLab 3 Open Access Program by BorntoDev (Rank 4211/22972) - Nov 26, 2023')}</li>
            <li>{translate('หลักสูตร เปิดโลกทักษะ AI และความปลอดภัยทางไซเบอร์ วันที่ 8 มีนาคม 2568', 'AI Skills and Cybersecurity - Mar 8, 2025')}</li>
            <li>{translate('หลักสูตร Oracle Course วันที่ 5-6 กรกฎาคม 2568', 'Oracle Course - Jul 5-6, 2025')}</li>
            <li>{translate('หลักสูตร Power BI วันที่ 23-24 สิงหาคม 2568', 'Power BI - Aug 23-24, 2025')}</li>
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-10 py-16 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-2xl font-semibold">{translate('ติดต่อ', 'Contact')}</h2>
          <p className="mt-4">
            {translate('สนใจร่วมงานหรือติดต่อได้ทางอีเมลหรือเบอร์โทรศัพท์',"If you're interested in working together, contact me via email or phone")}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <a href="mailto:arpasiriseesom@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded bg-blue-600 text-white text-sm hover:bg-blue-700 transition">
              ✉️ {translate('ส่งอีเมล', 'Email')}
            </a>
            <a href="tel:0954121064" className="flex items-center gap-2 px-4 py-2 rounded bg-green-600 text-white text-sm hover:bg-green-700 transition">
              📞 {translate('โทรติดต่อ', 'Call')}
            </a>
            <div className="px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300">
              Email: <a href="mailto:arpasiriseesom@gmail.com" className="underline hover:text-blue-600">arpasiriseesom@gmail.com</a><br/>
              Tel: <a href="tel:0954121064" className="underline hover:text-green-600">095-412-1064</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} นางสาวอาภาศิริ สีสม (Ms. Arpasiri Seesom). All rights reserved.<br/>
        Email: <a href="mailto:arpasiriseesom@gmail.com" className="underline hover:text-blue-600">arpasiriseesom@gmail.com</a> | Tel: <a href="tel:0954121064" className="underline hover:text-green-600">095-412-1064</a>
      </footer>
    </div>
  );
}

export default App;
