// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
// const headerRect = header.getBoundingClientRect();
// console.log(headerRect);
// const headerHeight = headerRect.height;
// 위 세문장을 줄인게 아래 문장
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight) {
        headear.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', ()=> {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});