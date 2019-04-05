// const deliLine = [];

function takeANumber(cur, name) {
  return `Welcome, ${name}. You are number ${cur.length + 1} in line.`;
}

function nowServing(deliLine) {
  return deliLine.length > 0 ? deliLine.splice(0, 1) : "There is nobody waiting to be served!";
}

function currentLine(cur) {
  return cur.join(", ");
}