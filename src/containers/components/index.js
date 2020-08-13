export const checkInputFields = () => {
  if(document.querySelector("#numOfHoles").value === ""){
    document.querySelector("#numOfHoles").classList.add("border", "border-danger")
  } else{
    document.querySelector("#numOfHoles").classList.remove("border", "border-danger")
  }

  for(let input of Array.from(document.querySelectorAll("#course-form input"))){
    if(input.value === ""){
      input.classList.add("border", "border-danger")
    } else{
      input.classList.remove("border", "border-danger")
    }
  }
}

export const resetInputFields = () => {
  for(let input of Array.from(document.querySelectorAll("#course-form input"))){
    input.classList.remove("border", "border-danger")
  }
  document.querySelector("#numOfHoles").classList.remove("border", "border-danger")
}

export const checkRoundInputFields = () => {
  for(let input of Array.from(document.querySelectorAll("#new-round-form input"))){
    if(input.value === ""){
      input.classList.add("border", "border-danger")
    } else{
      input.classList.remove("border", "border-danger")
    }
  }
}

export const resetRoundInputFields = () => {
  for(let input of Array.from(document.querySelectorAll("#new-round-form input"))){
    input.classList.remove("border", "border-danger")
  }
}
