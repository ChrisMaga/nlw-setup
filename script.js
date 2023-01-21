const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

// Sempre que eu clicar no botão, ele vai executar a função de click
button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso! 🔴")
    return
  }

  alert("Adicionado com sucesso! ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

//array é um agrupamento de dados. Como se fosse um armário do qual voce guarda as coisas

// const data = {
//   run: ["01-01", "01-02", "01-06"],
//   water: ["01-01", "01-02", "01-03"],
//   food: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06"],
// }
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} //pegou do LocalStorage as informações que estavam em texto e colocou aqui pra mim em NLWSetup - {} -> é um objeto vazio, caso não tenha nada guardado no localStorage
nlwSetup.setData(data)
//cada biblioteca tem uma maneira de ser utilizada.
nlwSetup.load()
