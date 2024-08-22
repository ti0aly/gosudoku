package main

import (
	"fmt"
	"time"
	"math/rand"
)

func geraUmTabuleiroValido(tabuleiro [][]int) [][]int {
	var posicoesPossiveis [][]int
	var linha, coluna int 
	count := 0
	for { 
		
		count++
		for num := 1; num <= 9; num++ {
			for i := 0; i < 9; i++ {
				posicoesPossiveis = verificaTodasAsPosicoesPossiveisDeUmNumero(num, tabuleiro)
				if len(posicoesPossiveis) > 0 {
					linha, coluna = sorteiaNumeroDeUmVetor(posicoesPossiveis)
					tabuleiro[linha][coluna] = num
				}
			}
		}

	if !verificaTabuleiro(tabuleiro) {
		fmt.Println("<- esta foi a demora em segundos\n\nNumero de tentativas: ", count)

		break

	} else {
		tabuleiro = [][]int{
			0: {0, 0, 0, 0, 0, 0, 0, 0, 0},
			1: {0, 0, 0, 0, 0, 0, 0, 0, 0},
			2: {0, 0, 0, 0, 0, 0, 0, 0, 0},
			3: {0, 0, 0, 0, 0, 0, 0, 0, 0},
			4: {0, 0, 0, 0, 0, 0, 0, 0, 0},
			5: {0, 0, 0, 0, 0, 0, 0, 0, 0},
			6: {0, 0, 0, 0, 0, 0, 0, 0, 0},
			7: {0, 0, 0, 0, 0, 0, 0, 0, 0},
			8: {0, 0, 0, 0, 0, 0, 0, 0, 0},
				} 
	}


	}
	return tabuleiro

}

// gera numero aleatorio entre 1 e 9
func geraRandomInt() int {
    // Inicializa o gerador com a semente atual do tempo
    rand.Seed(time.Now().UnixNano())
   
    // Gera o número aleatório no intervalo [min, max]
    return rand.Intn(9) + 1
}

// gera um slice de inteiros de um a 9 sem repetir
func geraSliceSemRepeticao() []int {
	sliceSemRepeticao := []int{}
	
	for {
		if len(sliceSemRepeticao) == 9 {
			break
		}
		x := geraRandomInt()
		if !verify(x, sliceSemRepeticao) {
			sliceSemRepeticao = append(sliceSemRepeticao, x)
		}

	}
	return sliceSemRepeticao
}

// gera um tabuleiro com 3 quadrantes independentes pronto
func geraTabuleiroComTresQuadrantes() [][]int {
	var x, y, z = geraSliceSemRepeticao(), geraSliceSemRepeticao(), geraSliceSemRepeticao()
	var tabuleiroComTresQuadrantes = [][]int{
		0: {x[0], x[1], x[2], 0, 0, 0, 0, 0, 0},
		1: {x[3], x[4], x[5], 0, 0, 0, 0, 0, 0},
		2: {x[6], x[7], x[8], 0, 0, 0, 0, 0, 0},
		3: {0, 0, 0, y[0], y[1], y[2], 0, 0, 0},
		4: {0, 0, 0, y[3], y[4], y[5], 0, 0, 0},
		5: {0, 0, 0, y[6], y[7], y[8], 0, 0, 0},
		6: {0, 0, 0, 0, 0, 0, z[0], z[1], z[2]},
		7: {0, 0, 0, 0, 0, 0, z[3], z[4], z[5]},
		8: {0, 0, 0, 0, 0, 0, z[6], z[7], z[8]},
 		}   
	return tabuleiroComTresQuadrantes
}

func sorteiaNumeroDeUmVetor(vetor [][]int) (int, int) {
	// Inicializa o gerador com a semente atual do tempo
	rand.Seed(time.Now().UnixNano())
	sorteado := vetor[rand.Intn(len(vetor))]
	x, y := sorteado[0], sorteado[1]
	return x, y

}
