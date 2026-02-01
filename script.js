document.getElementById("visitForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let company = document.getElementById("company").value;
    let date = document.getElementById("date").value;

    if (name === "" || roll === "" || company === "" || date === "") {
        alert("Hello pranav nice to meet you ");
    } else {
        alert("registration successful!");
    }
});
