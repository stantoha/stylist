window.addEventListener('DOMContentLoaded', () => {
    //SHOW-HIDE CONTENT

    let tabs=document.querySelectorAll('.nav__button'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabParent= document.querySelector('.nav'),
        serviceTabs=document.querySelectorAll('.service__button'),
        servicesTabsContent=document.querySelectorAll('.service'),
        servicesTabParent= document.querySelector('.services__list'),
        upButton=document.querySelector('.up__button');

        upButton.classList.add('hide');
        

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
    }

    hideTabContent();
    showTabContent();

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
        if (target && target.classList.contains('nav__button')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
   
                    if(i=2){
                        showServiceTabContent();
                        servicesTabParent.addEventListener('click', (event) => {
                            let target = event.target;
                            if (target && target.classList.contains('service__button')) {
                                serviceTabs.forEach((item, j) => {
                                    if (target == item) {
                                        hideServiceTabContent();
                                        showServiceTabContent(j);
                       
                                        
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
/*         titleLink.classList.add('left__slide');
 */        upButton.classList.remove('hide');
        upButton.classList.add('show','fade');
    }
    else if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        
    } else {
/*         titleLink.classList.remove('left__slide');
 */        upButton.classList.add('hide');
        upButton.classList.remove('show','fade');
    }
};

upButton.addEventListener('click', ()=>  {
    window.scrollTo(0, 0);
});
    
    



    
});



















