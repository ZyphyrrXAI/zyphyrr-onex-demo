document.getElementById("start-demo").addEventListener("click", function() {
    const output = document.getElementById("output");

    // Check if the output div exists
    if (!output) {
        console.error("Error: #output element not found in HTML.");
        return;
    }

    output.innerHTML = "<p class='loading'>Initializing Zyphyrr OneX AI...</p>";
    
    setTimeout(() => {
        output.innerHTML += "<p class='activated'>AI Activated. Ready for interaction.</p>";
    }, 2000);
});
