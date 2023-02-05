//switch

let dayName = '없음';
for (let num = 1; num <= 7; num++) {
  switch (num) {
    case 1:
      dayName = '월';
      break;
    case 2:
      dayName = '화';
      break;
    case 3:
      dayName = '수';
      break;
    case 4:
      dayName = '목';
      break;
    case 5:
      dayName = '금';
      break;
    case 6:
      dayName = '토';
      break;
    case 7:
      dayName = '일';
      break;
    default:
      dayName = '없음';
  }
  console.log(`해당하는 요일 : ${dayName}`);
}
