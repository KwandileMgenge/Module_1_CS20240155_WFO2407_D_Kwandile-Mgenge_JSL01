function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
    let validPetCode = /^pet_\d{4}[a-zA-Z]+$/;

    // Check if input starts with 'pet_' and followed by alphanumeric characters
    if (validPetCode.test(input)) {
        result = "Valid Syntax 🟢"
    }else {
        result = "Invalid Syntax 🔴"
    }
    
    document.getElementById('result').innerText = result;
}


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
    })