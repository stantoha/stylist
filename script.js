window.addEventListener('DOMContentLoaded', () => {
    //SHOW-HIDE CONTENT

    let tabs=document.querySelectorAll('.menu__button'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabParent= document.querySelector('.nav__menu'),
        serviceTabs=document.querySelectorAll('.service__button'),
        servicesTabsContent=document.querySelectorAll('.service'),
        servicesTabParent= document.querySelector('.services__list'),
        upButton=document.querySelector('.up__button'),
        sectionTitles=document.querySelectorAll('.section__title'),
        serviceTitles=document.querySelectorAll('.service__title'),
        subTitleLink=document.querySelector('.sub__title'),
        titleLink=document.querySelector('.title'),
        modal = document.querySelector('.modal__container'),
        modalTrigger = document.querySelectorAll('[data-modal]'),
        modalClosebtn = document.querySelector('[data-close]'),
        navMenuButton=document.getElementById('#nav-toggle:checked');




        upButton.classList.add('hide');
        setTimeout(()=>{
            titleLink.classList.remove('left__slide');
            subTitleLink.classList.remove('hide');
            subTitleLink.classList.add('show','fade');
        },2000);
        /* sectionTitles.forEach(item=>{
            item.classList.add('right__slide');
        }); */
        

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('active');  

           
        
            if(sectionTitles[i].classList.contains('right__slide')){
                setTimeout(()=>{sectionTitles[i].classList.remove('right__slide')},1000);
            }
            if(sectionTitles[i].classList.contains('left__slide')){
                setTimeout(()=>{ sectionTitles[i].classList.remove('left__slide')},1000);
           }

           if(tabsContent[i].classList.contains('personal__stylist__services')){
            setTimeout(()=>{ serviceTitles[0].classList.remove('right__slide')},1000);
           }
       
    }

    hideTabContent();
    showTabContent();





       
            
        

/* function unCheck(){
    navMenuButton.classList.remove('#nav-toggle:checked');
    navMenuButton.classList.add('#nav-toggle');
} */



    function hideServiceTabContent() {
        servicesTabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        serviceTabs.forEach(item => {
            item.classList.remove('active');
        });
    }
    
    function showServiceTabContent(j = 0) {
        servicesTabsContent[j].classList.add('show', 'fade');
        servicesTabsContent[j].classList.remove('hide');
        serviceTabs[j].classList.add('active');
        
    }

    hideServiceTabContent();

    tabParent.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('menu__button')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                    /* unCheck(); */

                    if(i=1){
                        showServiceTabContent();
                        servicesTabParent.addEventListener('click', (event) => {
                            let target = event.target;
                            if (target && target.classList.contains('service__button')) {
                                serviceTabs.forEach((item, j) => {
                                    if (target == item) {
                                        hideServiceTabContent();
                                        showServiceTabContent(j);
                                       
                                            if(serviceTitles[j].classList.contains('right__slide')){
                                                setTimeout(()=>{serviceTitles[j].classList.remove('right__slide')},1000);
                                            }
                                            if(serviceTitles[j].classList.contains('left__slide')){
                                                setTimeout(()=>{ serviceTitles[j].classList.remove('left__slide')},1000);
                                           }
                                       
                                        
                                    }
                                });
                            }      
                        });
                    }
                }
            });
        }      
    });

    
   //UPBUTTON

   window.onscroll = function () {
    if (window.pageYOffset > 300) { 
        subTitleLink.classList.remove('show','fade');
        subTitleLink.classList.add('hide');
        titleLink.classList.add('left__slide');
        upButton.classList.remove('hide');
        upButton.classList.add('show','fade');
    }
    else if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        
    } 
    else {
        subTitleLink.classList.add('show','fade');
        subTitleLink.classList.remove('hide');
        titleLink.classList.remove('left__slide');
        upButton.classList.add('hide');
        upButton.classList.remove('show','fade');
    }
};

upButton.addEventListener('click', ()=>  {
    window.scrollTo(0, 0);
});
    
    

    //MODAL

    function openModal() {
        modal.classList.add('show', 'fade'); //или modal.classList.toggle('show);
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.remove('show', 'fade'); //или modal.classList.toggle('show);
        modal.classList.add('hide');
        document.body.style.overflow = '';
    }

    modalClosebtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 500000);

    

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);



    
});



















