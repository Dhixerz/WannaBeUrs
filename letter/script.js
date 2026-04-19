const message = `I need you to know this, I love you in ways I don't even understand
It's like my heart was made to belong to you. When I miss you, it feels like the world stops spinning. I think about you when I wake up, when fall asleep, and every moment in between. You're not just the person I love, You're my safe place. My forever. No one will ever compare to what you are to me (Even Megan Fox, she is nothing now).
Your presence in my life brings the best in me. I don't deserve you, but I can't see you with anyone else, so I'll be better for you, pinky promise!`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        // Adjust typing speed if needed
        setTimeout(typeWriter, 40);
      } else {
        // When typing finishes, show the next button
        document.getElementById("quizBtn").style.display = "block";
        document.getElementById("quizBtn").style.opacity = 1;
      }
    }

    typeWriter();
  }, 600);
}
