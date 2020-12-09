// Para convertir el cursor en circulito

window.addEventListener('mousemove', cursor);

function cursor(e) {
  let mouseCursor = document.querySelector('.cursor') ;

  mouseCursor.style.top = e.pageY + 'px' ;
  mouseCursor.style.left = e.pageX + 'px';
}

// building__card = card
// building__message = sneaker

// Movement Animation to happen
const card = document.querySelector('.building__card');
const container = document.querySelector('.building');

// Items
const message = document.querySelector('.building__message h1');


// Moving Animation Event
container.addEventListener('mousemove', e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    console.log('x:' + e.pageX);
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    console.log('y:' + yAxis)
    console.log('window:' + window.innerHeight);
    console.log('event '+ e.pageY);;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';
    // Popout
    message.style.transform = 'translateZ(10px)';
})

// Animate Out
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // Popback
    message.style.transform = 'translateZ(0px)';
});
