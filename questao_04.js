class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
      this.primeiroNome = primeiroNome;
      this.segundoNome = segundoNome;
      this.primeiraNota = primeiraNota;
      this.segundaNota = segundaNota;
  }

  nomeCompleto() {
      return this.primeiroNome + " " + this.segundoNome;
  }

  media() {
    return this.primeiraNota * 0.6 + this.segundaNota * 0.4;
  }

  situacao() {
    if (this.media() >= 6) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }

}

var alunos = [
  new Aluno("Carlos", "Azevedo", 7, 5),
  new Aluno("Julia", "Silva", 9, 4.7),
  new Aluno("Mario", "Borges", 3.4, 5.9)
];

function mostrar() {
  for (var i = 0; i < alunos.length; i++) {
    var aluno = alunos[i];
    alert("Nome: " + aluno.nomeCompleto() + "\nMédia: " + aluno.media() + "\nSituação: " + aluno.situacao());
  }
}

mostrar();