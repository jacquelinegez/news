import $ from 'jquery';

$(document).ready(function(){
    
    var url ="https://newsapi.org/v2/everything?q=Traffic&from=2019-05-18&sortBy=pol&apiKey=352522ad62e549f9a652d10ef8f7c422"
    
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
    
        beforeSend: function (){
            $(".progress").show();
        }, 
        complete: function(){
            $(".progress").hide();
        },
        success: function (news){
            console.log('news', news);
            var output = "";
            var latestNews = news.articles;
            var post_limit = 3;
            var materializeColWidth = 10/post_limit;



            for(var i in latestNews) {
                output += `
                <div class="col 1${materializeColWidth} m6 s6">
                <div class="card medium hoverable">
                <div class="card-image">
                <img src="${latestNews[i].urlToImage}" class="responsive-img"> 
                </div>

                <div class="card-content">
                <span class="card-title activator"></span>
                <h6>${latestNews[i].title}</h6>
                </div>
    
                <div class="card-action">
                <a target="_blank" href="${latestNews[i].url}" class="btn">Read More</a>
                </div>
                </div>
                </div>
                `;
            }
            if(output !== ""){
                $("#newsResults").html(output);
            }
        },
        error: function() {
            $("#newsResults").html("Some error occured");
        }
    })

})

