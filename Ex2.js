let str = "your article is in queue";

let oneVowelPerSentence = (str) => {
  let temp = [];
  let vowelCheck = 0;
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a,e,i,o,u,A,E,I,O,U]/)) {
      if (vowelCheck != 1) {
        temp[index] = str[i];
        index++;
      }
      vowelCheck = 1;
    } else if (str[i].match(/[ ]/)) {
      temp[index] = str[i];
      index++;
      vowelCheck = 0;
    } else {
      temp[index] = str[i];
      index++;
      vowelCheck = 0;
    }
  }
  temp = temp.join("");
  console.log(temp);
};

oneVowelPerSentence(str);
