package main

import "fmt"

// função que atribui um Número e tenta encaixar em cada quadrante
func atribuiNumeroAoQuadrante(x int, tabuleiro [][]int) [][]int {
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
	
	for i := 0; i < 9; i++ {
		aleatorio := geraRandomInt() - 1 
		for !verify(x, quadrantes[quadrante[x][aleatorio]]) {
			aleatorio = geraRandomInt() - 1 
			if !verifyColuna(x, aleatorio, tabuleiro) && !verify(x, quadrantes[quadrante[x][aleatorio]]) && !verify(x, tabuleiro[i]) {
				tabuleiro[i][aleatorio] = x
				quadrantes = atribuiQuadrantes(tabuleiro)
				} 		
			}
	}
	return quadrantes
}

// funcao que atribui os numeros correspondentes aos quadrantes
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

// função para preencher uma linha
func preencheLinha (i int, tabuleiro [][]int) [][]int {
	for num := i; num < 9; num++ {
		count := 0
		for tabuleiro[i][num] == 0 {
			if count > 200 {
				fmt.Println("Num deu")
				break
			}
			quadrantes := atribuiQuadrantes(tabuleiro)
			x := geraRandomInt()

			//  && !verify(x, tabuleiro[num])
			if	!verifyColuna(x, num, tabuleiro)  && !verify(x, tabuleiro[i]) && !verify(x, quadrantes[quadrante[i][num]]) {
				tabuleiro[i][num] = x
			}
		count++ 
		} 
	}
	return tabuleiro
}


// função para preencher uma coluna 
func preencheColuna (i int, tabuleiro [][]int) [][]int {
	for num := i; num < 9; num++ {
		count := 0
		for tabuleiro[num][i] == 0 {
			if count > 200 {
				i--
				fmt.Println("Num deu")
				break
			}
			quadrantes := atribuiQuadrantes(tabuleiro)
			x := geraRandomInt()
			if	!verifyColuna(x, i, tabuleiro)  && !verify(x, tabuleiro[num]) && !verify(x, quadrantes[quadrante[num][i]])  {
				tabuleiro[num][i] = x
				}
			count++ 
			} 
		}
	return tabuleiro
	}


