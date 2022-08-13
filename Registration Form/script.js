const form = document.querySelector('form');
const uname = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const cards = document.querySelector('.cards');
const enrollBtn = document.querySelector('.enroll-btn');
const image = document.getElementById('image');
const male = document.getElementById('male');
const female = document.getElementById('female');
const java = document.getElementById('course1');
const html = document.getElementById('course2');
const css = document.getElementById('course3');
var img;




form.addEventListener('submit', (e) => {
    e.preventDefault();
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let values = [];
    checkboxes.forEach((ele) => {
        values.push(ele.value);
    });
    if(!uname.value || !email.value || !phone.value)
        alert("Please Enter All Fields");
    else {
        cards.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <h4>${uname.value}</h4>
                    <p class="gender">${male.checked ? male.value : female.checked ? female.value : 'other'}</p>
                    <p class="email">${email.value}</p>
                    <p class="phone">${phone.value}</p>
                    <p class="courses">${values}</p>
                </div>
                <div class="image">
                    <img src=${img} alt="Image"/>
                </div>
            </div>
        `;
    }
    form.reset();
});

image.addEventListener('change',(e) => {
    img = URL.createObjectURL(event.target.files[0]);
})