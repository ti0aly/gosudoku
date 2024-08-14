package main

// verifica se é uma posição valida para o numero indicado
// Ex.: verificaNumeroPosicao(numero, linha, coluna, tabuleiro)
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

// conta quantos zeros tem no tabuleiro
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
// verifica se tem um item em um vetor
func verify(x int, vetor []int) bool {
	for _, v := range vetor {
        if v == x {
            return true
        }
    }
    return false
}

// verifica se tem um item numa coluna de um slice of slice of int
func verifyColuna(x, coluna int, tabuleiro [][]int) bool {
	for i := 0; i < 9; i++ {
        if tabuleiro[i][coluna] == x {
            return true
        }
    }
    return false
}
