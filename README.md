Ilumina Gulp SpellChecker
--------------------------

Gulp task for spellchecker.
Revisa la ortografía de archivos html en la carpeta destino, por defecto `dist/`.
Convierte los html en texto. Analiza el texto buscando errores. Agrega sugerencias de escritura. Guarda los textos modificados en `dist-spellchecker/` además de mostrar los posibles errores en la consola.

**Require:**

**aspell**
`brew install aspell`

**Instalar un diccionario en español:**
Descarga el diccionario de:
ftp://ftp.gnu.org/gnu/aspell/dict/0index.html

Descomprime y dentro del directorio encontrarás las instrucciones de instalación.
Básicamente son:
`$ ./configure`
`$ make`
`$ make install`

**Configurar palabras personalizadas:**
Guarda este [archivo](https://gist.githubusercontent.com/josjac/0215e33fc302ee233eba4153fbb53d9e/raw/fdd7aa5935c4de49dfc94565534dfb66f477372c/.aspell.es.pws) en tu directorio de usuario con el nombre `.aspell.es.pws`:
https://gist.githubusercontent.com/josjac/0215e33fc302ee233eba4153fbb53d9e/raw/fdd7aa5935c4de49dfc94565534dfb66f477372c/.aspell.es.pws