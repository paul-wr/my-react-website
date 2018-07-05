function responsiveNavFunction() {
    var x = document.querySelector('.main-nav');
    var y = document.querySelectorAll('.main-nav > li');
    var fa = document.querySelector('.fa-dz-nav');
    
    if(fa.className === 'fa fa-dz-nav fa-times'){
        fa.className = 'fa fa-dz-nav fa-bars';
    } else if (fa.className === 'fa fa-dz-nav fa-bars'){
        fa.className = 'fa fa-dz-nav fa-times';
    }

    if (x.className === "main-nav") {
        x.className += " responsive-nav animate";
        for(var i = 0; i < y.length; i++){
        y[i].className += " animate-li";
        }
    } else {
        x.className = "main-nav";
    }
}