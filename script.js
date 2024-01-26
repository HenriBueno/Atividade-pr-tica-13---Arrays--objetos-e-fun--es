
let menu = 1;
let veiculos = [];

function case1() {
  let veiculo = {
    id: veiculos.length + 1,
    modelo: prompt("Digite o modelo do veículo:"),
    marca: prompt("Digite a marca do veículo:"),
    ano: prompt("Digite o ano do veículo:"),
    cor: prompt("Digite a cor do veículo:"),
    preco: prompt("Digite o preço do veículo:"),
  };
  veiculos.push(veiculo);
}

function case2() {
  veiculos.map((veiculo) => {
    veiculo.id,
      veiculo.modelo,
      veiculo.marca,
      veiculo.ano,
      veiculo.cor,
      veiculo.preco;
    console.log(
      "ID:",
      veiculo.id,
      "|",
      "Modelo:",
      veiculo.modelo,
      "|",
      "Marca:",
      veiculo.marca,
      "|",
      "Ano:",
      veiculo.ano,
      "|",
      "Cor:",
      veiculo.cor,
      "|",
      "Preço:",
      veiculo.preco
    );
  });
}

function case3() {
  let veiculosFiltrados = prompt(
    "Digite a Marca do Veiculo que voce deseja filtrar"
  );

  veiculos
    .filter((veiculo) => {
      return veiculo.marca === veiculosFiltrados;
    })
    .map((veiculo) => {
      veiculo.id;
      veiculo.modelo;
      veiculo.cor;
      veiculo.preco;
      console.log(veiculo.id, veiculo.modelo, veiculo.cor, veiculo.preco);
    });
}

function case4() {
  let veiculoAtualizado = Number(
    prompt("Digite o  ID do Veiculo que voce deseja atualizar ")
  );
  let veiculoEncontrado = veiculos.filter((veiculo) => {
    return veiculo.id === veiculoAtualizado;
  });

  if (veiculoEncontrado.find((veiculo) => veiculo.id === veiculoAtualizado)) {
    veiculos.map((veiculo) => {
      veiculo.cor = prompt("digite a nova cor do seu veiculo");
      veiculo.preco = prompt("Digite o novo preco do seu veiculo");
      console.log(veiculo.cor, veiculo.preco);
    });
  } else {
    alert(
      "Veículo, não encontrado. O usuário deve voltar para o menu inicial "
    );
    return;
  }
  
}

function case5() {
  let veiculoIdentificador = Number(
    prompt("Digite o  ID do Veiculo que voce deseja atualizar ")
  );
  let ConsultarId = veiculos.filter((veiculo) => {
    return veiculo.id === veiculoIdentificador;
  });
  let apagarId = veiculos.findIndex((veiculo) => veiculo.id);
  if (ConsultarId.find((veiculo) => veiculo.id === veiculoIdentificador)) {
    veiculos.splice(apagarId, 1);
    console.log("voce apagou seu veiculo");
  } else {
    alert(
      "Veículo, não encontrado. O usuário deve voltar para o menu inicial "
    );
  }
  return;
}


function lacoDeRepeticao() {
  while (true) {
    const opcao = Number(
      prompt(
        "Escolha uma opção:\n1 - Cadastrar veículo\n2 - Listar veículos\n3 - Filtrar veículos por marca\n4 - Atualizar veículo\n5 - Remover veículo\n6 - Sair"
      )
    );
    switch (opcao) {
      case 1:
        case1();
        break;
      case 2:
        case2();
        break;
      case 3:
        case3();
        break;
      case 4:
        case4();
        break;
      case 5:
        case5();
        break;
      case 6:
        return false;
        break;
      default:
        alert("Opcao invalida");
        break;
    }
  }
}

lacoDeRepeticao();
console.log("Pull request sucesso")
