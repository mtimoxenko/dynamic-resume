
// pop-up
// matrix mode

window.addEventListener('load', function () {

    const endpoints = [
        {
            id: 0,
            name: "certification",
            "url": "./json/certification.json"
        },
        {
            id: 1,
            name: "contact",
            url: "./json/contact.json"
        },
        {
            id: 2,
            name: "education",
            url: "./json/education.json"
        },
        {
            id: 3,
            name: "expertise",
            url: "./json/expertise.json"
        },
        {
            id: 4,
            name: "language",
            url: "./json/language.json"
        },
        {
            id: 5,
            name: "profile",
            url: "./json/profile.json"
        },
        {
            id: 6,
            name: "project",
            url: "./json/project.json"
        },
        {
            id: 7,
            name: "reference",
            url: "./json/reference.json"
        },
        {
            id: 8,
            name: "skill",
            url: "./json/skill.json"
        }
    ]
    // destructuring assignment
    const [
        certification,
        contact,
        education,
        expertise,
        language,
        profile,
        project,
        reference,
        skill
    ] = endpoints.map(key => key.url);


    // ================================================> MEDIA QUERIES
    const checkTablet = window.matchMedia('screen and (min-width: 576px) and (max-width: 991px)');
    const checkDesktop = window.matchMedia('screen and (min-width: 992px)');


    // ================================================> RENDERS
    const body = document.querySelector('body');
    const header = document.createElement("header");
    const main = document.createElement("main");
    const footer = document.createElement("footer");
    // nodes tree
    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);
    // set atributes
    body.classList.add('margin2','flex-column','gap50');
    header.classList.add('margin2');
    main.classList.add('margin2','flex-column','gap200');
    footer.classList.add('margin2','flex-column','gap100', 'space-between');


    // Media Queries
    if(checkTablet.matches) {
        console.log('TABLET');
        footer.classList.add('center-items');
    };
    if(checkDesktop.matches) {
        console.log('DESKTOP');
        footer.classList.remove('flex-column', 'gap100', 'space-between');
        footer.classList.add('center-items', 'flex-row', 'space-content');
    };


    // HEADER
    (function () {

        // Fetch API   
        getApi(contact); 
        function getApi(endpoint) {
            fetch(endpoint)
            .then (res => res.json())
            .then (data => {
                renderHTMLSkeleton(data);
                setContent(data);
                interval(data);
            });
        };

        function renderHTMLSkeleton(data){
            const fragment = new DocumentFragment();
            const address = document.createElement("address");
            const ul = document.createElement("ul");
            const li = document.createElement("li");
            const a = document.createElement("a");
            const span = document.createElement("span");
            const p = document.createElement("p");
            const icon = document.createElement("i");

            // nodes tree
            a.appendChild(icon);
            li.appendChild(a);
            li.appendChild(span);
            li.appendChild(p);
            ul.appendChild(li);
            address.appendChild(ul);
            fragment.appendChild(address);
            header.appendChild(fragment);

            // set atributes
            ul.setAttribute("type", "none");
            a.setAttribute("target", "_blanc");
            a.setAttribute("href", `${data[0].href}`);
            a.setAttribute("target", "_blanc");
            a.setAttribute("alt", `${data[0].medium}`);
            icon.classList.add(`${data[0].iconClass[0]}`, `${data[0].iconClass[1]}`);
        }

        function setContent(data){
            document.querySelector('span').textContent = ` ${data[0].medium}`;
            document.querySelector('li p').textContent = `${data[0].detail}`;
        }
        
        function interval(data) {
            const span = document.querySelector('span');
            const p = document.querySelector('li p');
            const a = document.querySelector('a');
            const icon = document.querySelector('i')

            let i = 1;
            const interval = setInterval(function(){    

                a.setAttribute("href", `${data[i].href}`);
                a.setAttribute("alt", `${data[i].medium}`);
                icon.setAttribute("class","");
                icon.classList.add(`${data[i].iconClass[0]}`, `${data[i].iconClass[1]}`);
                span.textContent = ` ${data[i].medium}`;
                p.textContent = `${data[i].detail}`;
                    
                i==data.length-1 ? i = 0 : i++;
            }, 2000);

        };
    })();    

    // MAIN
    (function() {

        // main html skeleton
        (function(){

            const fragment = new DocumentFragment();
            const article1 = document.createElement("article");
            const article2 = document.createElement("article");
            const div1 = document.createElement("div");
            const div2 = document.createElement("div");
            const divDesktop1 = document.createElement("div");
            const section1 = document.createElement("section");
            const section2 = document.createElement("section");
            const section3 = document.createElement("section");
            const section4 = document.createElement("section");
            const section5 = document.createElement("section");
            const section6 = document.createElement("section");
            const section7 = document.createElement("section");
            const title1 = document.createElement("h2");
            const title2 = document.createElement("h2");
            const title3 = document.createElement("h2");
            const title4 = document.createElement("h2");
            const title5 = document.createElement("h2");
            const title6 = document.createElement("h2");
            const title7 = document.createElement("h2");

            // nodes tree
            section1.appendChild(title1);
            section2.appendChild(title2);
            section3.appendChild(title3);
            section4.appendChild(title4);
            section5.appendChild(title5);
            section6.appendChild(title6);
            section7.appendChild(title7);           
            div1.appendChild(section1);
            divDesktop1.appendChild(section2);
            divDesktop1.appendChild(section3);
            div1.appendChild(divDesktop1);
            div2.appendChild(section4);
            div2.appendChild(section5);
            div2.appendChild(section6);
            div2.appendChild(section7);
            article2.appendChild(div1);
            article2.appendChild(div2);
            fragment.appendChild(article1);
            fragment.appendChild(article2);
            main.appendChild(fragment);   
        
            // set atributes
            article1.setAttribute("id", "mainArticleProfile");
            article2.setAttribute("id", "mainArticleDetail");
            div1.setAttribute("id", "leftMain");
            div2.setAttribute("id", "rightMain");
            section1.setAttribute("id", "project");
            section2.setAttribute("id", "expertise");
            section3.setAttribute("id", "certification");
            section4.setAttribute("id", "skill");
            section5.setAttribute("id", "education");
            section6.setAttribute("id", "language");
            section7.setAttribute("id", "hobbie");
            title1.setAttribute("id", "projectH2");
            title2.setAttribute("id", "expertiseH2");
            title3.setAttribute("id", "certificationH2");
            title4.setAttribute("id", "skillH2");
            title5.setAttribute("id", "educationH2");
            title6.setAttribute("id", "languageH2");
            title7.setAttribute("id", "hobbieH2");

            article1.classList.add('flex-column','gap25');
            article2.classList.add('flex-column','gap50');
            div1.classList.add('flex-column', 'gap50');
            div2.classList.add('flex-column', 'gap50');
            section1.classList.add('flex-column','gap15');
            divDesktop1.classList.add('flex-column','gap50');
            section2.classList.add('flex-column','gap15');
            section3.classList.add('flex-column','gap15');
            section4.classList.add('flex-column','gap15');
            section5.classList.add('flex-column','gap15');
            section6.classList.add('flex-column','gap15');
            section7.classList.add('flex-column','gap15');

            // Media Queries
            if(checkTablet.matches) {
                article2.classList.add('center-items');

                div1.classList.add('tablet-box');
                div2.classList.add('tablet-box');
            }; 
            if(checkDesktop.matches) {
                div1.classList.add('tablet-box');
                div2.classList.add('tablet-box');

                article1.classList.remove('flex-column');
                article1.classList.add('flex-row', 'space-content');
    
                article2.classList.remove('flex-column');
                article2.classList.add('flex-row', 'space-content', 'start-items');
            }; 

        }());
        
        // profile
        (function() {

            // Fetch API   
            getApi(profile); 
            function getApi(endpoint) {
                fetch(endpoint)
                .then (res => res.json())
                .then (data => {
                    renderHTMLSkeleton(data);
                    setContent(data);
                });
            };

            function renderHTMLSkeleton(data){
                const fragment = new DocumentFragment();  
                const article = document.querySelector('#mainArticleProfile');
                const section1 = document.createElement("section");
                const section2 = document.createElement("section");
                const h1 = document.createElement("h1");
                const p1 = document.createElement("p");
                const p2 = document.createElement("p");
                const p3 = document.createElement("p");
                const h4 = document.createElement("h4");
                const hr = document.createElement("hr");
                const img = document.createElement("img");

                // nodes tree
                h1.appendChild(p1);
                h1.appendChild(p2);
                section1.appendChild(h1);
                section1.appendChild(h4);
                section1.appendChild(hr);
                section1.appendChild(p3);
                section2.appendChild(img);
                fragment.appendChild(section1);
                fragment.appendChild(section2);
                article.appendChild(fragment);

                // set atributes
                section1.setAttribute("id", "profileDescription");
                section2.setAttribute("id", "profileImg");
                p1.setAttribute("id", "profileName");
                p2.setAttribute("id", "profileSurname");
                p3.setAttribute("id", "profileAbout");
                h4.setAttribute("id", "profileProfession");
                img.setAttribute("id", "imgProfile");
                img.setAttribute("src", `${data.img}`);
                img.setAttribute("alt", `${data.alt}`);

                article.classList.add('center-items');
                section1.classList.add('flex-column','center-items','gap5');

                img.addEventListener('mouseover', function () {
                    img.setAttribute("src", `${data.img2}`);
                });
                img.addEventListener('mouseout', function () {
                    img.setAttribute("src", `${data.img}`);
                });

                // Media Queries
                if(checkTablet.matches || checkDesktop.matches) {
                    section1.classList.add('tablet-box');

                    article.classList.add('flex-column');
                }; 
                if(checkDesktop.matches) {
                    article.classList.remove('flex-column');
                    article.classList.add('flex-row');
                }; 
                
            }
        
            function setContent(data){
                document.querySelector('#profileName').textContent = `${data.name}`;
                document.querySelector('#profileSurname').textContent = `${data.surname}`;
                document.querySelector('#profileAbout').textContent = `${data.about}`;
                document.querySelector('#profileProfession').textContent = `${data.profession}`;
            }

        }());

        // projects
        (function() {

            // Fetch API   
            getApi(project); 
            function getApi(endpoint) {
                fetch(endpoint)
                .then (res => res.json())
                .then (data => {
                    renderData(data);
                });
            };

            function renderData(data){
                document.querySelector('#projectH2').textContent = 'PROJECTS';

                for (let iterator of data) {
                    const fragment = new DocumentFragment();  
                    const section = document.querySelector('#project');
                    const h3 = document.createElement("h3");
                    const div1 = document.createElement("div");
                    const div2 = document.createElement("div");
                    const div5 = document.createElement("div");
                    const div6 = document.createElement("div");
                    const a = document.createElement("a");
                    const p = document.createElement("p");
                    const span3 = document.createElement("span");

                    // nodes tree
                    div2.appendChild(h3);
                    div2.appendChild(a);
                    div2.appendChild(span3);
                    div5.appendChild(p);
                    div1.appendChild(div2)
                    div1.appendChild(div5);
                    div1.appendChild(div6);
                    fragment.appendChild(div1);
                    section.appendChild(fragment);

                    // atributes
                    a.textContent = '{ :: }';
                    a.setAttribute("href", `${iterator.gitRef}`);
                    a.setAttribute("target", '_blanc');
                    a.setAttribute("alt", 'GitHub');
                    h3.textContent = `${iterator.title}`;
                    span3.textContent = `${iterator.subtitle}`;
                    p.textContent = `${iterator.description}`;
                    div1.classList.add('gap5','flex-column');
                    div6.textContent = `${iterator.tag}`;
                }
                
            }

        }());
       
        // skills
        (function() {

            // Fetch API   
            getApi(skill); 
            function getApi(endpoint) {
                fetch(endpoint)
                .then (res => res.json())
                .then (data => {
                    renderData(data);
                    progressBar(data);
                });
            };

            function renderData(data){
                document.querySelector('#skillH2').textContent = 'SKILLS';

                for (let iterator of data) {
                    const fragment = new DocumentFragment();  
                    const section = document.querySelector('#skill');
                    const h3 = document.createElement("h3");
                    const div1 = document.createElement("div");
                    const div2 = document.createElement("div");
                    const div3 = document.createElement("div");
                    const toolContainer = document.createElement("div");
                    const toolText = document.createElement("div");

                    // nodes tree
                    div2.appendChild(div3);
                    toolContainer.appendChild(h3);
                    toolContainer.appendChild(toolText);
                    div1.appendChild(toolContainer);
                    div1.appendChild(div2);
                    fragment.appendChild(div1);
                    section.appendChild(fragment);

                    // atributes
                    toolText.textContent = `${iterator.detail}`;

                    toolContainer.classList.add("tooltip-container");
                    h3.classList.add("tooltip");
                    toolText.classList.add("tooltip-text");
                    h3.textContent = `${iterator.name}`;
                    div1.classList.add('skill-div','flex-column','center-items');
                    div2.classList.add("myProgress");
                    div3.classList.add("myBar");
                    div3.setAttribute("id", `${iterator.id}`);

                }
                
            }

            function progressBar(data){
                let elem = document.querySelectorAll(".myBar");
                elem.forEach(e =>{

                    for (let iterator of data) {
                        if(iterator.id===e.getAttribute("id")){
                            let i = 0;
                            const interval = setInterval(function(){           
                                if(i<=iterator.points){
                                    e.style.width = i + "%";
                                } else{
                                    clearInterval(interval);
                                }
                                i++;
                            }, 35);
                        }
                    }
      
                })
            }

        }());

        // education
        (function() {

            // Fetch API   
            getApi(education); 
            function getApi(endpoint) {
                fetch(endpoint)
                .then (res => res.json())
                .then (data => {
                    renderData(data);
                });
            };

            function renderData(data){
                document.querySelector('#educationH2').textContent = 'EDUCATION';

                for (let iterator of data) {
                    const fragment = new DocumentFragment();  
                    const section = document.querySelector('#education');
                    const h3 = document.createElement("h3");
                    const h4 = document.createElement("h4");
                    const div1 = document.createElement("div");
                    const div2 = document.createElement("div");
                    const div6 = document.createElement("div");

                    // nodes tree
                    div2.appendChild(h3);
                    div2.appendChild(h4);
                    div1.appendChild(div2);
                    div1.appendChild(div6);
                    fragment.appendChild(div1);
                    section.appendChild(fragment);

                    // atributes
                    h3.textContent = `${iterator.degree}`;
                    h4.textContent = `${iterator.establishment}`;
                    div6.textContent = `${iterator.detail}`;
                    div1.classList.add('gap10','flex-column');
                }
             
            }

        }());

        // expertise
        (function() {

            // Fetch API   
            getApi(expertise); 
            function getApi(endpoint) {
                fetch(endpoint)
                .then (res => res.json())
                .then (data => {
                    renderData(data);
                    progressBar(data);
                });
            };

            function renderData(data){
                document.querySelector('#expertiseH2').textContent = 'EXPERTISE';

                for (let iterator of data) {
                    const fragment = new DocumentFragment();  
                    const section = document.querySelector('#expertise');
                    const h3 = document.createElement("h3");
                    const div1 = document.createElement("div");
                    const div2 = document.createElement("div");
                    const div3 = document.createElement("div");
                    const toolContainer = document.createElement("div");
                    const toolText = document.createElement("div");

                    // nodes tree
                    div2.appendChild(div3);
                    toolContainer.appendChild(h3);
                    toolContainer.appendChild(toolText);
                    div1.appendChild(toolContainer);
                    div1.appendChild(div2);
                    fragment.appendChild(div1);
                    section.appendChild(fragment);



                    // atributes
                    h3.textContent = `${iterator.name}`;
                    toolText.textContent = `${iterator.detail}`;

                    toolContainer.classList.add("tooltip-container");
                    h3.classList.add("tooltip");
                    toolText.classList.add("tooltip-text");
                    div1.classList.add('flex-column','center-items');
                    div2.classList.add("myProgress");
                    div3.classList.add("myBar");
                    div3.setAttribute("id", `${iterator.id}`);
                }
                
            }

            function progressBar(data){
                let elem = document.querySelectorAll(".myBar");
                elem.forEach(e =>{

                    for (let iterator of data) {
                        if(iterator.id===e.getAttribute("id")){
                            let i = 0;
                            const interval = setInterval(function(){           
                                if(i<=iterator.points){
                                    e.style.width = i + "%";
                                } else{
                                    clearInterval(interval);
                                }
                                i++;
                            }, 35);
                        }
                    }     
                })
            }
        }());
        
        // language
        (function() {

            // Fetch API   
            getApi(language); 
            function getApi(endpoint) {
                fetch(endpoint)
                .then (res => res.json())
                .then (data => {
                    renderData(data);
                });
            };

            function renderData(data){
                document.querySelector('#languageH2').textContent = 'LANGUAGE';
                const divMain = document.createElement("div");
                const divLeft = document.createElement("div");
                const divRight = document.createElement("div");
                const section = document.querySelector('#language');

                // nodes tree
                divMain.appendChild(divLeft);
                divMain.appendChild(divRight);
                section.appendChild(divMain);

                // atributes
                divMain.classList.add('flex-row','space-content');
                divMain.setAttribute("id", "divMainLang");
                divLeft.classList.add('flex-column','gap15');
                divRight.classList.add('flex-column','gap15');

                let i = 0;
                for (let iterator of data) {
                    const fragment = new DocumentFragment();  
                    const div = document.createElement("div");
                    const h3 = document.createElement("h3");
                    const p = document.createElement("p");

                    // nodes tree
                    div.appendChild(h3);
                    div.appendChild(p);

                    fragment.appendChild(div);
                    i<data.length/2 ? divLeft.appendChild(fragment) : divRight.appendChild(fragment);

                    // atributes
                    h3.textContent = `${iterator.name}`;
                    p.textContent = `${iterator.description}`;
                    div.classList.add('gap10');
                    i++;
                } 

                // Media Queries
                if(checkDesktop.matches) {
                    divMain.classList.remove('flex-row');
                    divMain.classList.add('flex-column', 'gap25');
                }; 
                
            }

        }());

        // certification
        (function() {

            // Fetch API   
            getApi(certification); 
            function getApi(endpoint) {
                fetch(endpoint)
                .then (res => res.json())
                .then (data => {
                    renderData(data);
                });
            };

            function renderData(data){

                document.querySelector('#certificationH2').textContent = 'CERTIFICATION';
                const divMain = document.createElement("div");
                const divLeft = document.createElement("div");
                const divRight = document.createElement("div");
                const section = document.querySelector('#certification');

                // nodes tree
                divMain.appendChild(divLeft);
                divMain.appendChild(divRight);
                section.appendChild(divMain);

                // atributes
                divMain.classList.add('flex-row','space-content');
                divMain.setAttribute("id", "divMainCert");
                divLeft.classList.add('flex-column','gap15');
                divRight.classList.add('flex-column','gap15');

                let i = 0;
                for (let iterator of data) {
                    const fragment = new DocumentFragment();  

                    const div1 = document.createElement("div");
                    const div2 = document.createElement("div");
                    const div3 = document.createElement("div");
                    const img = document.createElement("img");
                    const p = document.createElement("p");
                    const a = document.createElement("a");
                    const h4 = document.createElement("h4");

                    // nodes tree
                    div2.appendChild(img);
                    div3.appendChild(p);
                    div3.appendChild(a);
                    div3.appendChild(h4);
                    div1.appendChild(div2);
                    div1.appendChild(div3);

                    fragment.appendChild(div1);
                    i<data.length/2 ? divLeft.appendChild(fragment) : divRight.appendChild(fragment);
                    // section.appendChild(fragment);

                    // atributes
                    div1.classList.add('flex-column','gap10');
                    div3.classList.add('flex-column','gap5');
                    img.setAttribute("src", `${iterator.img}`);
                    img.setAttribute("alt", "certification image");
                    img.classList.add('imgCert');
                    p.textContent = `${iterator.date}`;
                    a.setAttribute("href", `${iterator.href}`);
                    a.setAttribute("target", "_blanc");
                    a.textContent = `${iterator.name}`;
                    h4.textContent = `${iterator.establishment}`;
                    i++;
                }  
                
                // Media Queries
                if(checkDesktop.matches) {
                    divMain.classList.remove('flex-row');
                    divMain.classList.add('flex-column', 'gap25');
                }; 
            }

        }());

    })();  

    // FOOTER
    (function() {

        // footer html skeleton
        (function(){

            const fragment = new DocumentFragment();
            const section1 = document.createElement("section");
            const section2 = document.createElement("section");
            const div1 = document.createElement("div");
            const div2 = document.createElement("div");
            const title1 = document.createElement("h2");
            const title2 = document.createElement("h2");

            // nodes tree
            section1.appendChild(title1);
            section1.appendChild(div1);
            section2.appendChild(title2);
            section2.appendChild(div2);
            fragment.appendChild(section1);
            fragment.appendChild(section2);
            footer.appendChild(fragment);   
        
            // set atributes
            section1.setAttribute("id", "reference");
            section1.classList.add('flex-column','gap15');
            section2.setAttribute("id", "contact");
            section2.classList.add('flex-column','gap15');
            title1.setAttribute("id", "referenceH2");
            title2.setAttribute("id", "contactH2");
            div1.setAttribute("id", "referenceBox");
            div2.setAttribute("id", "contactBox");

        }());

        // reference
        (function() {

            // Fetch API   
            getApi(reference); 
            function getApi(endpoint) {
                fetch(endpoint)
                .then (res => res.json())
                .then (data => {
                    renderData(data);
                });
            };

            function renderData(data){
                document.querySelector('#referenceH2').textContent = 'REFERENCE';

                for (let iterator of data) {
                    const fragment = new DocumentFragment();  
                    const box = document.querySelector('#referenceBox');
                    const div1 = document.createElement("div");
                    const div2 = document.createElement("div");
                    const div3 = document.createElement("div");
                    const name = document.createElement("h4");
                    const role = document.createElement("h5");
                    const email = document.createElement("h5");
                    const www = document.createElement("h5");
                    const address = document.createElement("h5");

                    // nodes tree
                    div2.appendChild(name);
                    div2.appendChild(role);
                    div3.appendChild(email);
                    div3.appendChild(www);
                    div3.appendChild(address);
                    div1.appendChild(div2);
                    div1.appendChild(div3);

                    fragment.appendChild(div1);
                    box.appendChild(fragment);

                    // atributes
                    box.classList.add('flex-column','gap10');
                    div1.classList.add('flex-column','gap5');
                    name.textContent = `${iterator.name}`;
                    role.textContent = `${iterator.role}`;
                    email.textContent = `{e} ${iterator.email}`;
                    www.textContent = `{w} ${iterator.www}`;
                    address.textContent = `{a} ${iterator.address}`;

                }
                
                // Media Queries
                if(checkTablet.matches) {
                    const box = document.querySelector('#referenceBox');
                    box.classList.remove('gap10');
                    box.classList.add('gap25');
                };  
                if(checkDesktop.matches) {
                    const box = document.querySelector('#referenceBox');
                    box.classList.remove('flex-column', 'gap10');
                    box.classList.add('flex-row', 'gap50');
                };   

            }

        }());

        // contact
        (function() {

            document.querySelector('#contactH2').textContent = "Let's talk";
            const box = document.querySelector('#contactBox');

                const form = document.createElement("form");

                const div1 = document.createElement("div");
                const div2 = document.createElement("div");

                const nameLabel = document.createElement("label");
                const emailLabel = document.createElement("label");
                const messageLabel = document.createElement("label");

                const nameInput = document.createElement("input");
                const emailInput = document.createElement("input");
                const messageInput = document.createElement("input");

                const nameSpan = document.createElement("span");
                const emailSpan = document.createElement("span");
                const messageSpan = document.createElement("span");

                const p1 = document.createElement("p");
                const p2 = document.createElement("p");
                const button = document.createElement("button");  

                // nodes tree
                nameLabel.appendChild(nameInput);
                nameLabel.appendChild(nameSpan);

                emailLabel.appendChild(emailInput);
                emailLabel.appendChild(emailSpan);

                div1.appendChild(p1);
                div1.appendChild(p2);
                div2.appendChild(nameLabel);
                div2.appendChild(emailLabel);

                messageLabel.appendChild(messageInput);
                messageLabel.appendChild(messageSpan);

                form.appendChild(div1);
                form.appendChild(div2);
                form.appendChild(messageLabel);
                form.appendChild(button);

                box.appendChild(form);

                // atributes
                form.classList.add('flex-column','gap10', 'center-items');
                div2.classList.add('flex-column','gap15', 'center-content');

                nameLabel.classList.add('custom-field', 'two');
                emailLabel.classList.add('custom-field', 'two');
                messageLabel.classList.add('custom-field', 'two');

                nameSpan.classList.add('placeholder');
                emailSpan.classList.add('placeholder');
                messageSpan.classList.add('placeholder');

                nameSpan.textContent = 'Your Name (required)';
                emailSpan.textContent = 'Your E-mail (required)';
                messageSpan.textContent = 'Your Message';

                p1.textContent = "I'd love to hear from you.";
                p2.textContent = "Tell me a bit about your projects -- or just say hello!";

                button.textContent = "Get in touch";

                div2.setAttribute("id", "contact-div");

                nameLabel.setAttribute("for", "name");
                emailLabel.setAttribute("for", "email");
                messageLabel.setAttribute("for", "message");

                nameInput.setAttribute("type", "text");
                emailInput.setAttribute("type", "email");
                messageInput.setAttribute("type", "text");

                nameInput.setAttribute("placeholder", "");
                emailInput.setAttribute("placeholder", "");
                messageInput.setAttribute("placeholder", "");

                nameInput.setAttribute("id", "name");
                emailInput.setAttribute("id", "email");
                messageInput.setAttribute("id", "message");

                nameInput.setAttribute("required", "true");
                emailInput.setAttribute("required", "true");

                button.setAttribute("type", "submit");

                // Media Queries
                if(checkTablet.matches || checkDesktop.matches) {    
                    div2.classList.remove('flex-column');
                    div2.classList.add('flex-row');                
                }               

        }());
   
    })(); 


    // ==================> expertise OBSERVER
    let expertiseCount = 0;
    // Select the target element
    const targetElementExpertise = document.getElementById("expertiseH2");
    // Create a new Intersection Observer
    const observerExpertise = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        // Check if the target element is on the screen
        if (entry.isIntersecting) {
            // Execute your script here

            // Fetch API   
            getApi(expertise); 
            function getApi(endpoint) {
                fetch(endpoint)
                .then (res => res.json())
                .then (data => {
                    progressBar(data);
                });
            };

            function progressBar(data){
                let elem = document.querySelectorAll(".myBar");
                elem.forEach(e =>{

                    for (let iterator of data) {
                        if(iterator.id===e.getAttribute("id")){
                            let i = 0;
                            const interval = setInterval(function(){           
                                if(i<=iterator.points){
                                    e.style.width = i + "%";
                                } else{
                                    clearInterval(interval);
                                }
                                i++;
                            }, 35);
                        }
                    }     
                })
            }

            if (expertiseCount==1) {
                console.log("Expertise stoped");
                // Stop observing once the target element is visible
                observerExpertise.unobserve(entry.target);
            }
            expertiseCount++;

        };

        });
    });
    observerExpertise.observe(targetElementExpertise);


    // ==================> skills OBSERVER
    let skillCount = 0;
    // Select the target element
    const targetElementSkills = document.getElementById("skillH2");
    // Create a new Intersection Observer
    const observerSkills = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        // Check if the target element is on the screen
        if (entry.isIntersecting) {

             // Fetch API   
             getApi(skill); 
             function getApi(endpoint) {
                 fetch(endpoint)
                 .then (res => res.json())
                 .then (data => {
                     progressBar(data);
                 });
             };

            function progressBar(data){
                let elem = document.querySelectorAll(".myBar");
                elem.forEach(e =>{

                    for (let iterator of data) {
                        if(iterator.id===e.getAttribute("id")){
                            let i = 0;
                            const interval = setInterval(function(){           
                                if(i<=iterator.points){
                                    e.style.width = i + "%";
                                } else{
                                    clearInterval(interval);
                                }
                                i++;
                            }, 35);
                        }
                    }      

                })
            }
            
            if (skillCount==1) {
                console.log("Skills stoped");
                // Stop observing once the target element is visible
                observerSkills.unobserve(entry.target);
            }
            skillCount++;

        };

        });
    });
    observerSkills.observe(targetElementSkills);

});