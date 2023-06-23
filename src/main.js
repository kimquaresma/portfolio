// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
// const headerRect = header.getBoundingClientRect();
// console.log(headerRect);
// const headerHeight = headerRect.height;
// 위 세문장을 줄인게 아래 문장
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight) {
        headear.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
})