const inputText = "asdlkajdhslkahjsdkahjsdla";

let htm = "";

inputText.split("").map((letter, i) => {
  let fontSize =
    10 + (inputText.length / 2 - Math.abs(inputText.length / 2 - i)) * 5;

  htm +=
    "<span" +
    ' style="font-size:' +
    fontSize +
    'px"' +
    ">" +
    letter +
    "</span>";
});

console.log(htm);
document.querySelector(".result").innerHTML = htm;
