var len;
var results = '';

function apiSearch() {
    results = ''
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com//v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "c6db692b60d3456aa6135e0bb7a0f4e8");
      },
      type: "GET",
  })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}

function handleSearchClick() {
    updateSearchVisibility()
    apiSearch()
    updateSearchVisibility()
}

function updateSearchVisibility() {
    let visibilityCheck = document.getElementById('searchResults').style.visibility
    if (visibilityCheck == 'hidden') {
        document.getElementById('searchResults').style.visibility = 'visible'
    } else {
        document.getElementById('searchResults').style.visibility = 'hidden'
    }
}
