function alertCheckedLength() {
    const name = document.getElementById("visitorName");
    var len = [].slice.call(document.querySelectorAll("[id='movie']"))
        .filter(function(e) { return e.checked; }).length;
        
    alert(name.value + "님, 저와 " + len + "개의 취향이 같으시네요!");
}

function cancelMovieCheckbox() {
    [].slice.call(document.querySelectorAll("[id='movie']"))
        .filter(function(e) { e.checked = false; });
}

const clickButton = document.getElementById("clickButton");
clickButton.addEventListener("click", alertCheckedLength);

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", cancelMovieCheckbox);