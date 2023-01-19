$('#but_gen').on('click', function(){
    let characters = '';
    let checked = $('[type = "checkbox"]:checked');
    for (let i = 0; i < checked.length; i++) {
        characters += checked[i].value;
    }
    let resLng = $('#string_length').val();
    let res = '';
    for (let i = 0; i < resLng; i++) {
        let index = Math.floor(Math.random()*characters.length);
        res += `${characters[index]}`;
    }
    $('#result').val(res)
})


