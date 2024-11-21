//    #1
const drink = prompt("виберіть чай,кава,сік");
switch (drink) {
  case "чай":
    alert("ви вибрали чай");
    break;
  case "кава":
    alert("ви вибрали каву");
    break;
  case "сік":
    alert("ви обрали сік");
}

// #2

const weekday = prompt("Виберіть день тижня");
switch (weekday) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "пятниця":
    alert("можна відихати");
    break;
  case "субота":
  case "неділя":
    alert("ура вихідні");
    break;
  default:
    alert("це не день тижня");
}

// #3
const month = prompt("виберіть номер місяця");
switch (month) {
  case "1":
  case "2":
    alert("Це місяць  зими");
    break;
  case "3":
  case "4":
  case "5":
    alert("це місяць  весни");
    break;
  case "6":
  case "7":
  case "8":
    alert("Це місяць  літа");
    break;
  case "9":
  case "10":
  case "11":
    alert("Це місяць  осені");
    break;
  case "12":
    alert("Це місяць  зими");
    break;
  default:
    alert("такого місяця немає");
}

// #4
const months = prompt("Виберіть номер місяця");
switch (months) {
  case "1":
  case "3":
  case "5":
  case "7":
  case "8":
  case "10":
  case "12":
    alert("31");
    break;
  case "4":
  case "6":
  case "9":
  case "11":
    alert("30");
    break;
  case "2":
    alert("28 або 29");
    break;
  default:
    alert("це не місяць");
}

// #5
const light = prompt("виберіть колір світлофора");
switch (light) {
  case "зелений":
    alert("йди");
    break;
  case "червоний":
    alert("cтій");
    break;
  case "жовтій":
    alert("готуйся");
    break;
  default:
    alert("Це не колір вітлофора для людей");
}
