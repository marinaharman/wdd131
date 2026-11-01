const typeSelect = document.querySelector("#type");
const extraInput = document.querySelector("#extra-input");
const form = document.querySelector("form");
const errorMessage = document.querySelector("#error");
const submitInfo = document.querySelector("#submit-info");
// const studentId = document.querySelector("#i-number");

typeSelect.addEventListener("change", showExtraInput);

function showExtraInput() {
    extraInput.innerHTML = "";


    if (typeSelect.value === "student") {
        extraInput.innerHTML = `
        <label for="i-number">Student I#</label><br>
        <input type="text" id="i-number" name="i-number" required></input><br>
        `;

        // if (studentId.value !== "" && !/^\d{9}$/.test(studentId.value)) {
        //     errorMessage.textContent = "Please enter 9 digits";
        //     return;
        // }

    

}   else if (typeSelect.value === "guest") {
        extraInput.innerHTML = `
        <label for="access-code">Access Code</label><br>
        <input type="text" id="access-code" name="access-code" required></input><br>
        `;
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

        if (typeSelect.value === "student") {
        const studentId = document.querySelector("#i-number");

        if (studentId.value !== "" && !/^\d{9}$/.test(studentId.value)) {
            errorMessage.textContent = "Please enter exactly 9 digits.";
            return;
        }
    }

    if (!form.checkValidity()) {
        errorMessage.textContent = "Please enter all required fields";
        return;
    }

    errorMessage.textContent = "";

    submitInfo.innerHTML = `
        <h2>Ticket Created</h2>
        <p>${form.elements["first"].value} ${form.elements["last"].value}</p>
        <p>${typeSelect.options[typeSelect.selectedIndex].text}</p>
        <p>${form.elements["event-date"].value}</p>
    `;
});