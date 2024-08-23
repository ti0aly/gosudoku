package main

import (
	"fmt"
	"math/rand"
	"time"
)

var quadrante = [][]int {
	0: {0, 0, 0, 1, 1, 1, 2, 2, 2},
	1: {0, 0, 0, 1, 1, 1, 2, 2, 2},
	2: {0, 0, 0, 1, 1, 1, 2, 2, 2},
	3: {3, 3, 3, 4, 4, 4, 5, 5, 5},
	4: {3, 3, 3, 4, 4, 4, 5, 5, 5},
	5: {3, 3, 3, 4, 4, 4, 5, 5, 5},
	6: {6, 6, 6, 7, 7, 7, 8, 8, 8},
	7: {6, 6, 6, 7, 7, 7, 8, 8, 8},
	8: {6, 6, 6, 7, 7, 7, 8, 8, 8},
	}

var tabuleiro = [][]int{
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

var quadrantes = [][]int{
	0: {tabuleiro[0][0], tabuleiro[0][1], tabuleiro[0][2], tabuleiro[1][0], tabuleiro[1][1], tabuleiro[1][2], tabuleiro[2][0], tabuleiro[2][1], tabuleiro[2][2]},
	1: {tabuleiro[0][3], tabuleiro[0][4], tabuleiro[0][5], tabuleiro[1][3], tabuleiro[1][4], tabuleiro[1][5], tabuleiro[2][3], tabuleiro[2][4], tabuleiro[2][5]},
	2: {tabuleiro[0][6], tabuleiro[0][7], tabuleiro[0][8], tabuleiro[1][6], tabuleiro[1][7], tabuleiro[1][8], tabuleiro[2][6], tabuleiro[2][7], tabuleiro[2][8]},
	3: {tabuleiro[3][0], tabuleiro[3][1], tabuleiro[3][2], tabuleiro[4][0], tabuleiro[4][1], tabuleiro[4][2], tabuleiro[5][0], tabuleiro[5][1], tabuleiro[5][2]},
	4: {tabuleiro[3][3], tabuleiro[3][4], tabuleiro[3][5], tabuleiro[4][3], tabuleiro[4][4], tabuleiro[4][5], tabuleiro[5][3], tabuleiro[5][4], tabuleiro[5][5]},
	5: {tabuleiro[3][6], tabuleiro[3][7], tabuleiro[3][8], tabuleiro[4][6], tabuleiro[4][7], tabuleiro[4][8], tabuleiro[5][6], tabuleiro[5][7], tabuleiro[5][8]},
	6: {tabuleiro[6][0], tabuleiro[6][1], tabuleiro[6][2], tabuleiro[7][0], tabuleiro[7][1], tabuleiro[7][2], tabuleiro[8][0], tabuleiro[8][1], tabuleiro[8][2]},
	7: {tabuleiro[6][3], tabuleiro[6][4], tabuleiro[6][5], tabuleiro[7][3], tabuleiro[7][4], tabuleiro[7][5], tabuleiro[8][3], tabuleiro[8][4], tabuleiro[8][5]},
	8: {tabuleiro[6][6], tabuleiro[6][7], tabuleiro[6][8], tabuleiro[7][6], tabuleiro[7][7], tabuleiro[7][8], tabuleiro[8][6], tabuleiro[8][7], tabuleiro[8][8]},
		}   
		
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

func sorteiaNumeroDeUmVetor(vetor [][]int) (int, int) {
	rand.Seed(time.Now().UnixNano())
	sorteado := vetor[rand.Intn(len(vetor))]
	x, y := sorteado[0], sorteado[1]
	return x, y
}

func verificaTodasAsPosicoesPossiveisDeUmNumero(numero int, tabuleiro [][]int) [][]int {
	var posicoesPossiveis [][]int 
	for linha := 0; linha < 9; linha++ {
		for coluna := 0; coluna < 9; coluna++ {
			if verificaNumeroPosicao(numero, linha, coluna, tabuleiro) {
				posicoesPossiveis = append(posicoesPossiveis, []int{linha, coluna})
			}
		}
	}
	return posicoesPossiveis
}

// verifica se tem 0 no tabuleiro
func verificaTabuleiro (tabuleiro [][]int) bool {
	temZero := false
	for c := 0; c < 9; c++ {
		for i := 0; i < 9; i++ {
			if tabuleiro [c][i] == 0 {
				temZero = true
			}
		}
	}
	return temZero
}


func verificaNumeroPosicao(numero, linha, coluna int, tabuleiro [][]int) bool {
	if !verifyColuna(numero, coluna, tabuleiro) && !verify(numero, tabuleiro[linha]) && !verificaQuadranteDeUmTabuleiro(numero, quadrante[linha][coluna], tabuleiro)  && tabuleiro[linha][coluna] == 0 {
		return true
	}
	return false
}

func zeraNumeroIndicadoNoTabuleiro(numero int, tabuleiro [][]int) [][]int {
	for linha := 0; linha < 9; linha ++ {
		for coluna:= 0; coluna < 9; coluna++ {
			if numero == tabuleiro[linha][coluna] {
				tabuleiro[linha][coluna] = 0
			}
		}
	}
	return tabuleiro
}

func verificaQuadranteDeUmTabuleiro(numero, numeroDoQuadrante int, tabuleiro [][]int) bool {
	defineQuadrantes := atribuiQuadrantes(tabuleiro)
	return verify(numero, defineQuadrantes[numeroDoQuadrante]) 
}




func verificaQuantosZerosTabuleiro (tabuleiro [][]int) int {
	temZero := 0
	for c := 0; c < 9; c++ {
		for i := 0; i < 9; i++ {
			if tabuleiro [c][i] == 0 {
				temZero++
			}
		}
	}
	return temZero
}

func verify(x int, vetor []int) bool {
	for _, v := range vetor {
        if v == x {
            return true
        }
    }
    return false
}

func verifyColuna(x, coluna int, tabuleiro [][]int) bool {
	for i := 0; i < 9; i++ {
        if tabuleiro[i][coluna] == x {
            return true
        }
    }
    return false
}

func atribuiQuadrantes(tabuleiro [][]int) [][]int {
	var quadrantes = [][]int{
		0: {tabuleiro[0][0], tabuleiro[0][1], tabuleiro[0][2], tabuleiro[1][0], tabuleiro[1][1], tabuleiro[1][2], tabuleiro[2][0], tabuleiro[2][1], tabuleiro[2][2]},
		1: {tabuleiro[0][3], tabuleiro[0][4], tabuleiro[0][5], tabuleiro[1][3], tabuleiro[1][4], tabuleiro[1][5], tabuleiro[2][3], tabuleiro[2][4], tabuleiro[2][5]},
		2: {tabuleiro[0][6], tabuleiro[0][7], tabuleiro[0][8], tabuleiro[1][6], tabuleiro[1][7], tabuleiro[1][8], tabuleiro[2][6], tabuleiro[2][7], tabuleiro[2][8]},
		3: {tabuleiro[3][0], tabuleiro[3][1], tabuleiro[3][2], tabuleiro[4][0], tabuleiro[4][1], tabuleiro[4][2], tabuleiro[5][0], tabuleiro[5][1], tabuleiro[5][2]},
		4: {tabuleiro[3][3], tabuleiro[3][4], tabuleiro[3][5], tabuleiro[4][3], tabuleiro[4][4], tabuleiro[4][5], tabuleiro[5][3], tabuleiro[5][4], tabuleiro[5][5]},
		5: {tabuleiro[3][6], tabuleiro[3][7], tabuleiro[3][8], tabuleiro[4][6], tabuleiro[4][7], tabuleiro[4][8], tabuleiro[5][6], tabuleiro[5][7], tabuleiro[5][8]},
		6: {tabuleiro[6][0], tabuleiro[6][1], tabuleiro[6][2], tabuleiro[7][0], tabuleiro[7][1], tabuleiro[7][2], tabuleiro[8][0], tabuleiro[8][1], tabuleiro[8][2]},
		7: {tabuleiro[6][3], tabuleiro[6][4], tabuleiro[6][5], tabuleiro[7][3], tabuleiro[7][4], tabuleiro[7][5], tabuleiro[8][3], tabuleiro[8][4], tabuleiro[8][5]},
		8: {tabuleiro[6][6], tabuleiro[6][7], tabuleiro[6][8], tabuleiro[7][6], tabuleiro[7][7], tabuleiro[7][8], tabuleiro[8][6], tabuleiro[8][7], tabuleiro[8][8]},
			}   
	
	return quadrantes
}

func main() {
	tabuleiroValido := geraUmTabuleiroValido(tabuleiro)
	fmt.Println(tabuleiroValido)
}