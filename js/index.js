window.addEventListener('load',function(){
    let section = document.querySelector('.lun'),
        imgBox = document.querySelector('.imgbox'),
        iw = section.offsetWidth,
        sx , dirx;

    imgBox.innerHTML += imgBox.innerHTML;
    imgBox.style.width = iw * imgBox.childElementCount + 'px';
    section.addEventListener('touchstart',function(e){
        let event = e.changedTouches[0];
        sx = event.pageX,
            dirx = imgBox.offsetLeft;
        //            console.log(event);
        imgBox.style.transition = 'none';
        if(dirx/iw == 0){
            imgBox.style.left = -4 * iw + 'px';
        }else if(dirx/iw == -7){
            imgBox.style.left = (1-4) * iw + 'px';
        }
        dirx = imgBox.offsetLeft;
    });
    section.addEventListener('touchmove',function(e){
        let event = e.changedTouches[0];
        let mx = event.pageX;
        imgBox.style.left = dirx + (mx - sx) + 'px';
    });
    section.addEventListener('touchend',function(){
        let num = Math.round(imgBox.offsetLeft / iw);
        imgBox.style.transition = 'all ease 0.5s';
        imgBox.style.left = num * iw + 'px';
    })
})