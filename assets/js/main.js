var map2 = [
    "H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H",
    "H* *           * * *             * *   *H",
    "H* *             W                 *   *H",
    "H*                           *     *   *H",
    "H*         *                       *   *H",
    "H*   * * * *             *         *   *H",
    "H*     *     * *       *   *       *   *H",
    "H*   * I o   * *         *   * * * *   *H",
    "H*     *     * *   * *  **           I *H",
    "H*   *          *        *         * * *H",
    "H*           * ***   *   *     *   * * *H",
    "H*       *      *        * *       * * *H",
    "H*     * *             ***         * * *H",
    "H* *   *           *     *         *   *H",
    "H*     *   *      *      *     *       *H",
    "H* *        *     *      *         *   *H",
    "H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H"];

var  map3 = [
    "*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*",
    "* *                                 *             * * * *",
    "* *   *                             *       *       * * *",
    "*   *   *            *              *     * *     *     *",
    "*         *           * *           * * *       *   *   *",
    "*     * *       *           *       *   *     *     *   *",
    "*   *                       *       *   *   *       *   *",
    "* *                             *   *   I          W* * *",
    "* *              **     * *                             *",
    "* *             *     I           *                     *",
    "*               *   *         *                     *   *",
    "*   *   *     *       *   *                             *",
    "*     *                             *                   *",
    "*       * *        *    *   *     * * *           *     *",
    "*       * *                         *     *       *     *",
    "* *             *       *       *                       *",
    "*       *     *       *   * *     *     *   * *         *",
    "*     *           *  o*   * *   *   *       * * *       *",
    "* * *      *          * *         *   *             * * *",
    "*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*"];

var map4 = [
    "*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H",
    "* * * * * * * * * * *                                          H",
    "*       *  *  *       * *                                W*    H",
    "*               *     * * *           *                   I    H",
    "* *       *               * *                                  H",
    "*    *    * *   I           * *         *   *                  H",
    "*                   ****      * * * *   *     *         *      H",
    "*         *                 *           *   *                  H",
    "*       *                 *   *                                H",
    "*         *   *         *       *   *                          H",
    "*             *         *                                      H",
    "* *                ** *                                   *    H",
    "*                **         * *                                H",
    "*  **   *   *  **                     * *                 * *  H",
    "* *   *   *   *       * *                   * *           * *  H",
    "*                                         *   *                H",
    "*               *     *               ***   * *                H",
    "*             *               *                                H",
    "*                       *         * *                          H",
    "*o  *       *           *       * *                           *H",
    "* * *           *                                         *    H",
    "* * * *                                  *                *    H",
    "*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H*H"];

var map5 = [
    "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
    "H*   o       * **  ** *                                  *****   H",
    "H   *                                                        *   H",
    "H   *           **                                           *   H",
    "H  ** **************         **             ****             *   H",
    "H  **          *           * *                              I*  *H",
    "H  **                                        *                   H",
    "H  *****************                         ****                H",
    "H      *************                                             H",
    "H    ***************   *   W                                     H",
    "H           ** **      **  **                                    H",
    "H                     *    **                                    H",
    "H *                  *******                                     H",
    "H  *****            **                                      W    H",
    "H  ***        **  **          *                            ***   H",
    "H****************************************************************H",
    "H  I  **       *           * *                             ***   H",
    "H*            *                    ** * * * *       *      ***   H",
    "H              *        *                           *       *    H",
    "H   *                  ** *                         *    W       H",
    "H*  **                  *           *             *              H",
    "H*  ****                   *                 *    *          *** H",
    "H*  *******                *                ****  **             H",
    "H*  ****                  **                ***   ****           H",
    "H*  ***       *         W                   *****     *******    H",
    "H**  *        **    *                        ***  ***********    H",
    "H**    **                                    ****************    H",
    "H**     ** *****       *  *****                 **               H",
    "H          *    * ** **    ****                   *              H",
    "H** W****************    * ****                    *      *******H",
    "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"];

var map6 = [
    "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
    "H                               W                     W         H",
    "H        *                                       *              H",
    "H  *                    *                            *          H",
    "H                                             *                 H",
    "H                                                 *        *    H",
    "H  *                         W            *         *           H",
    "H         *                                    *            *   H",
    "H                                     *                      *  H",
    "H                                          *                  I H",
    "H        *                             *                       WH",
    "H *            *       *                                        H",
    "H                                                               H",
    "H                                                  *            H",
    "H   *               **W*************W********             *     H",
    "H         *         *                       *                   H",
    "H                   *   ******W**********   *                  *H",
    "H                   *   *               *   *       *           H",
    "H                   *   *   **********  *   W                   H",
    "H                   *   W   *        *  *   *                   H",
    "H        *          *   *   *        I  *   *                   H",
    "H  *                *   *   ******** *  *   *    W              H",
    "H                   *   *            *  W   *        *          H",
    "H                   *   **************  *   W               *** H",
    "H         *         *                   *   *               **  H",
    "H    *              *********************   *        *          H",
    "H         *                                 *        *        W H",
    "H *                                         *        *        * H",
    "H     *       ***W*********W****W****W*******        *******  * H",
    "Ho *                                                            H",
    "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"];

var map1 =[
    "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
    "H                                               H",
    "H                                               H",
    "H      **o        ***                **W        H",
    "H                 ***                 *         H",
    "H                 *              *              H",
    "H                 *                     *       H",
    "H    *  *                     *   *     *       H",
    "H     * *                    **** *             H",
    "H     *                                 *       H",
    "H                                      **       H",
    "H                       **            **        H",
    "H                         *                     H",
    "H             ** *       ***                    H",
    "H             ***                               H",
    "H             **                  **            H",
    "H      **                         **            H",
    "H      **                         *             H",
    "H        *            **                        H",
    "H                    ***                        H",
    "H                   * **                        H",
    "H                                               H",
    "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"];

var mapas = [map1, map2, map3, map4, map5, map6];
var mapa = mapas[0];

var celdas = new Array(mapa.length);
for (var i = 0 ; i<mapa.length ; i++)
{
    celdas[i] = new Array(mapa[0].length);    
}
var tablero = $("#tablero");
function crearTablero(nFilas, nColumnas)
{
    tablero.empty();
    for(var i = 0; i < nFilas; i++)
    {
        var fila = $("<tr></tr>");
        for(var j = 0; j < nColumnas; j++)
        {
            var columna = $("<td></td>");
            if(mapa[i][j] == "*")
            {
                columna.addClass("pared");
            }
            else if(mapa[i][j] == "H" || mapa[i][j] == " ")
            {
                columna.addClass("vacio");
            }
            else if(mapa[i][j] == "o")
            {
                columna.addClass("inicio");
                actual = {x:i, y:j, direccion:"arriba"};
            }
            else if(mapa[i][j] == "I")
            {
                columna.addClass("portal");
            }
            else if(mapa[i][j] == "W")
            {
                columna.addClass("fin");
            }
            fila.append(columna);
            celdas[i][j] = columna;
        }
        tablero.append(fila);
    }
}
var btn2 = $("<button></button>");
btn2.text("Menú");
btn2.click(function()
    {
        cont = 0;
        menu.removeClass();
        menu.addClass("textIns");
        tablero.empty();
	});
var cont = 0;
$(document).keydown(mover);
function mover(e)
{
    e.preventDefault();
    var x = actual.x;
    var y = actual.y;
    var xInicio = x;
    var yInicio = y;
    var direccion = actual.direccion;
    var siguiente;
    if(e.keyCode == 38) //arriba
    {
        siguiente = mapa[x-1][y];
        if(siguiente == "H")
        {
            crearTablero(mapa.length, mapa[0].length);
            tablero.append(btn2);
        }
        if(siguiente == "W")
        {
            alert("Ganaste. Juego terminado");
            cont++;
            mapa = mapas[cont];
            crearTablero(mapa.length, mapa[0].length);
            tablero.append(btn2);
            return;
        }
        else if(siguiente == " " || siguiente == "o")
        {
            celdas[x][y].removeClass();
            celdas[x][y].addClass("vacio");
            actual.x = x-1;
            celdas[actual.x][y].removeClass();
            celdas[actual.x][y].addClass("imagen");
        }
        else if(siguiente == "*" || siguiente == "H")
        {
            clearTimeout(t);
            return;
        }
    }
    else if(e.keyCode == 39) //derecha
    {
        siguiente = mapa[x][y+1];
        if(siguiente == "H")
        {
            crearTablero(mapa.length, mapa[0].length);
            tablero.append(btn2);
        }
        if(siguiente == "W")
        {
            alert("Ganaste. Juego terminado");
            cont++;
            mapa = mapas[cont];
            crearTablero(mapa.length, mapa[0].length);
            tablero.append(btn2);
            return;
        }
        else if(siguiente == " " || siguiente == "o")
        {
            celdas[x][y].removeClass();
            celdas[x][y].addClass("vacio");
            actual.y = y+1;
            celdas[x][actual.y].removeClass();
            celdas[x][actual.y].addClass("imagen");
        }
        else if(siguiente == "I")
        {
            var bandera = false;
            celdas[x][y].removeClass();
            celdas[x][y].addClass("vacio");
            for(var i in celdas)
            {
                for(var j in celdas[0])
                {
                    if(mapa[i][j] == "I")
                    {
                        actual.x = i;
                        j = parseInt(j) + 1;
                        actual.y = j;
                        bandera = true;
                        break;
                    }
                }
                if(bandera)
                {
                    break;
                }
            }
            celdas[actual.x][actual.y].removeClass();
            celdas[actual.x][actual.y].addClass("imagen");
        }
        else if(siguiente == "*" || siguiente == "H")
        {
            clearTimeout(t);
            return;
        }
    }
    else if(e.keyCode == 40) //abajo
    {
        siguiente = mapa[x+1][y];
        if(siguiente == "H")
        {
            crearTablero(mapa.length, mapa[0].length);
            tablero.append(btn2);
        }
        if(siguiente == "W")
        {
            alert("Ganaste. Juego terminado");
            cont++;
            mapa = mapas[cont];
            crearTablero(mapa.length, mapa[0].length);
            tablero.append(btn2);
            return;
        }
        else if(siguiente == " " || siguiente == "o")
        {
            celdas[x][y].removeClass();
            celdas[x][y].addClass("vacio");
            actual.x = x+1;
            celdas[actual.x][y].removeClass();
            celdas[actual.x][y].addClass("imagen");
        }
        else if(siguiente == "*" || siguiente == "H")
        {
            clearTimeout(t);
            return;
        }
    }
    if(e.keyCode == 37) //izquierda
    {
        siguiente = mapa[x][y-1]; 
        if(siguiente == "H")
        {
            crearTablero(mapa.length, mapa[0].length);
            tablero.append(btn2);
        }
        if(siguiente == "W")
        {
            alert("Ganaste. Juego terminado");
            cont++;
            mapa = mapas[cont];
            crearTablero(mapa.length, mapa[0].length);
            tablero.append(btn2);
            return;
        }
        else if(siguiente == " " || siguiente == "o")
        {
            celdas[x][y].removeClass();
            celdas[x][y].addClass("vacio");
            actual.y = y-1;
            celdas[x][actual.y].removeClass();
            celdas[x][actual.y].addClass("imagen");
        }
        else if(siguiente == "*" || siguiente == "H")
        {
            clearTimeout(t);
            return;
        }
        else if(siguiente == "I")
        {
            var bandera = false;
            celdas[x][y].removeClass();
            celdas[x][y].addClass("vacio");
            for(var i in celdas)
            {
                for(var j in celdas[0])
                {
                    if(mapa[i][j] == "I" && j != y - 1)
                    {
                        actual.x = i;
                        j = parseInt(j) - 1;
                        actual.y = j;
                        bandera = true;
                        break;
                    }
                }
                if(bandera)
                {
                    break;
                }
            }
            celdas[actual.x][actual.y].removeClass();
            celdas[actual.x][actual.y].addClass("imagen");
        }
    }
    t = setTimeout(function(){mover(e)}, 100);
}
//Jugar
var menu = $("#menu");
var btnJugar = $("#start-button");
btnJugar.click(function(e)
{
    e.preventDefault();
    mapa = mapas[cont];
    menu.removeClass();
    menu.addClass("ocultar");
    crearTablero(mapa.length, mapa[0].length);
	tablero.append(btn2);
});
// Instrucciones del juego
var btnInstrucciones = $("#instrucciones");
btnInstrucciones.click(function(e)
{
	e.preventDefault();
    menu.removeClass();
	menu.addClass("ocultar");
	var abrirText = $("#texto");
	var title = $("<h4></h4>");
    title.text("Instrucciones");
	var text = $("<p></p>");
    text.text("Trata de encontrar la salida, guía al carrito con las teclas arriba, abajo, izquierda y derecha del teclado. El carrito continuará su camino hasta que choque con una casita, si choca los bordes pierdes. Pasa al siguiente nivel cuando ganas. Diviértete!");
	abrirText.append(title);
	abrirText.append(text);
	abrirText.addClass("textIns");
	var btn = $("<button></button>");
    btn.text("Menú");
	abrirText.append(btn);
	btn.click(function()
    {
        abrirText.removeClass();
        abrirText.addClass("ocultar");
        menu.removeClass("ocultar");
		menu.addClass("textIns");
        abrirText.empty();
	});
});
// Créditos
var creditos = $("#creditos");
creditos.click(function(e)
{
	e.preventDefault();
    menu.removeClass();
	menu.addClass("ocultar");
	var abrirCredit = $("#textCreditos");
	var title = $("<h4></h4>");
    title.text("Créditos");
	var text = $("<p></p>");
    text.text("ELABORADO POR: Gabriela Paredes Paredes y Abigail De La Flor Yucra.");
	abrirCredit.append(title);
	abrirCredit.append(text);
	abrirCredit.addClass("textIns");
	var btn = $("<button></button>");
    btn.text("Menú");
	abrirCredit.append(btn);
	btn.click(function()
    {
        abrirCredit.removeClass();
        abrirCredit.addClass("ocultar");
        menu.removeClass();
		menu.addClass("textIns");
        abrirCredit.empty();
	});
});