let iChart = document.getElementById('secChart').getContext('2d');

    
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    let massPopChart = new Chart(iChart, {
      type:'bar', 
      data:{
        labels:['Dec 23', 'Feb 13', 'May 25', 'June 01', 'Aug 15', 'Sept 11'],
        datasets:[{
          label:'Collection',
          data:[
            550,
            105,
            601,
            850,
            947,
            319
          ],
         
          backgroundColor:[
            'green',
            'green',
            'green',
            'green',
            'green',
            'green',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Months',
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
                left:5,
                right: 0,
                top:50,
                bottom: 0,
            }
        }
      },
    });

   

    