define({
  scaleVal: function(value_from, min, max) {
    'use strict';
    /*
    scaleVal(value,max,min)
    scaleVal(value,max)
    scaleVal(value)

    Given a value, returns the relative position in a range between 2 other
    numbers. If the min value is omited, then the range starts in 0. If both
    min and max are ommited, then the scale ranges from 0 to 1

    @param Number value
    @param Number min
    @param Number min

    @returns Number
  */
    if (typeof max === 'undefined') {
      if (typeof max === 'undefined') {
	max = 1;
      } else {
	max = min;
      }
      min = 0;
    }
    return (value_from - min) / (max - min);
  },

  normalizeVal: function(value, mid_point, range) {
    'use strict';
    /*
    normalizeVal(value,mid_point,range)

  */
    return (value - mid_point) / range;
  },

  calcOffset: function(value_from, min, max) {
    'use strict';
    if (typeof max === 'undefined') {
      max = min;
      min = 0;
    }
    return (value_from * (max - min)) + min;
  },

  clamp: function(value, min, max) {
    'use strict';
    /*
      clamp(value,min,max)
      @param Number value
      @param Number min
      @param Number max

      @returns Number 

      taken from github.com/wagerfield/flat-surface-shader/blob/bb292d0001ed59beee5dc9dcebc1f17dedd13b13/source/Math.js
    */
    value = Math.max(value, min);
    value = Math.min(value, max);
    return value;

  },

  range: function(min, max) {
    'use strict';
    return max - min;
  },
  randomInRange: function(min, max){
    'use strict';
    return min+(max-min)*Math.random();
  },
  mean: function(values) {
    'use strict';
    var total = 0;
    for (var i = 0; i < values.length; i++) {
      total += values[i];
    }
    return total / values.length;
  },

  transform: function(value_from, scale1, scale2) {
    'use strict';
    /*
    transform(value_from, scale1, scale2)
    @param Number value_from
    @param [Number] scale1
    @param [Number] scale2

    @returns Number
  */
    return this.calcOffset(this.scaleVal(value_from, scale1[0], scale1[1]), scale2[0], scale2[1]);

  },
  transformSymetric: function(value_from, scale1, scale2) {
    'use strict';
    /*
    transformSymetric(value_from, scale1, scale2)
    @param Number value_from
    @param [Number] scale1
    @param [Number] scale2

    @returns Number
  */
    var mid_point = 0,
      range = 0,
      new_value = 0;
    mid_point = this.mean(scale1);
    range = this.range(scale1[1], scale1[0]);
    new_value = Math.abs(this.normalizeVal(value_from, mid_point, range)) * 2;

    return this.calcOffset(new_value, scale2[0], scale2[1]);
  }
})