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
       else /* if(!navMenuButton.checked) */{
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
        
        serviceTabs.forEach(item => {
            item.parentElement.classList.remove('active__service');
        });
    }

    function showServiceTabContent(j = 0) {
        servicesTabsContent[j].classList.add('show', 'fade');
        servicesTabsContent[j].classList.remove('hide');
        serviceTabs[j].parentElement.classList.add('active__service');
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
                    if(document.documentElement.clientWidth< 800){
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
        modal.classList.add('show', 'fade'); 
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.remove('show', 'fade'); 
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













    let soldierContainers=document.querySelectorAll('.soldier__container'),
    soldiers=document.querySelectorAll('.soldier');

let bodySectionBlocks = document.querySelectorAll('.body__section__block'),
    bodySections = document.querySelectorAll('.body__section'),
    hands=document.querySelectorAll('.hand'),
    arms=document.querySelectorAll('.arm'),
    elbows=document.querySelectorAll('.elbow'),
    forearms=document.querySelectorAll('.forearm'),
    feet=document.querySelectorAll('.foot'),
    legs=document.querySelectorAll('.leg'),
    shins=document.querySelectorAll('.shin'),
    thighs=document.querySelectorAll('.thigh'),
    knees=document.querySelectorAll('.knee'),
    head=document.querySelector('.head'),
    neck=document.querySelector('.neck'),
    chest=document.querySelector('.chest'),
    stomach=document.querySelector('.stomach'),

    buts = document.querySelectorAll('.but');



let  soldierMove=function() {

   for(let soldierContainer of soldierContainers){
    if (!soldierContainer.classList.contains('soldier__move')) {
        soldierContainer.classList.add('soldier__move');
    } else {
        soldierContainer.classList.remove('soldier__move');
    }
   }
    
};

function moveLeft(item) {
    if (!item.classList.contains('move__left')) {
        item.classList.add('move__left');
    } else {
        item.classList.remove('move__left');
    }
}

function moveRight(item) {
    if (!item.classList.contains('move__right')) {
        item.classList.add('move__right');
    } else {
        item.classList.remove('move__right');
    }
}

function skewMoveLeft(item) {
    if (!item.classList.contains('skew__move__left')) {
        item.classList.add('skew__move__left');
    } else {
        item.classList.remove('skew__move__left');
    }
}

function skewMoveRight(item) {
    if (!item.classList.contains('skew__move__right')) {
        item.classList.add('skew__move__right');
    } else {
        item.classList.remove('skew__move__right');
    }
}

function skewFootLeft(item) {
    if (!item.classList.contains('skew__foot__left')) {
        item.classList.add('skew__foot__left');
    } else {
        item.classList.remove('skew__foot__left');
    }
}

function skewFootRight(item) {
    if (!item.classList.contains('skew__foot__right')) {
        item.classList.add('skew__foot__right');
    } else {
        item.classList.remove('skew__foot__right');
    }
}

function skewLeft(item) {
    if (!item.classList.contains('skew__left')) {
        item.classList.add('skew__left');
    } else {
        item.classList.remove('skew__left');
    }
}

function skewRight(item) {
    if (!item.classList.contains('skew__right')) {
        item.classList.add('skew__right');
    } else {
        item.classList.remove('skew__right');
    }
}

function skewBodyLeft(item) {
    if (!item.classList.contains('skew__body__left')) {
        item.classList.add('skew__body__left');
    } else {
        item.classList.remove('skew__body__left');
    }
}

function skewBodyRight(item) {
    if (!item.classList.contains('skew__body__right')) {
        item.classList.add('skew__body__right');
    } else {
        item.classList.remove('skew__body__right');
    }
}

    function goRight(){
     for(let soldier of soldiers){
        moveLeft(soldier.children[1]);
        skewMoveLeft(soldier.children[1].children[2]);

        moveLeft(soldier.children[4]);
        skewMoveRight(soldier.children[4].children[2]);

        moveRight(soldier.children[3]);
        skewMoveLeft(soldier.children[3].children[2]);
        skewFootLeft(feet[0]);
        skewFootRight(feet[1]);

        
        skewBodyLeft(chest.children[0]);
        skewBodyLeft(chest.children[1]);
        skewBodyLeft(stomach.children[0]);
        skewBodyLeft(stomach.children[1]);
        skewBodyRight(head);
        skewBodyRight(neck);
        

        moveRight(soldier.children[0]);
       skewMoveRight(soldier.children[0].children[2]);
     }
    }





/* 
buts.forEach((but,i)=>{
    but.addEventListener('click',()=>{
        goRight(i);
        soldierMove();
       
    }
    );
}) */

















});