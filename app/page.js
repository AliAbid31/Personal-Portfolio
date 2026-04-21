"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPhone, faGamepad, faUpRightFromSquare, faBolt, faDatabase, faLeaf, faCode, faRocket, faPaperPlane, faFire, faSmile, faChartSimple, faInfinity, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faJava, faGitAlt, faKaggle, faReact, faJs, faFigma, faPython } from '@fortawesome/free-brands-svg-icons';
import 'flag-icon-css/css/flag-icons.min.css';

export default function Home() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Observer for fade-in animations on scroll
    useEffect(() => {
        const elementsToAnimate = document.querySelectorAll(`.${styles.animateOnScroll}`);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elementsToAnimate.forEach(el => observer.observe(el));
        return () => elementsToAnimate.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <div className={styles.mainWrapper}>
            <header className={`${styles.mainHeader} ${scrolled ? styles.scrolled : ''}`}>
                <div className={styles.logoContainer}>
                    <h1>My Portfolio</h1>
                    <p>Welcome to my professional journey.</p>
                </div>
                <nav className={styles.sections}>
                    <a href="#about-me">About Me</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#additional-info">Contact</a>
                </nav>
            </header>

            <main className={styles.container}>
                {/* HERO SECTION */}
                <section className={styles.heroSection}>
                    <div className={styles.heroGears}></div>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            Hi, I am <span className={styles.highlight}>Ali Abid<span className={styles.cursor}>|</span></span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            A full-stack developer passionate about building reliable, scalable products.
                        </p>
                        <p className={styles.heroDescription}>
                            Specializing in end-to-end web applications, from intuitive frontends to robust APIs and database architectures that power modern experiences.
                        </p>
                    </div>
                </section>

                {/* ABOUT ME SECTION */}
                <section className={styles.aboutSection} id="about-me">
                    <div className={styles.aboutGears}></div>
                    <div className={styles.aboutContent}>
                        <div className={`${styles.imageContainer} ${styles.animateOnScroll}`}>
                            <Image src="/image.jpg" alt="Profile Picture of Ali Abid" width={320} height={320} className={styles.profileImage}/>
                        </div>
                        <div className={`${styles.aboutText} ${styles.animateOnScroll}`}>
                            <h2>About <span className={styles.highlight}>Me</span></h2>
                            <p>
                                As a dynamic and motivated Computer Science student at the prestigious École Nationale Supérieure d'Informatique (ESI) in Algiers, my fascination with logical problem-solving and creative design has naturally guided me toward web development. I possess a robust and ever-growing skill set in a range of web technologies, from mastering front-end languages like HTML, CSS, and JavaScript to exploring modern frameworks and back-end systems.
                            </p>
                            <p>
                                What drives me daily is understanding how a simple idea can be transformed into a functional, intuitive, and elegant application. I don't just write code; I aspire to build seamless user experiences and resilient, scalable architectures. My ambition extends beyond technical mastery; I aim to develop a holistic product vision to contribute meaningfully to forward-thinking projects. For me, every line of code is an opportunity to learn, grow, and help build the web of tomorrow.
                            </p>
                            <div className={styles.aboutButtons}>
                                <div className={styles.badge}>CS Student at ESI</div>
                                <div className={styles.badge}>+5 Projects Completed</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SKILLS SECTION */}
                <section className={styles.skillsSection} id="skills">
                    <div className={styles.skillsContent}>
                        <h2 className={styles.sectionTitle}>My <span className={styles.highlight}>Skills</span></h2>
                        <p className={styles.skillsSubtitle} style={{textAlign: 'center', color: '#94a3b8', marginBottom: '3rem', marginTop: '-2rem'}}>A comprehensive toolkit of technologies I use to build complete full-stack solutions</p>
                        
                        <div className={styles.categoryContainer}>
                            <h3 className={styles.categoryTitle}>🌐 Frontend Tools</h3>
                            <div className={styles.skillsGrid}>
                                <div className={styles.skillCard}>
                                    <FontAwesomeIcon icon={faReact} style={{ color: '#61DAFB', fontSize: '3.5rem' }} />
                                    <h3>React</h3>
                                </div>
                                <div className={styles.skillCard}>
                                    <span style={{fontSize: '3.5rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>N<span style={{fontSize:'1.5rem'}}>.js</span></span>
                                    <h3>Next.js</h3>
                                </div>
                                <div className={styles.skillCard}>
                                    <FontAwesomeIcon icon={faJs} style={{ color: '#F7DF1E', fontSize: '3.5rem' }} />
                                    <h3>JavaScript</h3>
                                </div>
                                <div className={styles.skillCard}>
                                    <span style={{fontSize: '2.5rem', fontWeight: 800, color: '#fff', backgroundColor: '#3178C6', padding: '0.2rem 0.6rem', borderRadius: '8px' }}>TS</span>
                                    <h3>TypeScript</h3>
                                </div>
                                <div className={styles.skillCard}>
                                    <FontAwesomeIcon icon={faFigma} style={{ color: '#a259ff', fontSize: '3.5rem' }} />
                                    <h3>Figma</h3>
                                </div>
                            </div>
                        </div>

                        <div className={styles.categoryContainer}>
                            <h3 className={styles.categoryTitle}>⚙️ Backend Tools</h3>
                            <div className={styles.skillsGrid}>
                                <div className={styles.skillCard}>
                                    <FontAwesomeIcon icon={faPython} style={{ color: '#3776ab', fontSize: '3.5rem' }} />
                                    <h3>Python</h3>
                                </div>
                                <div className={styles.skillCard}>
                                    <FontAwesomeIcon icon={faJava} style={{ color: '#f89820', fontSize: '3.5rem' }} />
                                    <h3>Java</h3>
                                </div>
                                <div className={styles.skillCard}>
                                    <svg viewBox="0 0 24 24" fill="none" style={{width: '3.5rem', height: '3.5rem'}} xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2" y="2" width="20" height="20" rx="4" fill="#303030"/>
                                        <path d="M7 12H17M7 12L10 9M7 12L10 15" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 7V17M12 7L9 10M12 7L15 10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <h3>Express.js</h3>
                                </div>
                                <div className={styles.skillCard}>
                                    <FontAwesomeIcon icon={faBolt} style={{ color: '#14b8a6', fontSize: '3.5rem' }} />
                                    <h3>FastAPI</h3>
                                </div>
                                <div className={styles.skillCard}>
                                    <FontAwesomeIcon icon={faDatabase} style={{ color: '#0ea5e9', fontSize: '3.5rem' }} />
                                    <h3>SQL</h3>
                                </div>
                                <div className={styles.skillCard}>
                                    <FontAwesomeIcon icon={faLeaf} style={{ color: '#4ade80', fontSize: '3.5rem' }} />
                                    <h3>MongoDB</h3>
                                </div>
                            </div>
                        </div>

                        <div className={styles.categoryContainer}>
                            <h3 className={styles.categoryTitle}>🚀 DevOps & Tools</h3>
                            <div className={styles.skillsGrid}>
                                <div className={styles.skillCard}>
                                    <FontAwesomeIcon icon={faGitAlt} style={{ color: '#f97316', fontSize: '3.5rem' }} />
                                    <h3>Git</h3>
                                </div>
                                <div className={styles.skillCard}>
                                    <FontAwesomeIcon icon={faGithub} style={{ color: '#f1f5f9', fontSize: '3.5rem' }} />
                                    <h3>GitHub</h3>
                                </div>
                                <div className={styles.skillCard}>
                                    <FontAwesomeIcon icon={faCode} style={{ color: '#3b82f6', fontSize: '3.5rem' }} />
                                    <h3>VS Code</h3>
                                </div>
                                <div className={styles.skillCard}>
                                    <FontAwesomeIcon icon={faRocket} style={{ color: '#a855f7', fontSize: '3.5rem' }} />
                                    <h3>Antigravity</h3>
                                </div>
                                <div className={styles.skillCard}>
                                    <FontAwesomeIcon icon={faPaperPlane} style={{ color: '#f97316', fontSize: '3.5rem' }} />
                                    <h3>Postman</h3>
                                </div>
                            </div>
                        </div>

                        <div className={styles.categoryContainer}>
                            <h3 className={styles.categoryTitle}>🤖 AI & ML Tools</h3>
                            <div className={styles.skillsGrid}>
                                <div className={styles.skillCard}>
                                    <FontAwesomeIcon icon={faFire} style={{ color: '#ef4444', fontSize: '3.5rem' }} />
                                    <h3>PyTorch</h3>
                                </div>
                                <div className={styles.skillCard}>
                                    <FontAwesomeIcon icon={faSmile} style={{ color: '#fcd34d', fontSize: '3.5rem' }} />
                                    <h3>Hugging Face</h3>
                                </div>
                                <div className={styles.skillCard}>
                                    <FontAwesomeIcon icon={faChartSimple} style={{ color: '#38bdf8', fontSize: '3.5rem' }} />
                                    <h3>Kaggle</h3>
                                </div>
                                <div className={styles.skillCard}>
                                    <FontAwesomeIcon icon={faInfinity} style={{ color: '#f59e0b', fontSize: '3.5rem' }} />
                                    <h3>Google Colab</h3>
                                </div>
                                <div className={styles.skillCard}>
                                    <FontAwesomeIcon icon={faMoon} style={{ color: '#f97316', fontSize: '3.5rem' }} />
                                    <h3>Jupyter</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <div className={styles.lowerSectionsWrapper}>
                    {/* EXPERIENCE SECTION */}
                    <section className={`${styles.experienceSection} ${styles.animateOnScroll}`} id="experience">
                        <h2 className={styles.sectionTitle}>Experience</h2>
                        <div className={styles.timeline}>
                            <div className={styles.timelineItem}>
                                <h3><span className={styles.highlightPink}>Etic Communication</span> and Multimedia member <span className={styles.highlightPurple}>(ESI Algiers)</span></h3>
                                <ul>
                                    <li>Organising Events (Algier's Up, S2EE..).</li>
                                    <li>Participating in Hacktic.</li>
                                </ul>
                            </div>
                            <div className={styles.timelineItem}>
                                <h3>Hexsoftwares</h3>
                                <ul>
                                    <li>Web Dev Summer Internship</li>
                                </ul>
                            </div>
                            <div className={styles.timelineItem}>
                                <h3><span className={styles.highlightGreen}>Shellmates</span> Club member</h3>
                                <ul>
                                    <li>Cyber Security BootCamp</li>
                                </ul>
                            </div>
                            <div className={styles.timelineItem}>
                                <h3><span className={styles.highlightRed}>GDG</span> <span className={styles.highlight}>Algiers</span> <span className={styles.highlightGreen}>Club</span> member — 6 mos</h3>
                                <ul>
                                    <li>Member — Nov 2025 - Present · Hybrid</li>
                                    <li>GDG Hack 3.0 Participation — Dec 2025 · Hackathon organised by GDG Algiers</li>
                                    <li>GDG Integration Program 2025 — Nov 2025</li>
                                </ul>
                            </div>
                            <div className={styles.timelineItem}>
                                <h3><span className={styles.highlightBlue}>School of AI</span> Algiers member — 7 mos</h3>
                                <ul>
                                    <li>Member — Oct 2025 - Present</li>
                                    <li>AI Real Camp — Feb 2026 - Present · 3 mos
                                        <span className={styles.timelineSubtext}>As a beginner-friendly datathon by the School of AI Algiers, AI Real Camp was my first step into the world of datathons. It allowed me to discover how AI challenges really work</span>
                                        <span className={styles.timelineHighlight}><FontAwesomeIcon icon={faGamepad} /> Kaggle Competing</span>
                                    </li>
                                    <li>AI Camp — Dec 2025 · Computer Vision and Artificial Neural Networks</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* PROJECTS SECTION */}
                    <section className={`${styles.projectsSection} ${styles.animateOnScroll}`} id="projects">
                        <h2 className={styles.sectionTitle}>Featured <span className={styles.highlight}>Projects</span></h2>
                        <div className={styles.projectsGrid}>
                            <a href="https://ali-abid-football-challenges.vercel.app" target="_blank" className={styles.projectCard}>
                                <div className={styles.projectContent}>
                                    <h4 className={styles.highlightBlue}>My Football Game</h4>
                                    <p>ali-abid-football-challenges <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.iconSmall} /></p>
                                </div>
                            </a>
                            <a href="https://cars-price-predictor.vercel.app" target="_blank" className={styles.projectCard}>
                                <div className={styles.projectContent}>
                                    <h4 className={styles.highlightRed}>My First ML model</h4>
                                    <p>cars-price-predictor <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.iconSmall} /></p>
                                </div>
                            </a>
                            <a href="https://eco-tracker-blush.vercel.app" target="_blank" className={styles.projectCard}>
                                <div className={styles.projectContent}>
                                    <h4 className={styles.highlightGreen}>Smart City Waste Management</h4>
                                    <p>eco-tracker-blush <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.iconSmall} /></p>
                                </div>
                            </a>
                            <a href="https://eco-garbage-classifier.netlify.app/" target="_blank" className={styles.projectCard}>
                                <div className={styles.projectContent}>
                                    <h4 className={styles.highlightGreen}>Garbage Classifier</h4>
                                    <p>eco-garbage-classifier <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.iconSmall} /></p>
                                </div>
                            </a>
                            <a href="https://world-cup-2026-predictions.netlify.app/" target="_blank" className={styles.projectCard}>
                                <div className={styles.projectContent}>
                                    <h4 className={styles.highlightOrange}>World Cup Predictions</h4>
                                    <p>world-cup-2026-predictions <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.iconSmall} /></p>
                                </div>
                            </a>
                        </div>
                    </section>
                </div>

                {/* ADDITIONAL INFO / CONTACT */}
                <section className={`${styles.contactSection} ${styles.animateOnScroll}`} id="additional-info">
                    <div className={styles.contactWrapper}>
                        <div className={styles.contactInfo}>
                            <h2>Additional <span className={styles.highlight}>Information</span></h2>
                            <ul>
                                <li><FontAwesomeIcon icon={faGlobe} className={styles.iconGray} /> <span>Languages: Arabic, French, English.</span></li>
                                <li><FontAwesomeIcon icon={faLinkedin} className={styles.iconBlue} /> <a href="https://www.linkedin.com/in/ali-abid-344701335/" target="_blank" rel="noopener noreferrer">linkedin.com/in/ali-abid</a></li>
                                <li><FontAwesomeIcon icon={faGithub} className={styles.iconWhite} /> <a href="https://github.com/AliAbid31" target="_blank" rel="noopener noreferrer">github.com/AliAbid31</a></li>
                                <li><FontAwesomeIcon icon={faPhone} className={styles.iconGreen} /> <span>Phone Number: +213 553 67 52 04</span></li>
                                <li><div className={styles.emailText}>Email: aliabid312006@email.com <br/> Or: oa_abid@esi.dz</div></li>
                            </ul>
                        </div>
                        <div className={styles.smallCard}>
                            <Image src="/guy.png" alt="Profile of Ali Abid" width={120} height={120} className={styles.smallAvatar} />
                            <div className={styles.cardDetails}>
                                <p><strong>Full Name:</strong> Ali Abid</p>
                                <p><strong>Age:</strong> 19 years old</p>
                                <p><strong>Nationality:</strong> Algerian</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
