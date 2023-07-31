const fs = require('fs');


const content = "how are you?";
const pathway = "./data.txt"

fs.writeFile(pathway, content + '\n', (err) =>{
    if (err) {
        console.log('there was a error')
    }
   else {
        console.log("successfully appended ")
    }
}) 



const secondContent = "The sun is dark";

fs.writeFile(pathway, '\n '+ secondContent + '\n', (err) =>
{
    if(err){
        console.log("error uploading 2nd part ")
    }
    else{
        console.log("2nd part uploaded ")
    }
})

// THE SECOND LINE OVERRIDE THE PREVIOUS DATA

const newContent = "The dog is black and pink"

fs.writeFile(pathway, '\n' + newContent + '\n', (err)=>
{
    if(err){
        console.log("ERROR loading new content")
    }
    else{
        console.log("new content loaded ");
    }
})
