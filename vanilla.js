const button = document.querySelector("button");

    button.addEventListener("click", (event) => {
      button.textContent = `Click count: ${event.detail}`;
    });

    const para = document.querySelector("p");

    para.addEventListener("click", updateName);

    function updateName() {
      const name = prompt("Enter a new name");
      para.textContent = `Player 1: ${name}`;
    }
    