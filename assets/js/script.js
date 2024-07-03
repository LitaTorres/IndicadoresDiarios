//Gráfico Dolares
$(document).ready(function(){

$("#grafico").hide();

var dataPoints = [] 
var options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "USD - Peso Chileno"
        },
        axisX: {
            valueFormatString: "DD MMM YYYY",
        },
        axisY: {
            title: "USD",
            titleFontSize: 24,
        },
        data: [{
            type: "spline",
            dataPoints: dataPoints,
            color: "#F08080",
        }]
    };

    $.ajax({
        type:"GET",
        url:"https://mindicador.cl/api/dolar",
        dataType:"json",
        success: function(datos) {
            let datosApi = datos.serie;
            for(var i = 0; i < datosApi.length; i++) { 
                dataPoints.push({ 
                    x: new Date(datosApi[i].fecha), 
                    y: datosApi[i].valor, 
            });
        }
        $("#chartContainerDolar").CanvasJSChart(options);
    },
    error: function(error) {
        console.log(error)
    }
});

    $("#chartContainerDolar").on("click", function() {
        $("#grafico").fadeIn();
        $("#chartContainerAmpliado").CanvasJSChart(options);
    });

    $("#cerrarGrafico").on("click", function() {
        $("#grafico").fadeOut();
    });
});


//Gráfico Euro
$(document).ready(function(){

var dataPoints = [] 
var options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "EURO - Peso Chileno"
        },
        axisX: {
            valueFormatString: "DD MMM YYYY",
        },
        axisY: {
            title: "EURO",
            titleFontSize: 24,
        },
        data: [{
            type: "spline",
            dataPoints: dataPoints,
            color: "#4e9f3d"
        }]
    };

    $.ajax({
        type:"GET",
        url:"https://mindicador.cl/api/euro",
        dataType:"json",
        success: function(datos) {
            let datosApi = datos.serie;
            for(var i = 0; i < datosApi.length; i++) {
                dataPoints.push({
                    x: new Date(datosApi[i].fecha),
                    y: datosApi[i].valor,
            })
        }
        $("#chartContainerEuro").CanvasJSChart(options);
    },
    error: function(error) {
        console.log(error)
    }
});

    $("#chartContainerEuro").on("click", function(){
        $("#grafico").fadeIn();
        $("#chartContainerAmpliado").CanvasJSChart(options);
    })

    $("#cerrarGrafico").on("click", function(){
        $("#grafico").fadeOut();
    })

});

//Gráfico uf
$(document).ready(function(){

    var dataPoints = []
    var options = {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: "UF - Peso Chileno"
            },
            axisX: {
                valueFormatString: "DD MMM YYYY",
            },
            axisY: {
                title: "UF",
                titleFontSize: 24,
            },
            data: [{
                type: "spline",
                dataPoints: dataPoints,
                color: "#7f4ca5",
            }]
        };
    
        $.ajax({
            type:"GET",
            url:"https://mindicador.cl/api/uf",
            dataType:"json",
            success: function(datos) {
                let datosApi = datos.serie;
                for(var i = 0; i < datosApi.length; i++) {
                    dataPoints.push({ //
                        x: new Date(datosApi[i].fecha), 
                        y: datosApi[i].valor, 
                });
            }
            $("#chartContainerUF").CanvasJSChart(options); 
        },
        error: function(error) {
            console.log(error)
        }
    });
    
        $("#chartContainerUF").on("click", function() {
            $("#grafico").fadeIn();
            $("#chartContainerAmpliado").CanvasJSChart(options);
        });
    
        $("#cerrarGrafico").on("click", function() {
            $("#grafico").fadeOut();
        });
    });
    

//Gráfico UTM
$(document).ready(function(){

var dataPoints = [] 
var options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "UTM - Peso Chileno"
        },
        axisX: {
            valueFormatString: "DD MMM YYYY",
        },
        axisY: {
            title: "UTM",
            titleFontSize: 24,
        },
        data: [{
            type: "spline",
            dataPoints: dataPoints,
            color: "#1a3c7d"
        }]
    };

    $.ajax({
        type:"GET",
        url:"https://mindicador.cl/api/utm",
        dataType:"json",
        success: function(datos) {
            let datosApi = datos.serie;
            for(var i = 0; i < datosApi.length; i++) {
                dataPoints.push({ 
                    x: new Date(datosApi[i].fecha), 
                    y: datosApi[i].valor, 
            })
        }
        $("#chartContainerUTM").CanvasJSChart(options);
    },
    error: function(error) {
        console.log(error)
    }
});

$("#chartContainerUTM").on("click", function(){
    $("#grafico").fadeIn()
    $("#chartContainerAmpliado").CanvasJSChart(options)
})

$("#cerrarGrafico").on("click", function(){
    $("chartContainerAmpliado").fadeOut();
})
});