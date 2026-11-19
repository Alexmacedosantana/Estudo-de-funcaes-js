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
fullname("Alex", "Macedo", "Rio Branco", "Tancredo Neves", "25 de Dezembro")


// function com 3 parâmetros apresentarPessoa(name, idade, cidade)
function apresentarPessoa(name, idade, cidade) {
    console.log(name + " tem " + idade + " anos e mora em " + cidade);
}

apresentarPessoa("Alex", 36, "Rio Branco");

// function com 4 parâmetros cadastrarProduto(nome, preco, categoria, quantidade)
function cadastrarProduto(nome, preco, categoria, quantidade) {
    console.log( "Produto: " + nome + "\nPreço:R$ " + preco + "\nCategoria: " + categoria +"\nEstoque: " + quantidade + " unidades"
    );
}

cadastrarProduto("Parafuso de rosca", 2, "Ferragens", 30);