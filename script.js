function indexOfIgnoreCase(str, subStr) {
  // Convert both strings to lowercase to perform a case-insensitive search
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  // Use indexOf to find the first occurrence of lowerSubStr in lowerStr
  return lowerStr.indexOf(lowerSubStr);
}

// Prompt user for input and display the result
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
