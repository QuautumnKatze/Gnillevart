


function changeSlide(slider) {
    var currentSlide = 0;
    maxSlide = slider.slideItems.length;

    loadCurrentSlide = function() {
        slider.slideList.style.left = -currentSlide*100 + '%';
    }

    autoChangeSlide = function() {
        currentSlide++;
        if(currentSlide >= maxSlide) {
            currentSlide = 0;
        }
        loadCurrentSlide();
    }

    startChangeSlide = function() {
        setInterval(autoChangeSlide,2000)
        loadCurrentSlide();
    }

    startChangeSlide();
}





var selects = document.querySelectorAll('.select')

function selectChoose() {
    selects.forEach(function(select, index) {
        select.onclick = function() {
            var selectName = select.querySelector('.select-name')
            var selectItems = select.querySelectorAll('.select-list li')
            var selectList = select.querySelector('.select-list')
            selectList.classList.add('is-open')
            console.log(selectList  )
            selectItems.forEach(function(selectItem, index){
                selectItem.onclick = function() {
                    selectName.innerText = this.textContent;
                    setTimeout(selectList.classList.remove('is-open'),1000)
                }
            })            
        }
        // select.onblur = function() {
        //     var selectListOpen=select.querySelector('.select-list.is-open')
        //     selectListOpen.classList.remove('is-open')
        // }
        
    })
}
selectChoose();