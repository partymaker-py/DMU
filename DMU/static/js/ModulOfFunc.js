// поиск в header
function headerSearch() {
    const btnOpenSearch = document.querySelector('.search-icon');
    const formSearcHeader = document.querySelector('.form-search-head');// форма поиска header
    const searchFieldInput = document.querySelector('.search-field-wrapper');
    const closeSearchForm = document.querySelector('.close-serach-form');// закрыть поисковик хэдера

    const disableScroll = () => {
        let pagePosition = window.scrollY;// в момент нажатия на кнопку сохраняем текущее положение вьюпорта
        document.body.classList.add('disableScroll');
        document.body.dataset.position = pagePosition;// сохраняем в body это значение
        // TODO сделать так чтобы, если хедер уже появился, то он не есчезал бы
        document.body.style.top = -pagePosition + 'px';
        searchFieldInput.style.display = 'block';
            
    };
    const enableScroll = () => {
        let pagePosition = parseInt(document.body.dataset.position, 10);
        document.body.style.top = 'auto';
        document.body.classList.remove('disableScroll');
        window.scroll({ top: pagePosition, left: 0 });
        document.body.removeAttribute('data-page-position');
    };
    btnOpenSearch.addEventListener('click', e => {
        e.stopPropagation();
        disableScroll();
        document.addEventListener('click', e => {
            if (!e.target.closest('.form-wrapper')) {
                searchFieldInput.style.display = 'none';
                enableScroll();
            }
        });
    });
    closeSearchForm.addEventListener('click', () => {
    searchFieldInput.style.display = 'none';
        enableScroll();
    });

    formSearcHeader.addEventListener('submit', (e) => {
        const inputSearchForHeader = document.querySelector('.input-text-search');// инпут поиска хедера
        const regExpValid = /[<>{}]/;
        let word = inputSearchForHeader.value;
        if (!word || word.match(regExpValid)) {
            e.preventDefault();
            word = '';
        } else {
            // TODO ограничить количество запросов (1 запрос в сек)
            fetch(`http://localhost:8000/?search=${word}`)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
            word = '';
        }
    });
};
// Анимация скрола и хедера
function animationHeaderAndScrollBTN() {
    const scrollBtn = document.querySelector('.scroll-button');
    window.addEventListener('scroll', () => {

        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            header.classList.add('header-animation');
        } else {
            header.classList.remove('header-animation');
        }
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {

            scrollBtn.style.display = 'block';
            scrollBtn.addEventListener('click', () => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            });        
        } else {
            scrollBtn.style.display = 'none';
        }
    }); 
}

animationHeaderAndScrollBTN();
headerSearch();