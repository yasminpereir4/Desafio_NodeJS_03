/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { type } from 'os';

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);

	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	const readline = require ('readline');
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});


interface Aluno {
  nome: string;
  nota: number;
}

const alunos: Aluno[] = [];

const cadastrarAlunos = (quantidade: number, contador: number = 0): void => {
  if (contador < quantidade) {
    rl.question(`Digite o nome do aluno ${contador + 1}: `, (nome: string) => {
      rl.question(`Digite a nota do aluno ${contador + 1}: `, (nota: string) => {
        const notaNumber = Number(nota);
        if (isNaN(notaNumber)) {
          console.log('Nota inválida, tente novamente!');
          cadastrarAlunos(quantidade, contador);
        } else {
          alunos.push({ nome, nota: notaNumber });
          cadastrarAlunos(quantidade, contador + 1);
        }
      });
    });
  } else {
    console.log('Alunos cadastrados:');
    alunos.forEach((aluno) => {
      console.log(`- ${aluno.nome}: ${aluno.nota}`);
    });
    if (alunos.length > 0) {
      const alunoComMaiorNota: Aluno | null = obterMaiorNota(alunos);
      if (alunoComMaiorNota !== null) {
        console.log(`O aluno com maior nota é ${alunoComMaiorNota.nome}, com a nota ${alunoComMaiorNota.nota}`);
      }
    }
    rl.close();
  }
};

rl.question('Quantos alunos deseja inserir? ', (quantidade: string) => {
  const quantidadeNumber = Number(quantidade);
  if (isNaN(quantidadeNumber)) {
    console.log('Quantidade inválida, tente novamente!');
    rl.close();
  } else {
    console.log(`A quantidade digitada foi: ${quantidadeNumber}`);
    cadastrarAlunos(quantidadeNumber);
  }
});

const obterMaiorNota = (alunos: Aluno[]): Aluno | null => {
  let maiorNota: number = 0;
  let alunoComMaiorNota: Aluno | null = null;
  for (const aluno of alunos) {
    if (aluno.nota > maiorNota) {
      maiorNota = aluno.nota;
      alunoComMaiorNota = aluno;
    }
  }
  return alunoComMaiorNota;
};

	});