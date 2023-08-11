// JavaScript 部分
const getLocationBtn = document.getElementById('getLocationBtn');
const print = getLocationBtn.nextElementSibling
const positionSpan = document.querySelector('button').firstElementChild
// console.log(print);
getLocationBtn.addEventListener('click', (e) => {
  e.preventDefault()
  alert('本次定位将用作奖品的收货地址')
  let i = 9
  const timeId =  setInterval(() => {
    getLocationBtn.disabled = true
    i--
    positionSpan.innerHTML = `(${i})`
    positionSpan.style = 'color: #bcb8b8'
    // console.log(positionSpan.innerHTML);
    if (i === 0){
      clearInterval(timeId)
      getLocationBtn.disabled = false
      positionSpan.innerHTML = ''
      return
    }
  },1000)
  if (navigator.geolocation) {
    // 使用 Geolocation API 请求位置信息
    navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        clearInterval(timeId)
        positionSpan.innerHTML = ''
        positionSpan.className = 'right'
        getLocationBtn.disabled = true
        localStorage.setItem('position', `${longitude.toFixed(6) * 1000000}00${latitude.toFixed(6) * 1000000}`)
      },
      error => {
        console.error('获取位置失败：', error.message);
      },
      { enableHighAccuracy: true } // 设置高精度模式
    );
  } else {
    console.error('浏览器不支持 Geolocation API。');
  }
});



// localStorage.setItem('position',`789546`)
