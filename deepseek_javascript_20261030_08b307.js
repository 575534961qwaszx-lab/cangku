const cities = [
  { name: '北京', en: 'Beijing', timezone: 'Asia/Shanghai' },
  // ...
];

function updateClocks() {
  const now = new Date();
  cities.forEach(city => {
    // 获取时间
    // 更新 DOM
  });
}
setInterval(updateClocks, 1000);