var footer = document.getElementById('footer'),
  allDiv = document.getElementsByTagName('div');
  adRegex = /\w+-ad|ad-/gi;

var divArray = [],//存在id属性的div标签数组
  adArray = [];//广告div数组

  for (var i = allDiv.length - 1; i >= 0; i--) {
    if (allDiv[i].getAttribute("id")) {
      divArray.push(allDiv[i].getAttribute("id"));
    };
  };

  for (var i = divArray.length - 1; i >= 0; i--) {
    if (adRegex.test(divArray[i])) {
      adArray.push(divArray[i]);
    };
  };

  for (var i = adArray.length - 1; i >= 0; i--) {
    document.getElementById(adArray[i]).style.display = 'none';
  };

  footer.style.height = '40px';//将底部的高度设置40px，去掉广告部分的高度。


