/**
      var mail = {
      INTERVAL_BATTERY_LOW: 1000 * 60 * 10,
      INTERVAL_DEFAULT: 1000 * 5,
      interval: null,
      timer: 0,
      i: 0,
      
      check: function () {
        showResult('Checking the server for new emails using an interval of ' + 
                    (mail.interval / 1000) + ' seconds. ' + (mail.i+=1));
      },
      
      setTimer: function (interval) {
        if (interval === mail.interval) { return; }
        if (mail.timer !== 0) { clearTimeout(mail.timer); }
        if (interval) { mail.timer = setInterval(function () { mail.check(); }, interval); }
        mail.interval = interval;
      }
    };
    
    window.addEventListener('load', function () {
      mail.setTimer(!mail.interval ? mail.INTERVAL_DEFAULT : mail.interval);
    }, false);
    
    // navigator.battery not implemented on OSX - will return undefined
    var battery = navigator.battery;
    
    battery.addEventListener('dischargingtimechange', function () {
      if (battery.dischargingTime < 60 * 30 || battery.level < 0.1) {
        mail.setTimer(mail.INTERVAL_BATTERY_LOW);
        showResult('30 minutes remaining or level below 10%, checking the server less frequently.');
      } else if (battery.dischargingTime < 60 * 10 || battery.level < 0.05) {
        mail.setTimer(null);
        showResult('10 minutes remaining or level below 5%, stop checking the server.');
      }
    }, false);
    
    battery.addEventListener('chargingchange', function () {
      if (battery.charging) {
        mail.setTimer(mail.INTERVAL_DEFAULT);
        showResult('Battery is charging, checking the server normally.');
      }
    }, false);
    /**/