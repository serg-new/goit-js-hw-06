// який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.


const textForm = document.querySelector('input');
textForm.addEventListener('blur', onBlur); 
function onBlur(event) {
    const sum = textForm.value.trim().length
    if (sum === Number(textForm.dataset.length)) {

        textForm.classList.remove('invalid');
         return textForm.classList.add('valid');
    }
    
     return textForm.classList.add('invalid');
};



   

