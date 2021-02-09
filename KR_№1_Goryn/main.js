

let getSel = (x) => document.querySelector(x);




getSel('.edit_btn').addEventListener('click', function(){
    console.log('a');
    getSel('.text_area').value = getSel('.slider').innerHTML;
    getSel('.edit').style.display = 'block';
    getSel('.style').style.display = 'none';
    getSel('.selector').style.display = 'none';
    getSel('.creater').style.display = 'none';
})


getSel('.save_button').addEventListener('click', function(){
    
    getSel('.slider').innerHTML = getSel('.text_area').value;
    getSel('.edit').style.display = 'none';
    getSel('.creater').style.display = 'none';

})

getSel('.style_btn').addEventListener('click', function(){
    
    getSel('.style').style.display = 'flex';
    getSel('.edit').style.display = 'none';
    getSel('.selector').style.display = 'none';
    getSel('.creater').style.display = 'none';

})


getSel('.text_color').addEventListener('click', function(){
    getSel('.selector').style.display = 'none';
    getSel('.background_selector').style.display = 'none';
    getSel('.selector').style.display = 'flex';
    getSel('.text_color_selector').style.display = 'flex';
    
})
getSel('.background_color_selector').addEventListener('click', function(){
    getSel('.selector').style.display = 'none';
    getSel('.text_color_selector').style.display = 'none';
    getSel('.selector').style.display = 'flex';
    getSel('.background_selector').style.display = 'flex';


    
})






/////////////////////////////////////

// COLORS TEXT

getSel('.text_color_selector_item_red').addEventListener('click',function(){
    getSel('.slider').style.color = 'red';
})
getSel('.text_color_selector_item_lime').addEventListener('click',function(){
    getSel('.slider').style.color = 'lime';
})
getSel('.text_color_selector_item_yellow').addEventListener('click',function(){
    getSel('.slider').style.color = 'yellow';
})
getSel('.text_color_selector_item_brown').addEventListener('click',function(){
    getSel('.slider').style.color = 'brown';
})
getSel('.text_color_selector_item_blue').addEventListener('click',function(){
    getSel('.slider').style.color = 'blue';
})
getSel('.text_color_selector_item_orange').addEventListener('click',function(){
    getSel('.slider').style.color = 'orange';
})
getSel('.text_color_selector_item_purple').addEventListener('click',function(){
    getSel('.slider').style.color = 'purple';
})
getSel('.text_color_selector_item_black').addEventListener('click',function(){
    getSel('.slider').style.color = 'black';
})
getSel('.text_color_selector_item_white').addEventListener('click',function(){
    getSel('.slider').style.color = 'white';
})





// COLORS TEXT



// BACKGROUND TEXT

getSel('.background_color_selector_item_red').addEventListener('click',function(){
    getSel('.slider').style.backgroundColor = 'red';
})
getSel('.background_color_selector_item_lime').addEventListener('click',function(){
    getSel('.slider').style.backgroundColor = 'lime';
})
getSel('.background_color_selector_item_yellow').addEventListener('click',function(){
    getSel('.slider').style.backgroundColor = 'yellow';
})
getSel('.background_color_selector_item_brown').addEventListener('click',function(){
    getSel('.slider').style.backgroundColor = 'brown';
})
getSel('.background_color_selector_item_blue').addEventListener('click',function(){
    getSel('.slider').style.backgroundColor = 'blue';
})
getSel('.background_color_selector_item_orange').addEventListener('click',function(){
    getSel('.slider').style.backgroundColor = 'orange';
})
getSel('.background_color_selector_item_purple').addEventListener('click',function(){
    getSel('.slider').style.backgroundColor = 'purple';
})
getSel('.background_color_selector_item_black').addEventListener('click',function(){
    getSel('.slider').style.backgroundColor = 'black';
})
getSel('.background_color_selector_item_white').addEventListener('click',function(){
    getSel('.slider').style.backgroundColor = 'white';
})





// BACKGROUND TEXT


///////////////////////////////



let formStyle = document.forms['style_form'];





formStyle.ckeckboxBold.addEventListener('click', function(){

    if(formStyle.ckeckboxBold.checked) {
        getSel('.slider').style.fontWeight = 'bold';
    } else {
        getSel('.slider').style.fontWeight = 'normal';

    }
})
formStyle.checkboxCursive.addEventListener('click', function(){

    if(formStyle.checkboxCursive.checked) {
        getSel('.slider').style.fontStyle = 'italic';
    } else {
        getSel('.slider').style.fontStyle = '';

    }
})


for(let i = 0; i < formStyle.fs.length; i++ ){
            if(formStyle.fs[i].checked){
                getSel('.slider').style.fontSize = formStyle.fs[i].value;
            }

        formStyle.fs[i].addEventListener('click', function(){
            if(formStyle.fs[i].checked){
                getSel('.slider').style.fontSize = formStyle.fs[i].value;
            }
        })

    }


    getSel('.slider').style.fontFamily = formStyle.familySelect.value;

getSel('#mySelect').onchange = function(){
    getSel('.slider').style.fontFamily = formStyle.familySelect.value;
}


getSel('.add_button').addEventListener('click', function(){

    getSel('.creater').style.display = 'block';
    getSel('.edit').style.display = 'none';
})





let formCreater = document.forms['createrForm'];



formCreater.table_list[0].addEventListener('click', function(){
    if(formCreater.table_list[0].checked) {
        getSel('.table_block').style.display = 'block';
        getSel('.list_style').style.display = 'none';   
    }
})
formCreater.table_list[1].addEventListener('click', function(){
    if(formCreater.table_list[1].checked) {
        getSel('.list_style').style.display = 'block'; 
        getSel('.table_block').style.display = 'none';

    }
})











let test = getSel('.slider');





getSel('#borderColor').onchange = function(){
    let borderColor = getSel('#borderColor').value;
    console.log(borderColor);
    
}
console.log(borderColor);

getSel('#borderStyle').onchange = function(){
    let borderStyle = getSel('#borderStyle').value;
    console.log(borderStyle);
    
}
console.log(borderStyle);

console.log(getSel('#borderStyle').value);
console.log(getSel('#borderColor').value);


getSel('.createTable').addEventListener('click', function(){
    
    let countTr = getSel('.trC').value;
    let countTd = getSel('.tdC').value;
    
    let borderWidth = getSel('.borderWidth').value + 'px';

    


    
    
    
    
    createTable(test, countTd , countTr, borderWidth);

})



function createTable(parent, cols, rows, borderWidth){
    let table = document.createElement('table');
    let widthTd = getSel('.wTd').value + 'px';
    let heightTd = getSel('.hTd').value + 'px';

    for(let i = 1; i <= rows; i++) {
        let tr = document.createElement('tr');
        for(let a = 1; a <= cols; a++) {
            let td = document.createElement('td');
            tr.appendChild(td).setAttribute('style', "border:" + borderWidth + " " + getSel('#borderStyle').value + " " + getSel('#borderColor').value + ';' +  "width:" + widthTd + ';' + 'height:' + heightTd );
            console.log(widthTd,heightTd);
        }
        
        table.appendChild(tr);
    }
    parent.appendChild(table);
    
}




getSel('.listCreator').addEventListener('click', function(){
    console.log(getSel('#marksSelect').value);
    
    let con = getSel('.bb').value;
    
    console.log(con);

    createList(con);
})



// createList(6);


function createList(count) {
    let ul = document.createElement('ul');
    for(let i = 1; i <= count; i++) {
        let li = document.createElement('li');
        li.innerText = 'List Item';

        
        ul.appendChild(li).setAttribute('type', getSel('#marksSelect').value);
    }
    getSel('.slider').appendChild(ul);
}




