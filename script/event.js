window.addEventListener('load', function () {

    const form = this.document.querySelector('form')
    form.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    
    // VIEWPORTS
    (function (){
      
        const contactDiv = document.querySelector('#contact-div');
        const main = document.querySelector('#mainArticleDetail');
        const footer = document.querySelector('footer');
        const box = document.querySelector('#referenceBox');

        const checkMobile = window.matchMedia('screen and (max-width: 575px)');
        const checkTablet = window.matchMedia('screen and (min-width: 576px) and (max-width: 991px)');
        const checkDesktop = window.matchMedia('screen and (min-width: 992px)');
      
        
        checkMobile.addEventListener("change", function(e){
          if(e.matches) {   
            console.log('MOBILE');
            contactDiv.classList.add('flex-column');
            contactDiv.classList.remove('flex-row');

            main.classList.remove('start-items', 'center-items');

            box.classList.add('flex-column', 'gap10');
            box.classList.remove('flex-row', 'gap25');

            document.getElementById('divMainCert').classList.add('flex-row');
            document.getElementById('divMainCert').classList.remove('flex-column');
            document.getElementById('divMainCert').classList.remove('gap25');

            document.getElementById('divMainLang').classList.add('flex-row');
            document.getElementById('divMainLang').classList.remove('flex-column');
            document.getElementById('divMainLang').classList.remove('gap25');

            document.getElementById('profileDescription').classList.remove('tablet-box');
            document.getElementById('leftMain').classList.remove('tablet-box');
            document.getElementById('rightMain').classList.remove('tablet-box');
            // document.getElementById('reference').classList.remove('tablet-box');
            // document.getElementById('contact').classList.remove('tablet-box');

            footer.classList.remove('center-items');
            footer.classList.add('space-between');

          }
        });
        
        checkTablet.addEventListener("change", function(e){  
          if(e.matches) {    
            console.log('TABLET');
            contactDiv.classList.remove('flex-column');
            contactDiv.classList.add('flex-row');

            main.classList.add('flex-column', 'center-items');
            main.classList.remove('flex-row', 'space-content');

            document.getElementById('profileDescription').classList.add('tablet-box');
            document.getElementById('leftMain').classList.add('tablet-box');
            document.getElementById('rightMain').classList.add('tablet-box');

            document.getElementById('mainArticleProfile').classList.remove('flex-row', 'space-content');
            document.getElementById('mainArticleProfile').classList.add('flex-column');

            footer.classList.add('flex-column', 'gap100');
            footer.classList.remove('flex-row');
            footer.classList.add('center-items');
            footer.classList.remove('space-content');

            box.classList.add('gap25');
            box.classList.remove('gap50');
            
          }
        });
      
        checkDesktop.addEventListener("change", function(e){
          if(e.matches) {
            console.log('DESKTOP');
            main.classList.remove('flex-column', 'center-items');
            main.classList.add('flex-row', 'space-content');

            footer.classList.remove('flex-column', 'gap100', 'space-between');
            footer.classList.add('flex-row', 'space-content');

            box.classList.remove('flex-column', 'gap25');
            box.classList.add('flex-row', 'gap50');

            document.getElementById('divMainCert').classList.remove('flex-row');
            document.getElementById('divMainCert').classList.add('flex-column');
            document.getElementById('divMainCert').classList.add('gap25');

            document.getElementById('divMainLang').classList.remove('flex-row');
            document.getElementById('divMainLang').classList.add('flex-column');
            document.getElementById('divMainLang').classList.add('gap25');

            document.getElementById('mainArticleProfile').classList.add('flex-row', 'space-content');
            document.getElementById('mainArticleProfile').classList.remove('flex-column');

          }
        });    

    })();


});