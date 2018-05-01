
var check_interval = 60 * 1000

setInterval(function () {
  var current_hour = new Date().getHours()

  if (current_hour > 23 || current_hour < 7) {
    home()
    device.setBrightness(0)
  } else {
    device.wakeUpIfNeeded()
    app.launchApp("屏幕时钟")
    if (current_hour > 10 && current_hour < 16) {
      device.setBrightness(255)
    } else {
      device.setBrightness(0)
    }
  }

}, check_interval)