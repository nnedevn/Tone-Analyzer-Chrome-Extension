//
//chrome.runtime.sendMessage(document.getElementsByTagName('title')[0].innerText);


//https://watson-api-explorer.mybluemix.net/tone-analyzer/api/v3/tone?text=test&version=2016-05-19&sentences=true&tones=emotion

// var inputText = "JACKIE I AM SO SO SO SORRY! I thought you were behind us in the cab and then I saw you weren’t!!!!! I feel soooooooo bad! Catch another cab and ill pay for it for youuuuu"


// $.getJSON( "https://watson-api-explorer.mybluemix.net/tone-analyzer/api/v3/tone?text="+ inputText +"&version=2016-05-19&sentences=true&tones=emotion", function( data ) {

// // alert(JSON.stringify(data));

// });
alert();
document.addEventListener('DOMContentLoaded', function()
{
    var ctx = document.getElementById("chart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [ 'a', 'b', 'c', 'd' ],
                datasets: [{
                backgroundColor: [
                    "#59be5b",
                    "#d56328",
                    "#ff1b2d",
                    "#0078d7"
                ],
                data: [ 1, 2, 3, 4 ]
            }]
        }
    });

    document.getElementById('test').textContent = 'SUCCEED';
});