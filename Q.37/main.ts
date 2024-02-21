//Q.37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size:string="Large", message:string="I love TypeScript"):void {
    console.log(`I've ordered "${size}" size shirt with a message "${message}" printed on it.`);
}
make_shirt()
make_shirt("L")
make_shirt("Medium")
make_shirt("Small","I am a Programmer.")
