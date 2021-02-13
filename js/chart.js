let myChart = document.getElementById('barChart').getContext('2d');

    
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart = new Chart(myChart, {
      type:'pie', 
      data:{
        labels:['Russia', 'China', 'Brazil', 'Others', 'Japan', 'US'],
        datasets:[{
          label:'Skills',
          data:[
            90,
            70,
            71,
            65,
            35,
            50
          ],
         
          backgroundColor:[
            'blue',
            'red',
            'green',
            'yellow',
            'orange',
            'grey',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#FFFFFF'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Countries',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      },
      options: {
        responsive: false,
        layout: {
            padding: {
                left:20,
                right: 0,
                top:0,
                bottom: 0,
            }
        }
      },
    });

   

    