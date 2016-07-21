function takeANumber(deli, person){
  deli.push(person); 
  return `Welcome, ${person}. You are number ${deli.length} in line.`
}

function nowServing(deli){
  if (deli.length==0){
    return "There is nobody waiting to be served!";
  }
  else {
     var person= deli.shift(); 
     return `Currently serving ${person}.`; 
  }
}


function currentLine(deli){
   if (deli.length==0){
    return "The line is currently empty.";
  }
  else {
     var s="The line is currently: ";
     for (var i=0; i<(deli.length-1); i++)
     {
         s=s+`${i+1}. ${deli[i]}, `;
     }
     return s=s+`${deli.length}. ${deli[deli.length-1]}`;
  }
}