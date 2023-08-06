// JavaScript 部分
const getLocationBtn = document.getElementById('getLocationBtn');
const print = getLocationBtn.nextElementSibling
// console.log(print);
getLocationBtn.addEventListener('click', () => {
  if (navigator.geolocation) {
    // 使用 Geolocation API 请求位置信息
    navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // 将经纬度打印到控制台
        print.innerHTML = `经度：${longitude.toFixed(6)}, 纬度：${latitude.toFixed(6)}`
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
