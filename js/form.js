document.querySelector('.service-form input [type=submit]')
    .addEventListener('click' ,service);

    function service(e){
        e.prevenDefault();
        fetch('service',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringifystr({
                name : document.querySelector('.service-form input [name = name]').value,
                phone : document.querySelector('.service-form input [name = phone]').value
            })
        })
        .then(_ =>document.querySelector('.service-form').reset());
    }

let select = document.querySelector('#select');

select.onchange = function(){
    console.log(select.value);
}