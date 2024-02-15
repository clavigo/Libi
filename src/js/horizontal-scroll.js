var scrollableDivs = document.querySelectorAll('.list-tiles');
var changeColorElement4 = document.querySelectorAll('.change-active1');
var changeColorElement5 = document.querySelectorAll('.change-active2');
var changeColorElement6 = document.querySelectorAll('.change-active3');


scrollableDivs.forEach(function(scrollableDiv, index){
    var maxWidth = scrollableDiv.scrollWidth - scrollableDiv.clientWidth;
    var circle1 = maxWidth / 3;

    scrollableDiv.addEventListener('scroll', function() {
        scrollPosition = scrollableDiv.scrollLeft;
    
        if (scrollPosition <= circle1) {
            changeColorElement4[index].style.backgroundColor = '#9B9595';
            changeColorElement5[index].style.backgroundColor = '#D9D9D9';
            changeColorElement6[index].style.backgroundColor = '#D9D9D9';
        } 
        else if (scrollPosition > circle1 && scrollPosition <= circle1 + circle1) {
            changeColorElement4[index].style.backgroundColor = '#D9D9D9';
            changeColorElement5[index].style.backgroundColor = '#9B9595';
            changeColorElement6[index].style.backgroundColor = '#D9D9D9';
        }
        else{
            changeColorElement4[index].style.backgroundColor = '#D9D9D9';
            changeColorElement5[index].style.backgroundColor = '#D9D9D9';
            changeColorElement6[index].style.backgroundColor = '#9B9595';
        }
    
        // console.log('Horizontal scroll position:', scrollPosition, "/", maxWidth);
    });
})
