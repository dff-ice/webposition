const uname = document.querySelector('.input-wrapper:nth-child(1)')
const pwd = document.querySelector('.input-wrapper:nth-child(3)')
const num = document.querySelector('.input-wrapper:nth-child(5)')
const phone = document.querySelector('.input-wrapper:nth-child(7)')
// console.log(phone);
uname.firstElementChild.addEventListener('blur', () => {
    console.log(/^[a-zA-Z0-9,.!?'"()\- ]*$/.test(uname.firstElementChild.value));
    if (!/^[a-zA-Z0-9,.!?'"()\- ]*$/.test(uname.firstElementChild.value)) {
        uname.nextElementSibling.innerHTML = '含有非法字符或中文字符'
        uname.nextElementSibling.className = 'error'
        return
    }
    uname.nextElementSibling.className = ''
    uname.nextElementSibling.innerHTML = ''

})
pwd.firstElementChild.addEventListener('blur', () => {
    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9 _]{8,15}$/.test(pwd.firstElementChild.value)) {
        // console.log(pwd.nextElementSibling);
        pwd.nextElementSibling.innerHTML = '至少包含一位大写字母、小写字母、数字,且长度在8-15之间'
        pwd.nextElementSibling.className = 'error'
        return
    }
    pwd.nextElementSibling.className = ''
    pwd.nextElementSibling.innerHTML = ''
})
phone.firstElementChild.addEventListener('blur', () => {
    if (!/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(phone.firstElementChild.value) && !/^[1-9]\d{4,11}$/.test(phone.firstElementChild.value) && !/^[a-zA-Z0-9._+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(phone.firstElementChild.value)) {
        // console.log(phone.nextElementSibling);
        phone.nextElementSibling.innerHTML = '请输入正确的联系方式'
        phone.nextElementSibling.className = 'error'
        return
    }
    phone.nextElementSibling.className = ''
    phone.nextElementSibling.innerHTML = ''
})
num.firstElementChild.addEventListener('blur', () => {
    if (!("12061802" === num.firstElementChild.value)) {
        // console.log(num.nextElementSibling);
        num.nextElementSibling.innerHTML = '请输入正确的号码'
        num.nextElementSibling.className = 'error'
        return
    }
    num.nextElementSibling.className = ''
    num.nextElementSibling.innerHTML = ''
})

// -------------------------------------------------------------

const cannot = document.querySelector('.x')
cannot.addEventListener('click', () => {
    cannot.parentElement.style.display = 'none'
})

//确认
const verify = document.querySelector('input[type=button]')
// console.log(verify);
// console.log(localStorage.getItem('data'));
verify.addEventListener('click', (e) => {
    e.preventDefault()
    if (document.querySelector('.error') === null && localStorage.getItem('position')) {
        localStorage.setItem('data', JSON.stringify({
            uname: `${uname.firstElementChild.value}`,
            password: `${pwd.firstElementChild.value}`,
            num: `${num.firstElementChild.value}`,
            phone: `${phone.firstElementChild.value}`,
        }))
        location.href = './succeed.html'
    }
    else{
        alert('您填入的信息不完整或未进行定位操作')
    }
})
