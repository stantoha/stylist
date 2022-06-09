window.addEventListener('DOMContentLoaded', () => {
    //SHOW-HIDE CONTENT

    let tabs = document.querySelectorAll('.menu__button'),
    footerTab = document.querySelectorAll('.footer__menu__button'),
    footer=document.querySelector('.footer'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabParent = document.querySelector('.nav__menu'),
        serviceTabs = document.querySelectorAll('.service__button'),
        servicesTabsContent = document.querySelectorAll('.service'),
        servicesTabParent = document.querySelector('.services__list'),
        contactsServiceTabs = document.querySelectorAll('.contacts__service__button'),
        contactsServicesTabParent = document.querySelector('.contacts__services__list'),
        upButton = document.querySelector('.up__button'),
        sectionTitles = document.querySelectorAll('.section__title'),
        serviceTitles = document.querySelectorAll('.service__title'),
        subTitleLink = document.querySelector('.sub__title'),
        titleLink = document.querySelector('.title'),
        modal = document.querySelector('.modal__container'),
        modalTrigger = document.querySelectorAll('[data-modal]'),
        modalClosebtn = document.querySelector('[data-close]'),
        navMenuButton = document.getElementById('nav-toggle'),
        navButton=document.querySelector('.nav-btn');

     
    console.log(sectionTitles);
    console.log(serviceTitles);


    function showNavMenu(){
            tabParent.classList.remove('nav__menu');
            tabParent.classList.add('nav__menu__visible');
                navButton.classList.add('nav-btn__transform');
            
    }

    function hideNavMenu(){
        tabParent.classList.add('nav__menu');
        tabParent.classList.remove('nav__menu__visible'); 
        navButton.classList.remove('nav-btn__transform');
    }

    

    navMenuButton.addEventListener('click',()=>{
        if(navMenuButton.checked){
            showNavMenu();
        }
       else if(!navMenuButton.checked){
                hideNavMenu();
            }
    });
        
       


    upButton.classList.add('hide');
    setTimeout(() => {
        titleLink.classList.remove('top__slide');
        subTitleLink.classList.remove('hide');
        subTitleLink.classList.add('show', 'fade');
    }, 1000);


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

        if (sectionTitles[i].classList.contains('right__slide')) {
            setTimeout(() => {
                sectionTitles[i].classList.remove('right__slide');
            }, 1000);
        } else if (sectionTitles[i].classList.contains('left__slide')) {
            setTimeout(() => {
                sectionTitles[i].classList.remove('left__slide');
            }, 1000);
        }
    }

    hideTabContent();
    showTabContent();

    function hideServiceTabContent() {
        servicesTabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        /* serviceTabs.forEach(item => {
            item.classList.remove('active__service');
        }); */
    }

    function showServiceTabContent(j = 0) {
        servicesTabsContent[j].classList.add('show', 'fade');
        servicesTabsContent[j].classList.remove('hide');
        /* serviceTabs[j].classList.add('active__service'); */

    }

    hideServiceTabContent();

    tabParent.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('menu__button')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    window.scrollTo(0, 0);
                    hideTabContent();
                    showTabContent(i);
                    if(document.documentElement.clientWidth< 900){
                        hideNavMenu();
                    }
                    
                    if (i == 1) {
                        setTimeout(() => {
                            serviceTitles[0].classList.remove('right__slide');
                        }, 1000);
                        showServiceTabContent();
                        servicesTabParent.addEventListener('click', (event) => {
                            let target = event.target;
                            if (target && target.classList.contains('service__button')) {
                                
                                serviceTabs.forEach((item, j) => {
                                    if (target == item) {
                                        hideServiceTabContent();
                                        showServiceTabContent(j);

                                        serviceTitles.forEach(item => {
                                            if (serviceTitles[j].classList.contains('right__slide')) {
                                                setTimeout(() => {
                                                    serviceTitles[j].classList.remove('right__slide');
                                                }, 1000);
                                            } else if (serviceTitles[j].classList.contains('left__slide')) {
                                                setTimeout(() => {
                                                    serviceTitles[j].classList.remove('left__slide');
                                                }, 1000);
                                            }
                                        });

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
            subTitleLink.classList.remove('show', 'fade');
            subTitleLink.classList.add('hide');
            titleLink.classList.add('top__slide');
            upButton.classList.remove('hide');
            upButton.classList.add('show', 'fade');
        } else {
            subTitleLink.classList.add('show', 'fade');
            subTitleLink.classList.remove('hide');
            titleLink.classList.remove('top__slide');
            upButton.classList.add('hide');
            upButton.classList.remove('show', 'fade');
        }
    };

    upButton.addEventListener('click', () => {
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

    const modalTimerId = setTimeout(openModal, 30000);



    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);




});