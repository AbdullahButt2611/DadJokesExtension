fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json()) //Converting the API's data into the json format
.then(jokeData => {
    const jokeText = jokeData.attachments[0].text;
    const jokeElement = document.getElementById("jokeElement");
    jokeElement.innerHTML = jokeText;
})