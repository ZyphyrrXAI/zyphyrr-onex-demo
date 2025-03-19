// Ensure DOM is fully loaded before executing script
document.addEventListener("DOMContentLoaded", function () {
    const startDemo = document.getElementById("start-demo");
    const githubLink = document.getElementById("github-link");
    const liveDemoLink = document.getElementById("live-demo-link");

    if (startDemo) {
        startDemo.addEventListener("click", function () {
            const output = document.getElementById("output");
            output.innerHTML = "<p class='loading'>Initializing Zyphyrr OneX AI...</p>";

            setTimeout(() => {
                output.innerHTML += "<p class='activated'>AI Activated. Ready for interaction.</p>";
            }, 2000);
        });
    }

    if (githubLink) {
        githubLink.addEventListener("click", function () {
            window.open("https://github.com/zyphyrrxai/zyphyrr-onex-demo", "_blank");
        });
    }

    if (liveDemoLink) {
        liveDemoLink.addEventListener("click", function () {
            window.open("https://zyphyrrxai.github.io/zyphyrr-onex-demo/", "_blank");
        });
    }
});
