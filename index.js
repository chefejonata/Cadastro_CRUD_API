// Adicionar

const nome = document.querySelector("#nome")
const sobrenome = document.querySelector("#sobrenome")
const idade = document.querySelector("#idade")

const butaoCadastar = document.querySelector("#buttonhead");

const deletardeletar = () => {
  document.querySelectorAll(".buttonlist");
};

let lista = []

butaoCadastar.addEventListener('click', (e) => {
  e.preventDefault();
  let itemnome = nome.value;
  let itemsobrenome = sobrenome.value;
  let itemidade = idade.value;

  const adicionar = `

    <tbody id="tabelabody">
      <td class="tabelacelula">${itemnome}</td>
      <td class="tabelacelula">${itemsobrenome}</td>
      <td class="tabelacelula">${itemidade}</td>
      <td class="tabelacelula tbuton">
        <button class="buttonlistDeletar" onclick="deletar()">Deletar</button>
        <button class="buttonlistEditar">Editar</button>
      </td>
    </tbody>
  `
  const tabela = document.querySelector("#tabelafull");
  
  tabela.insertAdjacentHTML("beforeend", adicionar)


  nome.value = "";
  sobrenome.value = "";
  idade.value = "";

  lista.push(document.querySelector(".buttonlist"));
  
  deletardeletar();
})

const deletando = document.querySelectorAll(".buttonlist")

  function deletar(){

    deletando.forEach(item, index => {
      lista.indexOf(lista[index]) 
    })
  }


















