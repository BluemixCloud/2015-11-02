$('#btn-tweets').click(function(){
  $.ajax({
    url: '/tweets?proxy=true',
    method: 'get',
    dataType: 'json',
    success: function(tweets){
      drawChart(tweets);
      for(var i = 0; i < tweets.length; i++){
        $('#tweets').append('<li>' + tweets[i].tweet + '</li>');
      }
    }
  });
});

function drawChart(tweets){
  $('#graph').highcharts({
    title: {
      text: 'Tweet Sentiment Analysis'
    },
    xAxis: {
       categories: tweets.map(function(t, i){return i})
    },
    series: [
     {
       data: tweets.map(function(t){return t.sentiment.score})
     }
    ]
  });
}
