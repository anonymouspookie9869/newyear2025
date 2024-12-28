function changeName() {
    let newName = prompt("Enter the name of the wisher:");
    if (newName) {
        document.getElementById("name").textContent = newName;
    }
}
