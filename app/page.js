import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
    <section class="container">
        <div class="div-1" id="about-me">
            <div class="name">
                <img src="./image.png" alt="">
                <p>Ali Abid
                    <br><br>
                    <span>CS Student at ESI Algiers and Web-Developper</span>
                </p>
            </div>
            <div class="bio">
                <p id="bio-text"></p>
                    <h2>Contact :</h2><br>
                    <span>Email : aliabid312006@email.com</span>
            </div>
        </div>
        <div class="div-2" id="skills">
        <div class="skills-content">
        <h2 style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">My Principle Software Skills</h2>
        <div class="skills-grid">
            <div class="skill-card html">
                <svg viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m14 113.8 9.5-107.6h81L95 113.7 64.3 121.1z" fill="#e44d26"/><path d="m64.3 115.3 25.3-7.2 8.8-99h-34.1z" fill="#f16529"/><path d="m36.7 50.8h27.6v12.9h-19.1l1.4 15.5h17.7v12.9H40.2zm28.4-12.9h13.2l-1.2 12.9h-12zm-12 30.6h11.2l.9 11.2 13.5 3.6v13.6l-24.8-6.7z" fill="#ebebeb"/><path d="m65.1 63.7-1.2-12.9h12l-1.2 12.9zm-.8 14.7h11.2l.9 11.2 13.5 3.6v13.6l-24.8-6.7z" fill="#fff"/></svg>
                <h3>HTML5</h3>
            </div>
            <div class="skill-card css">
                <svg viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m14 113.8 9.5-107.6h81L95 113.7 64.3 121.1z" fill="#1572b6"/><path d="m64.3 115.3 25.3-7.2 8.8-99h-34.1z" fill="#33a9dc"/><path d="m49.3 63.7 1.2-12.9h27.6v12.9H54.4zm27.6-12.9H65.1l-1.2 12.9h20.4zM49.3 79.2l1.4 15.5h12.5v-12.9H52l-.8-9.1zm18.5 2.7h-11.2l1.4 15.5H69l-1.2-13.3z" fill="#ebebeb"/><path d="M65.1 63.7H54.4l-1.2 12.9h11.9zm11.8-12.9H65.1l-1.2 12.9h20.4zm-12.6 28.4h12.3l-1.2-13.3h-12.3zm12.3 0-1.2-13.3-13.5-3.6v-13.6l24.8 6.7z" fill="#fff"/></svg>
                <h3>CSS3</h3>
            </div>
            <div class="skill-card js">
                <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h256v256H0V0Z" fill="#f7df1e"/><path d="M62.39 204.23h29.35s.62-3.1 1.86-5.58c1.24-2.48 4.34-6.82 12.4-6.82 8.06 0 12.4 3.72 12.4 9.3 0 5.58-3.1 7.44-11.16 11.16-11.78 4.96-19.22 11.78-19.22 21.08 0 11.16 8.06 16.74 21.7 16.74 11.16 0 18.6-3.72 21.7-13.02.62-2.48 1.24-5.58 1.24-5.58h-28.52s-.62 3.1-1.86 4.34c-1.24 1.24-3.1 2.48-6.2 2.48-3.1 0-4.96-1.24-4.96-4.34 0-3.1 1.86-4.34 8.68-7.44 11.16-4.96 22.32-11.16 22.32-24.8 0-12.4-8.06-20.46-26.04-20.46-17.36 0-24.8 7.44-28.52 13.64-1.24 2.48-1.86 4.96-1.86 4.96Zm85.56 28.53h31s.62-2.48 1.86-4.34c1.24-1.86 3.72-4.96 9.3-4.96 4.96 0 7.44 2.48 7.44 5.58 0 4.34-3.1 6.2-13.02 9.3-7.44 2.48-16.12 4.96-16.12 14.88 0 8.06 6.2 13.64 16.12 13.64 12.4 0 19.84-4.34 21.08-14.88 0-1.86.62-4.34.62-4.34h-31.62s-.62 2.48-1.86 3.72c-1.24 1.24-3.1 2.48-5.58 2.48-3.1 0-4.34-1.24-4.34-3.72s1.24-2.48 4.34-3.72c6.2-1.86 14.26-4.34 14.26-11.16 0-6.2-4.34-9.92-13.02-9.92-10.54 0-16.12 4.96-18.6 8.68-1.24 1.86-1.86 3.72-1.86 3.72Z"/></svg>
                <h3>JavaScript</h3>
            </div>
            <div class="skill-card react">
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 552.2c-12 .3-23.9-4.2-32.9-13.1-9-9-14.2-21.1-13.9-33.2 2.3-79.5 63.8-144 143.6-144s141.3 64.5 143.6 144c.3 12-4.9 24.1-13.9 33.2-9 9-20.9 13.4-32.9 13.1-93.5 2.4-177.2-2.3-270.1 0zm-96-156.4c-1.4 83.2-68.5 149.2-152.2 147.1-83.7-2.1-149.8-69.5-147.7-153.3 2.1-83.7 69.5-149.8 153.3-147.7 83.7 2.1 149.8 69.5 147.7 153.3-.3 1.4-.4 2.8-.4 4.2zm96 312.8c1.4-83.2 68.5-149.2 152.2-147.1 83.7 2.1 149.8 69.5 147.7 153.3-2.1 83.7-69.5 149.8-153.3 147.7-83.7-2.1-149.8-69.5-147.7-153.3.2-1.4.3-2.8.4-4.2zM759.7 240c-66.6-66.7-156-103.3-247.7-103.3S330.9 173.3 264.3 240c-66.7 66.6-103.3 156-103.3 247.7s36.7 181.1 103.3 247.7c66.6 66.7 156 103.3 247.7 103.3s181.1-36.7 247.7-103.3c66.7-66.6 103.3-156 103.3-247.7s-36.7-181.1-103.3-247.7zM805 512c0 161.9-131.1 293-293 293S219 673.9 219 512 350.1 219 512 219s293 131.1 293 293z" fill="#61DAFB"/></svg>
                <h3>React</h3>
            </div>
            <div class="skill-card python">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.19 13.23a2.33 2.33 0 0 1-2.31-2.32v-2.3a2.33 2.33 0 0 1 2.31-2.31h3.18v-3.2H14.16v3.2h3.18a2.32 2.32 0 0 1 2.31 2.31v2.3a2.32 2.32 0 0 1-2.31 2.32h-3.18v10.36h-3.18V2.78H1.81v3.2h3.18a2.32 2.32 0 0 1 2.31 2.31v6.88H1.81v3.2h12.35v-3.2H7.3a2.33 2.33 0 0 1-2.31-2.32V8.6a2.32 2.32 0 0 1 2.31-2.31h3.18V2.78h3.18v10.45Z" fill="#3776ab"/><path d="M12.35 15.54a2.33 2.33 0 0 1-2.31-2.31h-3.2v3.19h10.36v3.18H1.81v-3.18h3.18a2.32 2.32 0 0 1 2.31-2.31V8.6H1.81v3.19h-3.18v3.18h16.88v-3.18h-3.18ZM10.04 1.81a2.31 2.31 0 0 1 2.31-2.31h6.88v3.18H12.35a2.32 2.32 0 0 1-2.31-2.31V-1.47H6.86v6.2h3.18Z" fill="#ffde57"/></svg>
                <h3>Python</h3>
            </div>
            <div class="skill-card figma">
                <svg viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z" fill="#2c2c2c" class="fill-1b1b1b"/><path d="M12 24c3.314 0 6-5.373 6-12S15.314 0 12 0v24Z" fill="#0acf83" class="fill-0acf83"/><path d="M12 18a6 6 0 0 1-6-6h12a6 6 0 0 1-6 6Z" fill="#a259ff" class="fill-a259ff"/><path d="M6 12a6 6 0 0 1 6-6v12a6 6 0 0 1-6-6Z" fill="#f24e1e" class="fill-f24e1e"/><path d="M12 6a6 6 0 0 1 6 6h-6V6Z" fill="#ff7262" class="fill-ff7262"/></svg>
                <h3>Figma</h3>
            </div>
        </div>
    </div>
    </div>
    <div class="div-3" id="experience">
        <section id="experience" class="fade-in">
            <h1>Experience :</h1>
            <div class="work">
                <h3>
                    <span style="color: #03e9f4;">Etic Communication </span>
                    <span style="color: #E44D26;">and Multimedia</span>
                    <span style="color: #F7DF1E;">member</span> 
                    <span style="color: orange;">(ESI Algiers)</span>
                </h3>
                <ul style="list-style-type: disc; padding-left: 2vw;">
                    <li>Organising Events (Algier's Up, S2EE..).</li>
                    <li>Participating in Hackatons.</li>
                </ul>
            </div>
            <div class="projects">
                <h1>Projects :</h1>
                <h2>My Football Game :</h2>
                <a style="padding-left: 2vw; font-size: 1.2rem;" href="https://ali-abid-football-challenges.vercel.app" target="_blank">ali-abid-football-challenges</a>
            </div>
            <div class="Additional-Info">
                <h1>Additional Information :</h1>
                <ul style="list-style-type: disc; padding-left: 2vw;">
                <li><i class="fas fa-globe"></i> Languages: Arabic, French, English.</li>
                <li><i class="fab fa-linkedin"></i> Linkedin : <a href="https://www.linkedin.com/in/ali-abid-344701335/" target="_blank">linkedin.com/Ali Abid</a></li>
                <li><i class="fab fa-github"></i> GitHub : <a href="https://github.com/aliabid31" target="_blank">github.com/AliAbid31</a></li>
                <li><i class="fas fa-phone"></i> Phone Number : +213 553 67 52 04</li>
                </ul>
            </div>
        </section>
        <section class="square" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <div class="small-square" style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 70%; background-color: rgb(175, 72, 111); width: 70%;">
                <img style="width: 20vw; height: 20vw;" src="./guy.png" alt="">
                <p>Full Name : Ali Abid</p>
                <p>Age : 19 years old</p>
                <p>Nationality : <span class="fi fi-dz"></span> Algerian </p> 
            </div>
        </section>
    </div>
    </section>
    </div>
  );
}
