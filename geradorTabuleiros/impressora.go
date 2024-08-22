package main

import (
	"fmt"
	"time"
)

// função para imprimir o tabuleiro
func imprimeTabuleiro(tabuleiro [][]int) {
	for linha := 0; linha < 9; linha++ {
		if linha == 0 || linha == 3 || linha == 6 {
			fmt.Println(" *-------*-------*-------*")
		}
		for coluna := 0; coluna < 9; coluna++ {
			if coluna == 0 || coluna == 3 || coluna == 6 {
				fmt.Printf(" | %d", tabuleiro[linha][coluna])
			} else if coluna == 8 {
				fmt.Printf(" %d |\n", tabuleiro[linha][coluna])
			} else {
				fmt.Printf(" %d", tabuleiro[linha][coluna])
			}
	}
}
	fmt.Println(" *-------*-------*-------*")
}

func imprimeDemoraEmSegundos() {
	fmt.Printf("Aguarde, processando: ")
	tempo := 0
	for {
		tempo ++
		time.Sleep(1 * time.Second)
		fmt.Printf(" %d", tempo)
	}
}
