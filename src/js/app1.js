function confirmChange() {
    var result = confirm("Fon rəngini qara rəngə dəyişmək istəyirsiniz?");
    
    if (result) {
        document.body.style.backgroundColor = "black";
    }
}