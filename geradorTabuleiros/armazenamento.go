package main

import (
	"os"
	"strconv"
)

func guardaVetor(tabuleiro [][]int) {
	caminhoArquivo := "armazenaTabuleiros.txt"
	file, _ := os.OpenFile(caminhoArquivo, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	defer file.Close()
	file.WriteString("[][]int{")
	for linha := 0; linha < 9; linha++ {
		file.WriteString("{")
		for coluna := 0; coluna < 9; coluna ++ {
			numero := strconv.Itoa(tabuleiro[linha][coluna])
			if coluna == 8 {
				file.WriteString(numero + "}, ")
			} else {file.WriteString(numero + ", ") }
		}
	}	
	file.WriteString("}\n")
	
}

