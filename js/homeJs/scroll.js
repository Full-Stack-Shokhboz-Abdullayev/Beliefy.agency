"use strict";

const nav = document.querySelector('nav')
const trsTitle = document.querySelector('.first_look__title')
const scrollBtn = document.querySelector('.scroll_wrapper')
const sections = document.querySelectorAll('section')
const animatedByScrolls = document.querySelectorAll('.animatedByScroll')


function animateValue(id, start, duration) {
    var obj = document.getElementById(id);
    const end = Number(obj.dataset.count)
    
    if (start === end || obj.classList.contains('ended')) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
    obj.classList.add('ended')
}


function navRemoveAll() {
    nav.classList.remove('frontend-intersected')
    nav.classList.remove('backend-intersected')
}


function navStuff(target) {
    if (target == 'frontend') {
        nav.classList.add('frontend-intersected')
    }
    else if (target == 'backend' || target == 'team') {
        nav.classList.add('backend-intersected')
    } else if (target == 'main') {
        navRemoveAll()
    } else if (target == 'count') {
        
    }
}









const sectionOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -10% 0px'
}

function sectionsFunc(entries) {
    entries.forEach(entry => {
        const target = entry.target.dataset.page
        if (entry.isIntersecting) {
            navRemoveAll()
            navStuff(target)
        } 
    })
}

const sectionsObserver = new IntersectionObserver(sectionsFunc, sectionOptions)


sections.forEach((item) => {
    sectionsObserver.observe(item)
})




const animateOptions = {

}

const team = document.querySelectorAll('.profile-card')

function animateFunc(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.parentElement.classList.contains("advantages__title")) {
                entry.target.parentElement.classList.add('anime')
            } 
            else {
                entry.target.classList.add('anime')
            }
        } 
        else {
            if (entry.target.parentElement.classList.contains("advantages__title")) {
                entry.target.parentElement.classList.remove('anime')
            }
             else {
                entry.target.classList.remove('anime')
            }
        }
    })
}


const animateObserver = new IntersectionObserver(animateFunc, animateOptions)


animatedByScrolls.forEach((item) => {
    try {
        if (item.lastElementChild.className === "h3") {
            animateObserver.observe(item.lastElementChild)
        } else {
            animateObserver.observe(item)
        }
    } catch {
        animateObserver.observe(item)
    }
})


const containerAnime = document.querySelector('.containerAnime') 
const children = document.querySelectorAll('.profile-card')


const mobileTeamObserver = new IntersectionObserver(
    function(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                    entry.target.classList.add('mobile-done')
            } else {
                    entry.target.classList.remove('mobile-done')
            }
        })

    }, 
    {
        rootMargin: '0px 0px -10% 0px'
    }
)

children.forEach((child) => {
    mobileTeamObserver.observe(child)
})


new IntersectionObserver(
    function(entries) {
        entries.forEach((entry) => {
            console.log(children);
            if (entry.isIntersecting) {
                children.forEach((child) => {
                    child.classList.add('done')
                })
            } else {
                children.forEach((child) => {
                    child.classList.remove('done')
                })
            }
        })

    }, 
    {
        threshold: 0.5
        // rootMargin: '0px 0px 30% 0px'
    }
).observe(containerAnime)







