// const deliLine = [];

function takeANumber(cur, name) {
  return `Welcome, ${name}. You are number ${cur.length + 1} in line.`;
}

function nowServing(deliLine) {
  return deliLine.length > 0 ? deliLine.splice(0, 1) : "There is nobody waiting to be served!";
}

function currentLine(cur) {
  let str = "The line is currently: "
  if(cur.length > 0) {
    for(let i = 0; i < cur.length; i++) {
      str += i < cur.length - 1 ? `${i + 1}. ${cur[i]}, ` : `${i + 1}. ${cur[i]}`;
    }
    return str;
  }
  return "The line is currently empty.";
}