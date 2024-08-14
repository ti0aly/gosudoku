package main

import (
	"time"
	"fmt"
)
// Esse mapa garante o posicionamento no quadrante
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

// Esse mapa gera a variável vazia inicial
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

// determina todas as posições de um quadrante
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
		
func main() {
	go imprimeDemoraEmSegundos()
	tabuleiroValido := geraUmTabuleiroValido(tabuleiro)
	imprimeTabuleiro(tabuleiroValido)
	fmt.Println("\nA JANELA FECHARÁ EM 20 SEGUNDOS")
	time.Sleep(20 * time.Second)

}




/* 
tabuleiro = [][]int{
	0: {1, 0, 7, 0, 0, 6, 4, 5, 0},
	1: {0, 2, 5, 3, 4, 0, 0, 0, 8},
	2: {0, 6, 0, 0, 0, 1, 0, 7, 0},
	3: {0, 5, 3, 0, 0, 0, 0, 2, 9},
	4: {6, 1, 0, 0, 0, 9, 8, 0, 0},
	5: {0, 0, 0, 6, 0, 2, 0, 0, 7},
	6: {0, 0, 1, 0, 9, 3, 2, 0, 0},
	7: {0, 0, 8, 0, 0, 0, 0, 0, 0},
	8: {0, 4, 0, 0, 7, 8, 5, 9, 1},
		}
 */
		
/*  tabuleiro = [][]int{
	0: {0, 0, 0, 0, 0, 0, 0, 0, 0},
	1: {0, 0, 0, 0, 0, 0, 0, 0, 0},
	2: {0, 0, 0, 0, 0, 0, 0, 0, 0},
	3: {0, 0, 0, 0, 0, 0, 0, 0, 0},
	4: {0, 0, 0, 0, 0, 0, 0, 0, 0},
	5: {0, 0, 0, 0, 0, 0, 0, 0, 0},
	6: {0, 0, 0, 0, 0, 0, 0, 0, 0},
	7: {0, 0, 0, 0, 0, 0, 0, 0, 0},
	8: {0, 0, 0, 0, 0, 0, 0, 0, 0},
		} */





