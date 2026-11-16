function alex() {
    console.log("Alex bom dia");
}
alex();

// function teste() {
function teste() {
    console.log("Mensagem A");
}

console.log("Mensagem B");

teste();

console.log("Mensagem C");

//function com 2 parâmetros Apresenta(name, idade) 
function Apresenta(name, idade) {
    console.log(name + " tem " + idade + " anos");
}

Apresenta("Alex", 36);
Apresenta("Janaia", 30);

// function com 5 parâmetros fullname(nome, sobrenome, cidade, bairro, rua)
function fullname(nome, sobrenome, cidade, bairro, rua) {
    console.log(nome + " " + sobrenome + " mora em " + cidade + ", bairro " + bairro + ", na rua " + rua);
    
}

// function com 3 parâmetros apresentarPessoa(name, idade, cidade)
function apresentarPessoa(name, idade, cidade) {
    console.log(name + " tem " + idade + " anos e mora em " + cidade);
}

apresentarPessoa("Alex", 36, "Rio Branco");

