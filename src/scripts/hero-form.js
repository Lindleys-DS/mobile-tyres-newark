    // Find all next-btn elements
    const nextBtns = document.querySelectorAll(".next-btn");

    // Apply functionality to each next btn
    nextBtns.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const currentDiv = el.parentElement.parentElement.parentElement;
            const nextDiv = currentDiv.nextElementSibling;
            currentDiv.classList.add("d-none");
            nextDiv.classList.remove("d-none");
        })
    })

    // Find all back btn elements
    const backBtns = document.querySelectorAll(".back-btn");

    // Apply functionality to each back btn
    backBtns.forEach((el) => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            const currentDiv = el.parentElement.parentElement.parentElement;
            const previousDiv = currentDiv.previousElementSibling;
            currentDiv.classList.add("d-none");
            previousDiv.classList.remove("d-none")
        })
    })