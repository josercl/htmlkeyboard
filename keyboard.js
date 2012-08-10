var language="ES";

var shiftPressed=false;
var altGrPressed=false;

var teclas;
var input=null;

function toggleShift(){
	shiftPressed=!shiftPressed;
	for(i=0;i<teclas.length;i++){
		if(shiftPressed){
			if($(teclas[i]).attr("rel")!=""){
				$(teclas[i]).html($(teclas[i]).attr("rel"));
			}else{
				if(changes($(teclas[i]))){
					$(teclas[i]).html($(teclas[i]).html().toUpperCase());
				}
			}
		}else{
			if(changes($(teclas[i]))){
				$(teclas[i]).html($(teclas[i]).attr("value").toLowerCase());
			}
		}
	}	
}

function toggleAlt(){
	altGrPressed=!altGrPressed;
	for(i=0;i<teclas.length;i++){
		if(altGrPressed){
			if($(teclas[i]).attr("name")!=""){
				$(teclas[i]).html($(teclas[i]).attr("name"));
			}else{
				$(teclas[i]).html("");
			}
		}else{
			if(changes($(teclas[i]))){
				$(teclas[i]).html($(teclas[i]).attr("value"));
			}
		}
	}	
}

function setupKeys(){
	for(i=0;i<teclas.length;i++){
	
		$(teclas[i]).attr("value",$(teclas[i]).html());
		
		if(changes($(teclas[i]))){
			$(teclas[i]).attr("value",$(teclas[i]).attr("value").toLowerCase());
			$(teclas[i]).html($(teclas[i]).attr("value"));
			$(teclas[i]).click(function(){
				writeChar($(this).text());
			});
			
		}
	}

	$("#backspace").click(function(){
		erase();
	});

	$("#enter").click(function(){
		writeChar('\r');
	});

	if($("#enter2")){
		$("#enter2").click(function(){
			$("#enter").click();
		});

		$("#enter2").hover(function(){$("#enter").addClass("hover");},function(){$("#enter").removeClass("hover");});

		$("#enter").hover(function(){$("#enter2").addClass("hover");},function(){$("#enter2").removeClass("hover");});
	}
	
	$("#espacio").click(function(){
		writeChar(' ');
	});

	$("#ocultarTeclado").click(function(){
		hideKeyboard();
	});
}

function changes(tecla){
	t=$(tecla).attr("rel").toLowerCase();
	return (t!="shift" && t!="ctrl" && t!="int" &&	t!="caps" &&t!="alt" && t!="&nbsp;" && $(tecla).html()!="&nbsp;" &&
		$(tecla).attr("id")!="enter" && $(tecla).attr("id")!="backspace" && $(tecla).attr("id")!="espacio");
}

function hideKeyboard(){
	$("#tecladowrapper").slideUp("normal");
}

function showKeyboard(){
	$("#tecladowrapper").slideDown("normal");
}

function writeChar(character){
	$(input).val($(input).val()+character);
}

function erase(){
	$(input).attr("value",$(input).attr("value").substring(0,input.value.length-1));
}

function prepareInputs(){
	var areas=jQuery.makeArray($("textarea"));
	var texts=jQuery.makeArray($(":text"));
	todos=areas.concat(texts);
	total=todos.length;
	for(i=0;i<total;i++){
		$(todos[i]).focus(function(){
			input=this;
			showKeyboard();
		});
	}
}

var keyboard_pre='<div id="tecladowrapper"><a href="javascript: void(0)" id="langswitch"></a><a href="javascript: void(0)" id="ocultarTeclado">Hide</a>';
var keyboard_post='</div>';

var keyboardcode_ES=keyboard_pre+'<div id="teclado"><div id="letras"><div class="fila"><a href="javascript: void(0)" rel="&ordf;" name="\\">&ordm;</a><a href="javascript: void(0)"	rel="!" name="|">1</a><a href="javascript: void(0)" rel="&quot;" name="@">2</a><a href="javascript: void(0)" rel="&middot" name="#">3</a><a href="javascript: void(0)" rel="$" name="~">4</a><a href="javascript: void(0)" rel="%">5</a><a href="javascript: void(0)" rel="&" name="&not;">6</a><a href="javascript: void(0)" rel="/">7</a><a href="javascript: void(0)" rel="(">8</a><a href="javascript: void(0)" rel=")">9</a><a href="javascript: void(0)" rel="=">0</a><a href="javascript: void(0)" rel="?">\'</a><a href="javascript: void(0)" rel="&iquest;">&iexcl;</a><a href="javascript: void(0)" class="dos" id="backspace" rel="&larr;" name="&larr;">&larr;</a></div><div class="fila"><a href="javascript: void(0)" class="unoymedio" id="tab">&larr;<br>&rarr;</a><a href="javascript: void(0)">Q</a><a href="javascript: void(0)">W</a><a href="javascript: void(0)" name="&euro;">E</a><a href="javascript: void(0)">R</a><a href="javascript: void(0)">T</a><a href="javascript: void(0)">Y</a><a href="javascript: void(0)">U</a><a href="javascript: void(0)">I</a><a href="javascript: void(0)">O</a><a href="javascript: void(0)">P</a><a href="javascript: void(0)" rel="^" name="[">`</a><a href="javascript: void(0)" rel="*" name="]">+</a><a href="javascript: void(0)" class="unoymedio" id="enter" rel="&#8629;" name="&#8629;">&#8629;</a><p></p><a href="javascript: void(0)" class="dos" id="caps" rel="Caps" name="Caps">Caps</a><a href="javascript: void(0)">A</a><a href="javascript: void(0)">S</a><a href="javascript: void(0)">D</a><a href="javascript: void(0)">F</a><a href="javascript: void(0)">G</a><a href="javascript: void(0)">H</a><a href="javascript: void(0)">J</a><a href="javascript: void(0)">K</a><a href="javascript: void(0)">L</a><a href="javascript: void(0)">&Ntilde;</a><a href="javascript: void(0)" rel="&uml;" name="{">&acute;</a><a href="javascript: void(0)" rel="&Ccedil;" name="}">&ccedil;</a><a href="javascript: void(0)" class="enterespecial" id="enter2">&nbsp;</a></div><div class="fila"><a href="javascript: void(0)" class="unoymedio" onClick="toggleShift()" rel="Shift" name="Shift">Shift</a><a href="javascript: void(0)" rel="&gt;">&lt;</a><a href="javascript: void(0)">Z</a><a href="javascript: void(0)">X</a><a href="javascript: void(0)">C</a><a href="javascript: void(0)">V</a><a href="javascript: void(0)">B</a><a href="javascript: void(0)">N</a><a href="javascript: void(0)">M</a><a href="javascript: void(0)" rel=";">,</a><a href="javascript: void(0)" rel=":">.</a><a href="javascript: void(0)" rel="_">-</a><a href="javascript: void(0)" class="dosymedio" onClick="toggleShift()" rel="Shift" name="Shift">Shift</a></div><div class="fila"><a href="javascript: void(0)" class="unoymedio" rel="Ctrl" name="Ctrl">Ctrl</a><a href="javascript: void(0)" class="unoymedio">&nbsp;</a><a href="javascript: void(0)" class="unoymedio">&nbsp;</a><a href="javascript: void(0)" class="seis" id="espacio">&nbsp;</a><a href="javascript: void(0)" class="unoymedio" onClick="toggleAlt()" rel="Alt" name="Alt">Alt</a><a href="javascript: void(0)" class="unoymedio">&nbsp;</a><a href="javascript: void(0)" class="unoymedio" rel="Ctrl" name="Ctrl">Ctrl</a></div></div><div id="numpad"><div class="fila">	<a href="javascript: void(0)">&nbsp;</a><a href="javascript: void(0)">/</a><a href="javascript: void(0)">*</a><a href="javascript: void(0)">-</a></div><div class="fila"><div><div class="fila"><a href="javascript: void(0)">7</a><a href="javascript: void(0)">8</a><a href="javascript: void(0)">9</a></div><div class="fila"><a href="javascript: void(0)">4</a><a href="javascript: void(0)">5</a><a href="javascript: void(0)">6</a></div></div><div><a href="javascript: void(0)" class="dosfilas">+</a></div></div><div class="fila"><div><div class="fila"><a href="javascript: void(0)">1</a><a href="javascript: void(0)">2</a><a href="javascript: void(0)">3</a></div><div class="fila"><a href="javascript: void(0)" class="dos">0</a><a href="javascript: void(0)">.</a></div></div><div><a href="javascript: void(0)" class="dosfilas" rel="Int" name="Int">Int</a></div></div></div></div>'+keyboard_post;
$(document).ready(function() {
	$("body").append(eval("keyboardcode_"+language));
	teclas=$("#teclado a");
   prepareInputs();
	setupKeys();
});