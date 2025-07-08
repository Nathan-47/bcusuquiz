const showResults = () => {
    const resultEl = document.getElementById("result"); 

    // Define roles through thresholds and a message
    const roles = [
        { 
            threshold: 34, 
            message: "Congratulations! You qualify for the President role. " 
        },
        { 
            threshold: 28, 
            message: "Congratulations! You qualify for the VP Education role." 
        },
        { 
            threshold: 23, 
            message: "Congratulations! You qualify for the VP Welfare role." 
        },
        { 
            threshold: 17,
             message: "Congratulations! You qualify for the VP Community role." 
        },
        { 
            threshold: 14, 
            message: "Congratulations! You qualify for the VP Student Voice role." 
        },
    ];

    // Find the correct role based on the sumTotal
    const role = roles.find(r => sumTotal >= r.threshold);
    const resultMessage = role ? `<br><strong>${role.message}</strong>` : "";

    // display results image
    const resImg = '../images/quiz_officer_team.png';
    
    // Display the results message
    resultEl.innerHTML = `
      <h2 class="result-heading">Quiz Completed!</h2>
      <img class="result-image" src="${resImg}" alt="officer team" />
      <p class="result-msg">${resultMessage}</p>
    `;
};
