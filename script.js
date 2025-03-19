document.getElementById("start-demo").addEventListener("click", function() {
    const output = document.getElementById("output");
    output.innerHTML = "<p>Initializing Zyphyrr OneX AI...</p>";
    setTimeout(() => {
        output.innerHTML += "<p>AI Activated. Ready for interaction.</p>";
    }, 2000);
});
