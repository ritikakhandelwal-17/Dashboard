var xValues = ['','Mon','Tues','Wedn','Thurs','Fri','Satu','Sun'];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [0,5,7,6,3,8,9,6],
      borderColor: "red",
      label: 'THIS WEEK',
      fill: false
    },{
      data: [0,9,6,4,8,3,7,3],
      borderColor: "green",
      label: 'PREVIOUS WEEK',
      fill: false
    }]
  },
  xAxisID: 'Days',
  yAxisID: 'Study Hours',
  options: {
    legend: {display: true}
  }
});
 
var pieValues=['Physics','Maths','Chemistry','French','Others'];
new Chart("pieChart",{
  type: "pie",
  data:{
    labels: pieValues,
    datasets: [{
      backgroundColor: [
        "rgb(0,0,255)",
        "rgb(255,0,0)",
        "rgb(0,255,0)",
        "rgb(102,102,50)",
        "rgb(50,30,60)",
      ],
      data: [6,8,4,3,7],
    }]
  },
  options:{
    legend:{display:true}
  }
})

var bar = new ProgressBar.Circle('#p1', {
  color: '#aaa',
  strokeWidth: 8,
  trailWidth: 5,
  easing: 'easeInOut',
  from: { color: '#aaa', width: 5 },
  to: { color: 'rgb(255, 50, 20)' , width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    circle.setText(`${value}%`);

  }
});
bar.animate(0.65);
bar.text.style.color = 'black';

 
var bar = new ProgressBar.Circle('#p2', {
  color: '#aaa',
  strokeWidth: 8,
  trailWidth: 5,
  easing: 'easeInOut',
  from: { color: '#aaa', width: 5 },
  to: { color: 'rgb(50, 50, 255)' , width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    circle.setText(`${value}%`);

  }
});
bar.animate(0.92);
bar.text.style.color = 'black';

var bar = new ProgressBar.Circle('#p3', {
  color: '#aaa',
  strokeWidth: 8,
  trailWidth: 5,
  easing: 'easeInOut',
  from: { color: '#aaa', width: 5 },
  to: { color: 'rgb(66,255,20)' , width: 8 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    circle.setText(`${value}%`);

  }
});
bar.animate(0.22);
bar.text.style.color = 'black';






function func2(id , color)
{
  id.style.backgroundColor=color;
  
}


function func(id , color)
{
  id.style.backgroundColor=color;
  
}