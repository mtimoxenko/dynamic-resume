// space arround subtitulo project
// Tocar las viewport manage
// acomodar el html completo
// Desestructuración de Arreglos
// css variables globales
// forms contacto
// let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
// matrix mode
// chatbot
// <a href="./manage/root/index.html">./manage</a>

//  --------------------------------- HEADER ------------------------------
const headerLi = [/*{
    img: '<i class="fa-solid fa-mobile-screen-button"></i>',
    name: "Phone",
    detail: "+54 9 11 2502-8464",
    href: "tel:+5491125028464"
},*/
{
    img: '<i class="fa-regular fa-paper-plane"></i>',
    name: "Email",
    detail: "mtimochenko@tutanota.com",
    href: "mailto:mtimochenko@tutanota.com"
},
{
    img: '<i class="fa-solid fa-earth-americas"></i>',
    name: "Address",
    detail: "Buenos Aires, Argentina",
    href: "https://goo.gl/maps/8oUdmiFPnnRTFU7T6"
},
{
    img: '<i class="fa-brands fa-linkedin"></i>',
    name: "LinkedIn",
    detail: "@maximo-timochenko",
    href: "https://www.linkedin.com/in/maximo-timochenko/"
},
{
    img: '<i class="fa-regular fa-paper-plane"></i>',
    name: "Email",
    detail: "contact@stellinelab.com",
    href: "mailto:contact@stellinelab.com"
},
{
    img: '<i class="fa-brands fa-github"></i>',
    name: "GitHub",
    detail: "@fr3m3n",
    href: "https://github.com/fr3m3n"
}
]

//  --------------------------------- PROFILE ------------------------------
const profile = {
    name: "MAXIMO",
    surname: "TIMOCHENKO",
    profession: "Full Stack Developer - Crafting Digital Experiences",
    about: "Welcome to my personal web page! I'm a full stack developer dedicated to creating meaningful digital experiences. Continuous learning is a fundamental aspect of my professional journey. I actively explore new frameworks and technologies to stay up-to-date with the latest industry trends and deliver innovative solutions. By combining my technical skills, problem-solving mindset, and creativity, I strive to create outstanding digital experiences that leave a lasting impact. Thank you for visiting my page, and I look forward to collaborating on exciting projects that push the boundaries of what's possible in the digital realm. Let's create something remarkable together!",
    img: "./img/profile.png",
    alt: "profile img"
};

// --------------------------------- MAIN ------------------------------
const main = 
{  
    work:  // PROJECT
    [{
        year: "2022",
        month: "September",
        jobTitle: "Front-end Coding Challenge",
        jobSubtitle: ":: Manage",
        jobDescription: "The challenge aims to achieve implementing the correct HTML structure and utilizing semantic tags. Ensuring adaptability for different devices. Implementing forms correctly. Applying Flexbox and adhering to CSS best practices. Utilizing pseudo-elements and pseudo-classes. Incorporating images, icons, fonts, and backgrounds effectively.",
        jobTag: "#FrontEnd #SemanticTagging #ResponsiveDesign",
        img: '<i class="fa-brands fa-github"></i>',
        gitRef: "https://github.com/fr3m3n/f3-challenge"

    },
    {
        year: "2023",
        month: "June",
        jobTitle: "Interactive Resume",
        jobSubtitle: ":: WebPage Resume",
        jobDescription: "Challenge that goes beyond a traditional static document. JavaScript was chosen to build an interactive website. It was structured with sections like education, work experience, skills, and projects. Visually appealing layout was designed using HTML and CSS. Then, with JavaScript, added interactivity like tabs, animations, and filters. After thorough testing and optimization, the page was deployed on a hosting platform.",
        jobTag: "#FrontEnd #InteractiveResume #JavaScript #React",
        img: '<i class="fa-brands fa-github"></i>',
        gitRef: "https://github.com/fr3m3n/resume"

    }
    ],
    skill:  // SKILL
    [{
        name: "Programming",
        points: 75,
        detail: "Proficiency in programming languages: Java, JavaScript, Python.",
        id: "sk0pr"
    },
    {
        name: "Front-End Development",
        points: 70,
        detail:"Proficiency in HTML, CSS, and JavaScript framework such as React.",
        id: "sk1fr"
    },
    {
        name: "Back-End Development",
        points: 30,
        detail: "Familiarity with server-side technologies such as Node.js. Understanding how to build APIs and handle data storage (databases).",
        id: "sk2ba"
    },
    {
        name: "Database Management",
        points: 40,
        detail: "Knowledge of relational databases (MySQL). Understanding how to design, query, and optimize databases for building scalable and efficient applications.",
        id: "sk3da"
    },
    {
        name: "Version Control",
        points: 50,
        detail: "Proficiency with Git version control system for a collaborative development environment.",
        id: "sk4ve"
    },
    {
        name: "Problem-Solving",
        points: 80,
        detail: "Strong problem-solving skills. Able to analyze complex problems, break them down into smaller tasks, and find effective solutions using critical thinking and logical reasoning.",
        id: "sk5pr"
    },
    {
        name: "Web Services and APIs",
        points: 10,
        detail: "Understanding how to integrate with external APIs and consume web services. Knowledge of RESTful APIs and the ability to work with JSON/XML data formats.",
        id: "sk6we"
    },
    {
        name: "Testing and Debugging",
        points: 35,
        detail: "Proficiency in writing unit tests and performing debugging. Familiarity with testing frameworks (e.g., Jest, Pytest) and debugging tools.",
        id: "sk7te"
    }
    ],  
    education:  // EDUCATION
    [{
        degreeName: "University of Buenos Aires",
        establishmentName: "Mathematics and Computer Science",
        detail:"Solid grounding in mathematical principles and computer science concepts. Combination of technical, analytical, and problem-solving skills.",
        start: 2018,
        stop: 2022
    },
    {
        degreeName: "Digital House",
        establishmentName: "Certified Tech Developer",
        detail:"Programming and development of cutting-edge digital products. Comprehensive training in Front End, Back End, infrastructure, database, alongside invaluable soft skills including rapid learning agility, teamwork, communication, and unwavering professional mindset.",
        start: 2022,
        stop: new Date().getFullYear()
    }
    ],  
    expertise:  // EXPERTISE
    [{
        name: "Continuous Learning",
        points: 73,
        detail: "Able to quickly learn new tools and technologies, adapt to changing requirements, and apply them effectively in projects.",
        id: "ex0co"
    },
    {
        name: "Collaboration",
        points: 87,
        detail: "Expertise in working effectively within a development team, collaborating with other developers. Strong communication skills and the ability to effectively articulate and discuss technical concepts.",
        id: "ex1co"
    },
    {
        name: "Accessibility",
        points: 53,
        detail: "Understanding and implementing web accessibility standards to ensure your applications are usable by individuals with disabilities.",
        id: "ex2ac"
    },
    {
        name: "Agile Methodologies",
        points: 62,
        detail: "Expertise in Agile methodologies such as Scrum or Kanban.",
        id: "ex3ag"
    },
    {
        name: "Responsive Design",
        points: 76,
        detail: "Understanding the principles of responsive design and ensuring your applications are accessible across various devices and screen sizes.",
        id: "ex4re"
    }
    ],
    language: // LANGUAGE
    [{
        name: "Spanish",
        description: "Perfect Reading / Speaking / Listening "
    },
    {
        name: "English",
        description: "Intermediate Reading / Speaking / Listening "
    },
    {
        name: "Ukrainian",
        description: "Mother Language"
    },
    {
        name: "Russian",
        description: "Mother Language"
    }
    ],
    certification: // CERTIFICATION
    [{
        name: "CCNA: Introduction to Networks",
        establishment: "Cisco",
        date:"August 18, 2022",
        img: "./img/ccna.png",
        href: "https://www.credly.com/badges/9e63e230-0867-4002-99ad-8eba1840c3f4/linked_in?t=rguebz"
    },
    {
        name: "[JSE-40-01] JSE - Certified Entry-Level JavaScript Programmer",
        establishment: "JS Institute",
        date:"October 31, 2022",
        img: "./img/js.png",
        href: "https://www.credly.com/badges/ade37741-b339-4b34-a8a9-48cc97fbfd48/linked_in?t=rkmjva"
    },
    {
        name: "NDG Linux Unhatched",
        establishment: "Cisco",
        date:"April 27, 2023",
        img: "./img/ndg.png",
        href: "./img/linux-certificate.pdf"
    },
    {
        name: "EF SET English Certificate 70/100 (C1 Advanced)",
        establishment: "EF Standard English Test (EF SET) ",
        date:"October 31, 2022",
        img: "./img/eng2.png",
        href: "https://www.efset.org/cert/DLGA7e"
    }
    ],
    hobbie:  // HOBBIE
    [{
        name: "Sport",
        img: '<i class="fa-regular fa-heart fa-icon"></i>'
    },
    {
        name: "Sailing",
        img: '<i class="fa-solid fa-sailboat fa-icon"></i>'
    },
    {
        name: "Reading",
        img: '<i class="fa-solid fa-glasses fa-icon"></i>'
    },
    {
        name: "Art Cinema",
        img: '<i class="fa-solid fa-film fa-icon"></i>'
    },
    {
        name: "Photography",
        img: '<i class="fa-solid fa-camera-retro fa-icon"></i>'
    }
    ],
    reference:  // REFERENCE
    [{
        name: "Mercedes Bosco",
        role: "Specialist in Educational Inclusion",
        phone:"-",
        email:"merboscoprofe@gmail.com",
        www:"https://www.digitalhouse.com/ar",
        address:"Av. Monroe 860, C1428BKD CABA"
    },
    {
        name: "Leila Mufari",
        role: "Soft Kills Mentor - Latam",
        phone:"-",
        email:"leila.mufari@digitalhouse.com",
        www:"https://www.digitalhouse.com/ar",
        address:"Av. Monroe 860, C1428BKD CABA"
    }
    ], 
};

//  --------------------------------- FOOTER ------------------------------
const footer = [{
    img: '<i class="fa-brands fa-linkedin"></i>',
    alt: "LinkedIn",
    url: "https://www.linkedin.com/in/maximo-timochenko/"
},
{
    img: '<i class="fa-brands fa-github"></i>',
    alt: "GitHub",
    url: "https://github.com/fr3m3n"
}
];





window.addEventListener('load', function () {
// ================================================> RENDERS

    function renderHeader() {
        const header = document.querySelector("header")
        header.innerHTML = `
        <address>
            <ul class="flex addFlex" type="none">
            </ul>
        </address>`
        const heUl = document.querySelector("header ul");
        heUl.innerHTML = `
            <li>
                <a href=${headerLi[0].href} target="_blanc"  alt="${headerLi[0].name}">${headerLi[0].img}</a>
                <span>${headerLi[0].name}</span>
                <p>${headerLi[0].detail}</p>
            </li>`

        let contador = 1;
        const intervalo = setInterval(function(){
    
            heUl.innerHTML = `
            <li>
                <a href=${headerLi[contador].href} target="_blanc"  alt="${headerLi[contador].name}">${headerLi[contador].img}</a>
                <span>${headerLi[contador].name}</span>
                <p>${headerLi[contador].detail}</p>
            </li>`
            
            contador==headerLi.length-1 ? contador = 0 : contador++;

        }, 3000);

    }
    renderHeader();

    function renderProfile() {
        const container = document.querySelector(".profile")
            container.innerHTML = `
            <section id="description" class="flex">
                <h1>
                    <p>${profile.name}</p>
                    <p>${profile.surname}</p>
                </h1>
                <h4>${profile.profession}</h4>
                <hr/>
                <p>${profile.about}</p>
            </section>
            <section id="img">
                <img id="imgProfile" src="${profile.img}" alt="${profile.alt}">
            </section>
            `
    }
    renderProfile();

    function renderMain() {
        
        const work = document.querySelector(".main .work") // PROJECTS
        work.innerHTML = `<h2 id="workTitle">PROJECTS</h2>`
        main.work.forEach( mainWork => {
            work.innerHTML += `
            <div class="workDetail">
              <div class="workUpper">
                <div class="workDate flexBoxColumn">
                    <span>${mainWork.year}</span>
                    <span>${mainWork.month}</span>
                </div>
                <div class="verticalLine"></div>
                <div class="workDescription flex">
                    <h3>${mainWork.jobTitle}</h3>
                    <h4>
                        <a href=${mainWork.gitRef} target="_blanc"  alt="GitHub">${mainWork.img}</a>
                        ${mainWork.jobSubtitle}
                    </h4>
                    <p>${mainWork.jobDescription}</p>
                </div>
              </div>
              <div class="workTag">${mainWork.jobTag}</div>  
            </div>`
        });
    
        const skills = document.querySelector(".main .skill") // SKILLS
        skills.innerHTML = `<h2 id="skillTitle">SKILLS</h2>`
        main.skill.forEach( mainSkill => {
            skills.innerHTML += `
            <div class="skillDetail flex">
                <h3>${mainSkill.name}</h3>
                <div class="myProgress">
                    <div class="myBar" id="${mainSkill.id}"></div>
                </div>
            </div>`
        });

        const education = document.querySelector(".main .education") // EDUCATION
        education.innerHTML = `<h2 id="educationTitle">EDUCATION</h2>`
        main.education.forEach( mainEducation => {
            education.innerHTML += `
            <div class="educationDetail">
              <div class="educationUpper">
                <div class="educationDate">
                    <span>${mainEducation.start}</span>
                    <span>${mainEducation.stop}</span>
                </div>
                <div class="verticalLine"></div>
                <div class="educationDescription flex">
                    <h3>${mainEducation.degreeName}</h3>
                    <h4>${mainEducation.establishmentName}</h4>
                </div>
              </div>
              <div class="educationTag">${mainEducation.detail}</div>  
            </div>`
        });

        const expertise = document.querySelector(".main .expertise") // EXPERTISE
        expertise.innerHTML = `<h2 id="expertiseTitle">EXPERTISE</h2>`
        main.expertise.forEach( mainExpertise => {
            expertise.innerHTML += `
            <div class="expertiseDetail flex">
                <h3>${mainExpertise.name}</h3>
                <div class="myProgress">
                    <div class="myBar" id="${mainExpertise.id}"></div>
                </div>
            </div>`
        });

        const language = document.querySelector(".main .language") // LANGUAGE
        language.innerHTML = `<h2 id="languageTitle">LANGUAGE</h2>`
        main.language.forEach( mainLanguage => {
            language.innerHTML += `
            <div class="languageDetail flex">
                <div class="languageLi">
                    <ul><li></li></ul>
                </div>
                <div class="languageDescription flex">
                    <h3>${mainLanguage.name}</h3>
                    <p>${mainLanguage.description}</p>
                </div>
            </div>`
        });

        const certification = document.querySelector(".main .certification") // CERTIFICATION
        certification.innerHTML = `
        <h2 id="certificationTitle">CERTIFICATION</h2>`
        main.certification.forEach( mainCertification => {
            certification.innerHTML += `
            <div class="certificationDetail flex">
                <div class="certificationImg">
                    <img src="${mainCertification.img}" alt="certification image" class="imgCert">
                </div>
                <div class="certificationDescription flex">
                    <p>${mainCertification.date}</p>
                    <a href=${mainCertification.href} target="_blanc">${mainCertification.name}</a>
                    <h4>${mainCertification.establishment}</h4>
                </div>
            </div>`
        });

        /*const hobbie = document.querySelector(".main .hobbie") // HOBBIE
        hobbie.innerHTML = `
        <h2 id="hobbieTitle">HOBBIES</h2>
        <div class="hobbieBox flex">
        </div>`
        const hobbieBox = document.querySelector(".main .hobbie .hobbieBox")
        main.hobbie.forEach( mainHobbie => {
            hobbieBox.innerHTML += `
            <div class="hobbieDetail flex">
                ${mainHobbie.img}
                <h4>${mainHobbie.name}</h4>
            </div>`
        });*/
    }
    renderMain();

    function renderFooter() {

        const reference = document.querySelector("footer .reference") // REFERENCE
        reference.innerHTML = `
        <h2 id="referenceTitle">REFERENCE</h2>
        <div class="referenceBox flex">
        </div>`
        const referenceBox = document.querySelector("footer .reference .referenceBox")
        main.reference.forEach( mainReference => {
            referenceBox.innerHTML += `
            <div class="referenceDetail flex">
                <div>
                    <h4>${mainReference.name}</h4>
                    <h5>${mainReference.role}</h5>
                </div>
                <div>
                    <h5>P: ${mainReference.phone}</h5>
                    <h5>E: ${mainReference.email}</h5>
                    <h5>W: ${mainReference.www}</h5>
                    <h5>A: ${mainReference.address}</h5>
                </div>    
            </div>`
        });
    }
    renderFooter();








    // ================================================> EVENTS

    // skill & progress bar
    let elem = document.querySelectorAll(".myBar");
    elem.forEach(e =>{
        main.expertise.forEach(exp =>{
            if(exp.id===e.getAttribute("id")){
                // skill bar
                // e.style.width = exp.points + "%";

                // progress bar
                let i = 0;
                const interval = setInterval(function(){           
                    if(i<=exp.points){
                        e.style.width = i + "%";
                    } else{
                        clearInterval(interval);
                    }
                    i++;
                }, 35);
            }
        });
        main.skill.forEach(ski =>{
            if(ski.id===e.getAttribute("id")){
                // skill bar
                // e.style.width = ski.points + "%";

                // progress bar
                let i = 0;
                const interval = setInterval(function(){           
                    if(i<=ski.points){
                        e.style.width = i + "%";
                    } else{
                        clearInterval(interval);
                    }
                    i++;
                }, 35);
            }
        });         
    })



    // skills & expertise pop-up
 /*   const skill = document.querySelectorAll(".main .skill h3");
    skill.forEach(skill =>{
            
            skill.addEventListener('mouseover', function(){  
                main.skill.forEach(e=>{
                    if(e.name==skill.innerText){
                        
                        e.detail.forEach(i =>{
                            skill.innerHTML += `
                            <p>${i}</p>`
                        })                 
                    }     
                })
        
            });  
            // Event that collapse SKILLS on 'mouse out' event
            skill.addEventListener('mouseout', function(){
                skill.querySelectorAll("p").forEach(e => e.remove());
            });
    })*/

});