"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import 'flag-icon-css/css/flag-icons.min.css';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const textToType = `As a dynamic and motivated Computer Science student at the prestigious École Nationale Supérieure d'Informatique (ESI) in Algiers, my fascination with logical problem-solving and creative design has naturally guided me toward web development. I possess a robust and ever-growing skill set in a range of web technologies, from mastering front-end languages like HTML, CSS, and JavaScript to exploring modern frameworks and back-end systems.\n\nWhat drives me daily is understanding how a simple idea can be transformed into a functional, intuitive, and elegant application. I don't just write code; I aspire to build seamless user experiences and resilient, scalable architectures. My ambition extends beyond technical mastery; I aim to develop a holistic product vision to contribute meaningfully to forward-thinking projects. For me, every line of code is an opportunity to learn, grow, and help build the web of tomorrow.`;
            
        const paragraphElement = document.getElementById('bio-text');
        const typingSpeed = 20;

        let i = 0;
        if (paragraphElement) {
            paragraphElement.style.borderRight = '2px solid black'; 
            const cursorInterval = setInterval(() => {
                paragraphElement.style.borderRightColor = (paragraphElement.style.borderRightColor === 'black') ? 'transparent' : 'black';
            }, 500);

            function typeWriter() {
                if (i < textToType.length) {
                    let char = textToType.charAt(i);
                    paragraphElement.innerHTML += (char === '\n') ? '<br>' : char;
                    i++;
                    setTimeout(typeWriter, typingSpeed);
                } else {
                    clearInterval(cursorInterval); 
                    paragraphElement.style.borderRightColor = 'transparent'; 
                }
            }
            typeWriter();
        }

        const scrollContainer = document.querySelector(`.${styles.container}`);
        const progressBar = document.querySelector(`.${styles.progressBar}`);

        if (scrollContainer && progressBar) {
            const handleScroll = () => {
                const scrollLeft = scrollContainer.scrollLeft;
                const scrollWidth = scrollContainer.scrollWidth;
                const clientWidth = scrollContainer.clientWidth;

                if (scrollWidth <= clientWidth) {
                    progressBar.style.width = '0%';
                    return;
                }

                const scrollPercent = (scrollLeft / (scrollWidth - clientWidth)) * 100;
                progressBar.style.width = scrollPercent + '%';
            };
            scrollContainer.addEventListener('scroll', handleScroll);

            return () => {
                scrollContainer.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    useEffect(() => {
        const skillCards = document.querySelectorAll(`.${styles.skillCard}`);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 
        });

        skillCards.forEach(card => {
            observer.observe(card);
        });

        return () => {
            skillCards.forEach(card => {
                observer.unobserve(card);
            });
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <>
      <header className={styles.mainHeader}>
        <div className={styles.logoContainer}>
            <h1>My Portfolio</h1>
            <p>Welcome to my professional journey.</p>
        </div>
        <nav className={styles.sections}>
            <a href="#about-me">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
        </nav>
    </header>
      <section className={styles.container}>
        <div className={styles.div1} id="about-me">
        <div className={styles.name}>
          <Image src="/image.png" alt="Profile Picture" width={100} height={100} /> 
          <p>
            Ali Abid
            <br />
            <br />
            <span>CS Student at ESI Algiers and Web-Developer</span>
          </p>
        </div>
        <div className={styles.bio}>
          <p id="bio-text"></p>
          <h2>Contact :</h2>
          <span>Email : aliabid312006&#64;email.com <br/>
           Or : oa_abid&#64;esi.dz</span>
        </div>
      </div>

      <div className={styles.div2} id="skills">
        <div className={styles.skillsContent}>
          <h2 style={{ fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif" }}>My Principle Software Skills</h2>
          <div className={styles.skillsGrid}>
                <div className={`${styles.skillCard} ${styles.html}`}>
                    <svg viewBox="0 0 128 128" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m14 113.8 9.5-107.6h81L95 113.7 64.3 121.1z" fill="#e44d26"/><path d="m64.3 115.3 25.3-7.2 8.8-99h-34.1z" fill="#f16529"/><path d="m36.7 50.8h27.6v12.9h-19.1l1.4 15.5h17.7v12.9H40.2zm28.4-12.9h13.2l-1.2 12.9h-12zm-12 30.6h11.2l.9 11.2 13.5 3.6v13.6l-24.8-6.7z" fill="#ebebeb"/><path d="m65.1 63.7-1.2-12.9h12l-1.2 12.9zm-.8 14.7h11.2l.9 11.2 13.5 3.6v13.6l-24.8-6.7z" fill="#fff"/></svg>
                    <h3>HTML5</h3>
                </div>
                <div className={`${styles.skillCard} ${styles.Css}`}>
                    <svg viewBox="0 0 128 128" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m14 113.8 9.5-107.6h81L95 113.7 64.3 121.1z" fill="#1572b6"/><path d="m64.3 115.3 25.3-7.2 8.8-99h-34.1z" fill="#33a9dc"/><path d="m49.3 63.7 1.2-12.9h27.6v12.9H54.4zm27.6-12.9H65.1l-1.2 12.9h20.4zM49.3 79.2l1.4 15.5h12.5v-12.9H52l-.8-9.1zm18.5 2.7h-11.2l1.4 15.5H69l-1.2-13.3z" fill="#ebebeb"/><path d="M65.1 63.7H54.4l-1.2 12.9h11.9zm11.8-12.9H65.1l-1.2 12.9h20.4zm-12.6 28.4h12.3l-1.2-13.3h-12.3zm12.3 0-1.2-13.3-13.5-3.6v-13.6l24.8 6.7z" fill="#fff"/></svg>
                    <h3>CSS3</h3>
                </div>
                <div className={`${styles.skillCard} ${styles.Js}`}>
                    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                        <rect width="256" height="256" fill="#F7DF1E"/>
                        <path fill="#000" d="M117.8 196.8c-1.8 3.5-3.5 6.9-3.5 6.9s-1.8-1.7-3.5-3.5c-3.5-5.2-12.2-15.6-26.1-15.6-13.9 0-21.7 8.7-21.7 20.9 0 12.2 8.7 17.4 20.9 17.4 8.7 0 15.6-3.5 19.1-10.4 1.7-3.5 3.5-6.9 3.5-6.9h30.4s-3.5 20.9-20.9 20.9c-19.1 0-33-8.7-33-28.7 0-19.1 12.2-34.7 33-34.7 17.4 0 28.7 7 33 13.9zM196.8 196.8c-1.7 3.5-3.5 6.9-3.5 6.9s-1.7-1.7-3.5-3.5c-3.5-5.2-12.2-15.6-26.1-15.6-13.9 0-21.7 8.7-21.7 20.9 0 12.2 8.7 17.4 20.9 17.4 8.7 0 15.6-3.5 19.1-10.4 1.7-3.5 3.5-6.9 3.5-6.9h30.4s-3.5 20.9-20.9 20.9c-19.1 0-33-8.7-33-28.7 0-19.1 12.2-34.7 33-34.7 17.4 0 28.7 7 33 13.9z" transform="translate(-14.5 -38) scale(1.2)" />
                    </svg>
                    <h3>JavaScript</h3>
                </div>
                <div className={`${styles.skillCard} ${styles.NextJs}`}> 
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 3.75L12 18.75L20.25 3.75H3.75ZM12 4.5L7.5 12L12 18.75L16.5 12L12 4.5Z" fill="black"/>
                    </svg>
                    <h3>Next.js</h3>
                </div>
                <div className={`${styles.skillCard} ${styles.React}`}>
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 552.2c-12 .3-23.9-4.2-32.9-13.1-9-9-14.2-21.1-13.9-33.2 2.3-79.5 63.8-144 143.6-144s141.3 64.5 143.6 144c.3 12-4.9 24.1-13.9 33.2-9 9-20.9 13.4-32.9 13.1-93.5 2.4-177.2-2.3-270.1 0zm-96-156.4c-1.4 83.2-68.5 149.2-152.2 147.1-83.7-2.1-149.8-69.5-147.7-153.3 2.1-83.7 69.5-149.8 153.3-147.7 83.7 2.1 149.8 69.5 147.7 153.3-.3 1.4-.4 2.8-.4 4.2zm96 312.8c1.4-83.2 68.5-149.2 152.2-147.1 83.7 2.1 149.8 69.5 147.7 153.3-2.1 83.7-69.5 149.8-153.3 147.7-83.7-2.1-149.8-69.5-147.7-153.3.2-1.4.3-2.8.4-4.2zM759.7 240c-66.6-66.7-156-103.3-247.7-103.3S330.9 173.3 264.3 240c-66.7 66.6-103.3 156-103.3 247.7s36.7 181.1 103.3 247.7c66.6 66.7 156 103.3 247.7 103.3s181.1-36.7 247.7-103.3c66.7-66.6 103.3-156 103.3-247.7s-36.7-181.1-103.3-247.7zM805 512c0 161.9-131.1 293-293 293S219 673.9 219 512 350.1 219 512 219s293 131.1 293 293z" fill="#61DAFB"/></svg>
                    <h3>React</h3>
                </div>
                <div className={`${styles.skillCard} ${styles.Express}`}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="4" fill="#303030"/>
                    <path d="M7 12H17M7 12L10 9M7 12L10 15" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7V17M12 7L9 10M12 7L15 10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>Express.js</h3>
                </div>
                <div className={`${styles.skillCard} ${styles.Python}`}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.19 13.23a2.33 2.33 0 0 1-2.31-2.32v-2.3a2.33 2.33 0 0 1 2.31-2.31h3.18v-3.2H14.16v3.2h3.18a2.32 2.32 0 0 1 2.31 2.31v2.3a2.32 2.32 0 0 1-2.31 2.32h-3.18v10.36h-3.18V2.78H1.81v3.2h3.18a2.32 2.32 0 0 1 2.31 2.31v6.88H1.81v3.2h12.35v-3.2H7.3a2.33 2.33 0 0 1-2.31-2.32V8.6a2.32 2.32 0 0 1 2.31-2.31h3.18V2.78h3.18v10.45Z" fill="#3776ab"/><path d="M12.35 15.54a2.33 2.33 0 0 1-2.31-2.31h-3.2v3.19h10.36v3.18H1.81v-3.18h3.18a2.32 2.32 0 0 1 2.31-2.31V8.6H1.81v3.19h-3.18v3.18h16.88v-3.18h-3.18ZM10.04 1.81a2.31 2.31 0 0 1 2.31-2.31h6.88v3.18H12.35a2.32 2.32 0 0 1-2.31-2.31V-1.47H6.86v6.2h3.18Z" fill="#ffde57"/></svg>
                    <h3>Python</h3>
                </div>
                <div className={`${styles.skillCard} ${styles.Figma}`}>
                    <svg viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z" fill="#2c2c2c" className="fill-1b1b1b"/><path d="M12 24c3.314 0 6-5.373 6-12S15.314 0 12 0v24Z" fill="#0acf83" className="fill-0acf83"/><path d="M12 18a6 6 0 0 1-6-6h12a6 6 0 0 1-6 6Z" fill="#a259ff" className="fill-a259ff"/><path d="M6 12a6 6 0 0 1 6-6v12a6 6 0 0 1-6-6Z" fill="#f24e1e" className="fill-f24e1e"/><path d="M12 6a6 6 0 0 1 6 6h-6V6Z" fill="#ff7262" className="fill-ff7262"/></svg>
                    <h3>Figma</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.div3} id="experience">
        <section id="experience" className={styles.fadeIn} style={{overflowY: 'hidden'}}>
          <h2 style={{color: 'black'}}>Experience :</h2>
          <div className={styles.etic}>
            <h3>
              <span style={{ color: '#03e9f4' }}>   Etic Communication </span>
              <span style={{ color: '#E44D26' }}>and Multimedia </span>
              <span style={{ color: '#F7DF1E' }}>member</span>
              <span style={{ color: 'orange' }}>(ESI Algiers)</span>
            </h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2vw' }}>
              <li>Organising Events (Algier&#39;s Up, S2EE..).</li>
              <li>Participating in Hackatons.</li>
              <li>Web Dev Internship with Hexsoftwares.</li>
            </ul>
          </div>
          <div className={styles.projects}>
            <h2 style={{marginBottom: '0.2rem', color: 'black'}}>Projects :</h2>
            <div style={{ marginBottom: '0.2rem' }}>
              <h5 style={{ marginBottom: '-0.2rem' }} className={styles.futbol}>My Football Game :</h5>
                <a style={{ paddingLeft: '2vw', fontSize: '0.6rem' }} className={styles.a} href="https://ali-abid-football-challenges.vercel.app" target="_blank">ali-abid-football-challenges</a>
            </div>
            <div style={{ marginBottom: '0.2rem' }}>
              <h5 style={{ marginBottom: '-0.2rem' }} className={styles.ml}>My First ML model :</h5>
                <a style={{ paddingLeft: '2vw', fontSize: '0.6rem' }} className={styles.a} href="https://cars-price-predictor.vercel.app" target="_blank">cars-price-predictor</a>
            </div>
            <div style={{ marginBottom: '0.2rem' }}>
              <h5 style={{ marginBottom: '-0.2rem' }} className={styles.city}>Smart City Waste Management :</h5>
                <a style={{ paddingLeft: '2vw', fontSize: '0.6rem' }} className={styles.a} href="https://eco-tracker-blush.vercel.app" target="_blank">eco-tracker-blush</a>
            </div>
          </div>
          <div className={styles.additionalInfo}>
            <h2 style={{color: 'black'}}>Additional Information :</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2vw' }}>
              <li><FontAwesomeIcon style={{color: 'white'}} icon={faGlobe} /> Languages: Arabic, French, English.</li>
              <li><FontAwesomeIcon style={{color: 'blue'}} icon={faLinkedin} /> Linkedin : <a href="https://www.linkedin.com/in/ali-abid-344701335/" target="_blank" rel="noopener noreferrer">linkedin.com/Ali Abid</a></li>
              <li><FontAwesomeIcon style={{color: 'black'}} icon={faGithub} /> GitHub : <a href="https://github.com/AliAbid31" target="_blank" rel="noopener noreferrer">github.com/AliAbid31</a></li>
              <li><FontAwesomeIcon style={{color: 'green'}} icon={faPhone} /> Phone Number : +213 553 67 52 04</li>
            </ul>
          </div>
        </section>
        <section className={styles.square} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className={styles.smallSquare} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '70%', backgroundColor: 'rgb(175, 72, 111)', width: '70%' }}>
            <Image src="/guy.png" alt="Profile of Ali Abid" width={200} height={200} style={{ width: '20vw', height: '20vw' }} />
            <p>Full Name : Ali Abid</p>
            <p>Age : 19 years old</p>
            <p>Nationality : Algerian</p>
          </div>
        </section>
      </div>
      </section> 
      <div className={styles.progressBar}></div>
    </>
  );
}
