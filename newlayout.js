var fs =require('fs');
var randomNumber=Math.random();
fs.copyFile('Layouts/standard.jsx',`Layouts/newlayout-${randomNumber}.jsx`, (err)=>{
    if(err) throw err;
    console.log('New layout made see Layout folder Layouts/newlayout-${randomNumber}.jsx rename however you want');
})