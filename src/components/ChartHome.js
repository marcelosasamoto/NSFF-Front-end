
var ChartDATA = []
var mes = ["Jan", "Fev", "Mar", "Abr", "Mai","Jun", "Jul", "Ago", "Set","Out", "Nov", "Dez"]
var semana = [1,2,3,4]
var ChartDATA= mes.map(function (w) { return  {x:w,y:Math.floor(Math.random()*1000) }  });

function periodo(tempo, mes){
    if (tempo === 'Anual'){
        console.log('anual')
    }else {
        if (tempo === 3){
            console.log('3 meses')
        }
        else {
            
        }
    }
}
export var chartDATA = ChartDATA

  console.log(111, chartDATA)