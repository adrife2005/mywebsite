var input = document.querySelector('input[type="text"]');
var form = document.querySelector('form');

// input.addEventListener('focus', runEvent);
// input.addEventListener('blur', runEvent);
// input.addEventListener('cut', runEvent)
// input.addEventListener('paste', runEvent)
input.addEventListener('input', runEvent)
form.addEventListener('submit', runEvent);


function runEvent(e){
    console.log('EVENT TYPE:' +e.type)
    console.log(e.target.value);
    e.preventDefault();
    // document.body.style.display = 'none'
}

