//Q.43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function showMagicians(magicians: string[]): void {
    console.log(magicians.join("\n"));
  }
  function makeGreat(magicians: string[]): string[] {
    return magicians.map((magician) => `${magician} the Great`);
  }
  let magiciansCopy:string[] = ["Harry Houdini","Teller","Penn","Copper Field"];
  let greatMagicians = makeGreat(magiciansCopy);
  //ORIGINAL MAGICIANS:
  console.log("Original magicians:");
  showMagicians(magiciansCopy);
  //WITH GREAT:
  console.log("\nMagicians with 'the Great' added:");
  showMagicians(greatMagicians);

