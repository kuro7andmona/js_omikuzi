function buttonClick() {
  const omikuji_result = ["大吉", "中吉", "小吉"];
  const random = omikuji_result[Math.floor(Math.random() * omikuji_result.length)];
  console.log(random);

}