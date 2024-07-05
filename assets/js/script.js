//Gráfico Dolares
$(document).ready(function () {

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
            color: "#d74242",
        }]
    };

    $.ajax({
        type: "GET",
        url: "https://mindicador.cl/api/dolar",
        dataType: "json",
        success: function (datos) {
            let datosApi = datos.serie;
            for (var i = 0; i < datosApi.length; i++) {
                dataPoints.push({
                    x: new Date(datosApi[i].fecha),
                    y: datosApi[i].valor,
                });
            }
            $("#chartContainerDolar").CanvasJSChart(options);
        },
        error: function (error) {
            console.log(error)
        }
    });

    $("#chartContainerDolar").on("click", function () {
        $("#grafico").fadeIn();
        $("#chartContainerAmpliado").CanvasJSChart(options);
    });

    $("#cerrarGrafico").on("click", function () {
        $("#grafico").fadeOut();
    });
});


//Gráfico Euro
$(document).ready(function () {

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
        type: "GET",
        url: "https://mindicador.cl/api/euro",
        dataType: "json",
        success: function (datos) {
            let datosApi = datos.serie;
            for (var i = 0; i < datosApi.length; i++) {
                dataPoints.push({
                    x: new Date(datosApi[i].fecha),
                    y: datosApi[i].valor,
                })
            }
            $("#chartContainerEuro").CanvasJSChart(options);
        },
        error: function (error) {
            console.log(error)
        }
    });

    $("#chartContainerEuro").on("click", function () {
        $("#grafico").fadeIn();
        $("#chartContainerAmpliado").CanvasJSChart(options);
    })

    $("#cerrarGrafico").on("click", function () {
        $("#grafico").fadeOut();
    })

});

//Gráfico uf
$(document).ready(function () {

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
        type: "GET",
        url: "https://mindicador.cl/api/uf",
        dataType: "json",
        success: function (datos) {
            let datosApi = datos.serie;
            for (var i = 0; i < datosApi.length; i++) {
                dataPoints.push({ //
                    x: new Date(datosApi[i].fecha),
                    y: datosApi[i].valor,
                });
            }
            $("#chartContainerUF").CanvasJSChart(options);
        },
        error: function (error) {
            console.log(error)
        }
    });

    $("#chartContainerUF").on("click", function () {
        $("#grafico").fadeIn();
        $("#chartContainerAmpliado").CanvasJSChart(options);
    });

    $("#cerrarGrafico").on("click", function () {
        $("#grafico").fadeOut();
    });
});


//Gráfico UTM
$(document).ready(function () {

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
        type: "GET",
        url: "https://mindicador.cl/api/utm",
        dataType: "json",
        success: function (datos) {
            let datosApi = datos.serie;
            for (var i = 0; i < datosApi.length; i++) {
                dataPoints.push({
                    x: new Date(datosApi[i].fecha),
                    y: datosApi[i].valor,
                })
            }
            $("#chartContainerUTM").CanvasJSChart(options);
        },
        error: function (error) {
            console.log(error)
        }
    });

    $("#chartContainerUTM").on("click", function () {
        $("#grafico").fadeIn()
        $("#chartContainerAmpliado").CanvasJSChart(options)
    })

    $("#cerrarGrafico").on("click", function () {
        $("chartContainerAmpliado").fadeOut();
    })
});

// Convertidor dolares-peso chileno
$(document).ready(function () {

    var valorDolarActual = 0;

    $.ajax({
        type: "GET",
        url: "https://mindicador.cl/api/dolar",
        dataType: "json",
        success: function (datos) {
            valorDolarActual = datos.serie[0].valor;
            console.log(valorDolarActual)
        },
        error: function (error) {
            console.log(error)
        }

    });

    var convertirDolar = document.getElementById("btn-convertir-dolar");

    convertirDolar.addEventListener("click", function () {
        let valor1dolar = document.getElementById("valor1dolar");
        let valor2dolar = document.getElementById("valor2dolar");
        let resultado = 0;

        valor1dolar = parseFloat(valor1dolar.value);
        valor2dolar = parseFloat(valor2dolar.value);

        if (!isNaN(valor1dolar) && valor1dolar > 0) {
            resultado = valor1dolar * valorDolarActual;
            document.querySelector(".resultado-dolar").innerHTML = `${valor1dolar} USD = ${resultado.toFixed(2)} CLP`
        } else if (!isNaN(valor2dolar) && valor2dolar > 0) {
            resultado = valor2dolar / valorDolarActual;
            document.querySelector(".resultado-dolar").innerHTML = `${valor2dolar} CLP = ${resultado.toFixed(2)} USD`
        } else {
            document.querySelector(".resultado-dolar").innerHTML = "Favor ingresar valores válidos";
        }

        document.getElementById("valor1dolar").value = "";
        document.getElementById("valor2dolar").value = "";

    });
});


// Convertidor euro-peso chileno
$(document).ready(function () {

    var valorEuroActual = 0;

    $.ajax({
        type: "GET",
        url: "https://mindicador.cl/api/euro",
        dataType: "json",
        success: function (datos) {
            valorEuroActual = datos.serie[0].valor;
            console.log(valorEuroActual)
        },
        error: function (error) {
            console.log(error)
        }
    });

    var convertirEuro = document.getElementById("btn-convertir-euro");

    convertirEuro.addEventListener("click", function () {
        let valor1euro = document.getElementById("valor1euro");
        let valor2euro = document.getElementById("valor2euro");
        let resultado = 0;

        valor1euro = parseFloat(valor1euro.value);
        valor2euro = parseFloat(valor2euro.value);

        if (!isNaN(valor1euro) && valor1euro > 0) {
            resultado = valor1euro * valorEuroActual;
            document.querySelector(".resultado-euro").innerHTML = `${valor1euro} EUR = ${resultado.toFixed(2)} CLP`
        } else if (!isNaN(valor2dolar) && valor2dolar > 0) {
            resultado = valor2dolar / valorEuroActual;
            document.querySelector(".resultado-euro").innerHTML = `${valor2euro} CLP = ${resultado.toFixed(2)} EUR`
        } else {
            document.querySelector(".resultado-euro").innerHTML = "Favor ingresar valores válidos";
        }

        document.getElementById("valor1euro").value = "";
        document.getElementById("valor2euro").value = "";

    });
});

// Convertidor UF-peso chileno
$(document).ready(function () {

    var valorUFActual = 0;

    $.ajax({
        type: "GET",
        url: "https://mindicador.cl/api/uf",
        dataType: "json",
        success: function (datos) {
            valorUFActual = datos.serie[0].valor;
            console.log(valorUFActual)
        },
        error: function (error) {
            console.log(error)
        }
    });

    var convertirUF = document.getElementById("btn-convertir-uf");

    convertirUF.addEventListener("click", function () {
        let valor1uf = document.getElementById("valor1uf");
        let valor2uf = document.getElementById("valor2uf");
        let resultado = 0;

        valor1uf = parseFloat(valor1uf.value);
        valor2uf = parseFloat(valor2uf.value);

        if (!isNaN(valor1uf) && valor1uf > 0) {
            resultado = valor1uf * valorUFActual;
            document.querySelector(".resultado-uf").innerHTML = `${valor1uf} UF = ${resultado.toFixed(2)} CLP`
        } else if (!isNaN(valor2uf) && valor2uf > 0) {
            resultado = valor2uf / valorUFActual;
            document.querySelector(".resultado-uf").innerHTML = `${valor2uf} CLP = ${resultado.toFixed(2)} UF`
        } else {
            document.querySelector(".resultado-uf").innerHTML = "Favor ingresar valores válidos";
        }

        document.getElementById("valor1uf").value = "";
        document.getElementById("valor2uf").value = "";
    });
});


// Convertidor UTM-peso chileno
$(document).ready(function () {

    var valorUTMActual = 0;

    $.ajax({
        type: "GET",
        url: "https://mindicador.cl/api/utm",
        dataType: "json",
        success: function (datos) {
            valorUTMActual = datos.serie[0].valor;
            console.log(valorUTMActual)
        },
        error: function (error) {
            console.log(error)
        }
    });

    var convertirUTM = document.getElementById("btn-convertir-utm");

    convertirUTM.addEventListener("click", function () {
        let valor1utm = document.getElementById("valor1utm");
        let valor2utm = document.getElementById("valor2utm");
        let resultado = 0;

        valor1utm = parseFloat(valor1utm.value);
        valor2utm = parseFloat(valor2utm.value);

        if (!isNaN(valor1utm) && valor1utm > 0) {
            resultado = valor1utm * valorUTMActual;
            document.querySelector(".resultado-utm").innerHTML = `${valor1utm} UTM = ${resultado.toFixed(2)} CLP`
        } else if (!isNaN(valor2utm) && valor2utm > 0) {
            resultado = valor2utm / valorUTMActual;
            document.querySelector(".resultado-utm").innerHTML = `${valor2utm} CLP = ${resultado.toFixed(2)} UTM`
        } else {
            document.querySelector(".resultado-utm").innerHTML = "Favor ingresar valores válidos";
        }

        document.getElementById("valor1utm").value = "";
        document.getElementById("valor2utm").value = "";
    });
});


//Tooltips

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))