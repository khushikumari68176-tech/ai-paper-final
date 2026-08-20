 
window.onload = function () {

  let subject = localStorage.getItem("subject");
  let level = localStorage.getItem("level");
  let mode = localStorage.getItem("mode");

  let output = "";

  if (!subject) {
    alert("Select subject first");
    return;
  }

  document.getElementById("title").innerText = subject.toUpperCase() + " QUESTION PAPER";

  let easy = expandQuestions(database[subject].easy);
  let medium = expandQuestions(database[subject].medium);
  let hard = expandQuestions(database[subject].hard);

  // full PAPER
  if (mode === "full") {

    let easyQ = getRandomQuestions(easy, 20);
    let mediumQ = getRandomQuestions(medium, 15);
    let hardQ = getRandomQuestions(hard, 15);

    output += `<h2>SECTION A (2 Marks)</h2><hr style="background-color:red;height:4px;"><br>`;
    easyQ.forEach((q, i) => {
      output += `<p>Q${i + 1}. ${q}</p><hr><br>`;
    });

    output += `<h2>SECTION B (5 Marks)</h2><hr style="background-color:red;height:4px;"><br>`;
    mediumQ.forEach((q, i) => {
      output += `<p>Q${i + 21}. ${q}</p><hr><br>`;
    });

    output += `<h2>SECTION C (10 Marks)</h2><hr style="background-color:red;height:4px;"><br>`;
    hardQ.forEach((q, i) => {
      output += `<p>Q${i + 36}. ${q}</p><hr><br>`;
    });
  }

  //  SINGLE LEVEL
  else if (level) {

    let base = expandQuestions(database[subject][level]);
    let questions = getRandomQuestions(base, 20);

    let marks =
      level === "easy" ? "2 Marks" :
      level === "medium" ? "5 Marks" : "10 Marks";

    questions.forEach((q, i) => {
      output +=`<p>Q${i + 1}. ${q} <span style="color:blue;"><br>(${marks} )
      </span><hr><br></p>`;
    });
  }

  document.getElementById("questions").innerHTML = output;
};