var katzDeli = [];

function takeANumber(line, name){
  
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
}




function nowServing(line){
  if (!line.length){return "There is nobody waiting to be served!"}
  
  const numbersAndNames = [];
  
  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.shift(`${i+1}. ${line[i]}`)
  }

  return `Currently serving ${numbersAndNames.join(', ')}`
}



function currentLine(katzDeliLine){
    if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  
}}