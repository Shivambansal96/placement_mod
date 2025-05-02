
const input = "Learn more javascript dude";
const res = removeDup(input);
console.log(res);


function removeDup(originalStr) {
    let newStr = " ";

    for(let char of originalStr) {
        if(!newStr.includes(char)) {
            newStr += char;
        }
    }
    
    // let noDuplicate = new Set(originalStr);
    // return [...noDuplicate].join(' ');

    return newStr;

}



