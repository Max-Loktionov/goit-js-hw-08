import throttle from 'lodash.throttle';


const formEl = document.querySelector('.feedback-form');

const inputEl = document.querySelector('.feedback-form input');
const textAreaEl = document.querySelector('.feedback-form textarea');

let formData = {};
const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(e) {
    e.preventDefault();

    
    formData = {
        email: inputEl.value,
        message: textAreaEl.value
     } 
    
    if (!formData.email || !formData.message) {
        return
    }
    
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}


function onFormInput() {
    
   formData = {
        email: inputEl.value,
        message: textAreaEl.value
     } 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function getSavedMessage() {

        const savedMessage = localStorage.getItem(STORAGE_KEY);
        const parcedMessage =JSON.parse(savedMessage)
    if (parcedMessage.message) {
               
        textAreaEl.value = parcedMessage.message;
    };  
}


function getSavedEmail() {
    
        const savedEmail = localStorage.getItem(STORAGE_KEY);
        const parcedEmail =JSON.parse(savedEmail)
    if (parcedEmail.email) {
       
        inputEl.value = parcedEmail.email;
    };
};

getSavedEmail();
getSavedMessage();
