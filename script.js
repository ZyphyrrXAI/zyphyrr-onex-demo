/* styles.css */

body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #121212;
    color: #fff;
    margin: 0;
    padding: 0;
}

header {
    background: linear-gradient(90deg, #4A00E0, #8E2DE2);
    padding: 20px;
    font-size: 24px;
    font-weight: bold;
}

button {
    background: #4A00E0;
    color: #fff;
    padding: 15px 30px;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
    margin-top: 20px;
}

button:hover {
    background: #8E2DE2;
    box-shadow: 0 0 20px rgba(138, 43, 226, 0.8);
    transform: scale(1.05);
}

.loading, .activated, .response {
    font-size: 18px;
    margin-top: 15px;
    opacity: 0;
    animation: fadeIn 1.5s forwards;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
