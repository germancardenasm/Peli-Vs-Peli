// Al finalizarse de cargar el DOM:
$(function() {
	var competenciasController = new CompetenciasController();
	// Se obtienen y cargan los géneros, directores/as y actores/actrices en los elementos select
	competenciasController.cargarGeneros();
	competenciasController.cargarDirectores();
	competenciasController.cargarActores();

	// al crear una competencia solo permite que se seleccione una opcion actor o genero o director
	$("#genero").change(function(){
		$("#actor").attr("disabled", "disabled").css('background-color','gray');
		$("#director").attr("disabled", "disabled").css('background-color','gray');
	})

	$("#director").change(function(){
		$("#actor").attr("disabled", "disabled").css('background-color','gray');
		$("#genero").attr("disabled", "disabled").css('background-color','gray');
	})

	$("#actor").change(function(){
		$("#genero").attr("disabled", "disabled").css('background-color','gray');
		$("#director").attr("disabled", "disabled").css('background-color','gray');
	})
	
	// Al enviarse el formulario, se debe ejecutar un POST al servidor
	$("#formCompetencia").ajaxForm({url: server + '/competencias', type: 'post',
		// En caso de éxito, se redirige a index.html
		success: function(res) {
			window.location.replace("./index.html?exito=True");
		},
		// En caso de error por validación, se muestra el mensaje de error en el contenedor para tal fin
		error: function(response, status, xhr) {
			if (response.status == 422){
				$("#mensajeDeError").text(response.responseText);
			}
		}
	});
	// Si el usuario cancela, se redirige a index.html
	$(".cancelar").click(function(){
		window.location.replace("./index.html");
	});
});
