// const deliLine = [];

function takeANumber(cur, name) {
  return `Welcome, ${name}. You are number ${cur.length + 1} in line.`;
}

function nowServing(katzDeliLine) {
  return katzDeliLine.length > 0 ? katzDeliLine.splice(0, 1) : "";
}