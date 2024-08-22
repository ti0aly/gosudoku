/* package main

import (
	"os"
	"strconv"
)

func main() {
	caminhoArquivo := "gerahtmlbotoes.txt"
	file, _ := os.OpenFile(caminhoArquivo, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	defer file.Close()

	for i:=1;i<=81;i++{
		file.WriteString("<div class=\"grid-item\"><input type=\"text\" maxlength=\"1\" value=\""+strconv.Itoa(i)+"\"></div>\n")
	}


}
	*/