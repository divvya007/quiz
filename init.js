const questionSet = [
  {
    id: "q1",
    question:
      "How many of the speeches in Shakespeare's plays are recited by women?",
    options: ["33%", "17%", "52%"],
    answer: "17%",
  },
  {
    id: "q2",
    question:
      "After Antarctica, what is the most sparsely populated continent?",
    options: ["Asia", "Europe", "Australia", "Africa"],
    answer: "Australia",
  },
  {
    id: "q3",
    question: "What country won the very first FIFA World Cup in 1930?",
    options: ["Uruguay", "Spain", "Australia", "Brazil"],
    answer: "Uruguay",
  },
];

// starts here

const container = document.getElementById("question-list");
const newDiv = document.createElement("div");
container.append(newDiv);

for (let i = 0; i < questionSet.length; i++) {
  const divContainer = document.createElement("div");

  divContainer.innerHTML = questionSet[i].question;

  const divForBtn = document.createElement("div");
  const divForAns = document.createElement("div");
  const divHolder = document.createElement("div");

  divForAns.className = "answer_";
  divContainer.className = "divCont";
  divHolder.className = "divHoldingAllThree";

  divContainer.id = "divCont_" + i;
  divForBtn.id = "divBtn_id" + i;

  divForBtn.className = "divForBtn_class";
  divForBtn.className += " divForBtn_ColorChange";

  newDiv.append(divContainer);
  newDiv.append(divHolder);
  console.log(divContainer);

  for (let index = 0; index < questionSet[i].options.length; index++) {
    // const divForBtn = document.createElement("div");
    const btnContainer = document.createElement("button");
    btnContainer.innerHTML = questionSet[i].options[index];
    btnContainer.addEventListener("click", function () {
      const btnArray = divForBtn.getElementsByClassName("changeColor");
      console.log(btnArray[0]);
      if (btnArray[0]) {
        btnArray[0].classList.remove("changeColor");
      }
      // btnContainer.classList.remove("divForbtn_ColorChange");
      debugger;

      btnContainer.classList.add("changeColor");

      if (questionSet[i].options[index] === questionSet[i].answer) {
        divForAns.innerHTML = "Answer: Correct Answer";
      } else {
        divForAns.innerHTML = "Answer: Wrong Answer";
      }
    });

    btnContainer.className = "btnClass";
    // btnContainer.className += " removeColor";
    btnContainer.id = "btnid_" + index;

    divContainer.append(btnContainer);
    divForBtn.append(btnContainer);
    newDiv.append(divForBtn);
    newDiv.append(divForAns);
    divHolder.append(divContainer);
    divHolder.append(divForBtn);
    divHolder.append(divForAns);
  }
}
