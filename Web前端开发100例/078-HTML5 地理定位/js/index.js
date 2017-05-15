function g(id) {
  return document.getElementById(id);
}
function getLocation()
{
  if (navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(showPosition,showError);
  }
  else
  {
    g('demo').innerHTML="该浏览器不支持获取地理位置。";
  }
}

function showPosition(position)
{
  var latlon=position.coords.latitude+","+position.coords.longitude;

  var img_url="http://maps.googleapis.com/maps/api/staticmap?center="
  +latlon+"&zoom=14&size=400x300&sensor=false";
  document.getElementById("mapholder").innerHTML="<img src='"+img_url+"'>";
}

function showError(error)
{
  switch(error.code) 
  {
    case error.PERMISSION_DENIED:
      g('demo').innerHTML="用户拒绝对获取地理位置的请求。"
      break;
    case error.POSITION_UNAVAILABLE:
      g('demo').innerHTML="位置信息是不可用的。"
      break;
    case error.TIMEOUT:
      g('demo').innerHTML="请求用户地理位置超时。"
      break;
    case error.UNKNOWN_ERROR:
      g('demo').innerHTML="未知错误。"
      break;
  }
}