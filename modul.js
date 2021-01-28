console.log("module.js is runing");

const fs = require('fs');

var readalltodo =() => {

    try {

        var alltodoStr = fs.readFileSync('List.json');
        return JSON.parse(alltodoStr);
        
    } catch (e) {
        return[];
    }
}

var writealltodo = (alltodo) => {
    fs.writeFileSync('List.json',JSON.stringify(alltodo, null, 4));
}

var listalltodo = todo => {
    console.log("**********");
    console.log("TITLE: ",todo.title);
    console.log("EXPLANATION",todo.explanation);
    console.log("DATE: ",todo.date);
}

var add = (title,explanation,date) => { 
    var alltodo = readalltodo();
    var todo={
        title,
        explanation,
        date
    }   
    var filtertitle = alltodo.filter(todo => todo.title === title);

    if (filtertitle.length == 0){
        alltodo.push(todo);
        writealltodo(alltodo);
        console.log("Create a new mission is succesfuly");
        listalltodo(todo);
    }
    else{console.log("Title is not repeadebla", title); }   
}

var list = () =>{
    alltodo = readalltodo();
    alltodo.forEach((todo) => listalltodo(todo));

}

var read = (title) => {
    alltodo = readalltodo();
    var readtitle = alltodo.filter(todo => todo.title === title);

    if(readtitle.length === 0){
        console.log("Title can not find.")
    }
    else{
        listalltodo(readtitle[0]);
    }


    
}

var remove =(title) => {
    alltodo = readalltodo();
    var removetitle = alltodo.filter(todo => todo.title !== title);
    writealltodo(removetitle);

    if(removetitle.length === alltodo.length)
    {
        console.log("can not remove");
    }
    else{
        console.log("Delete is succes!");
    }


}

module.exports = {
    add,
    list,
    read,
    remove
    };



