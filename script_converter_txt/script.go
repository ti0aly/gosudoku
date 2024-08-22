package main

import (
	"os"
	"bufio"
)

func main () {
	arquivo := "armazenaTabuleiros.txt"
	file, _ := os.Open(arquivo)
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		linha := scanner.Text()
		converte(linha)
	}

}

func converte(texto string) {
	corta_inicio := texto[7:len(texto)-3]
	var novaString string
	for i:=0; i<len(corta_inicio); i++ {
		if corta_inicio[i:i+1] == "{" {
			novaString+= "["
		} else if corta_inicio[i:i+1] == "}" {
			novaString+= "]"
		} else {novaString+= corta_inicio[i:i+1]}
	}
	novaString+= "]\n"
	guardaVetor(novaString)

}

func guardaVetor(novaString string) {
	caminhoArquivo := "armazenaTabuleirosJavaScript.txt"
	file, _ := os.OpenFile(caminhoArquivo, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	defer file.Close()
	file.WriteString(novaString)
}

