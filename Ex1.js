let str = "a#c!%^&e^fg";

let revStr = (str) => {
  let temp = [];
  let end = str.length - 1;
  let beginning = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[beginning].match(/[a-zA-Z]/) && str[end].match(/[a-zA-Z]/)) {
      temp[end] = str[beginning];
      temp[beginning] = str[end];
      end--;
      beginning++;
    } else if (str[beginning].match(/[a-zA-Z]/)) {
      temp[end] = str[end];
      end--;
    } else {
      temp[beginning] = str[beginning];
      beginning++;
    }
  }
  console.log(temp);
};
revStr(str);
