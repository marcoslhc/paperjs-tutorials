define(
  {
    factor: Math.PI/180,

      sin : function (angle) { return Math.sin(this.toRad(angle));},
      cos : function (angle) { return Math.cos(this.toRad(angle));},
      tan : function (angle) { return Math.tan(this.toRad(angle));},

     asin : function (value) { return this.toDeg(Math.asin(value));},
     acos : function (value) { return this.toDeg(Math.acos(value));},
     atan : function (value) { return this.toDeg(Math.atan(value));},

    toDeg : function (value) { return value*this.factor;},
    toRad : function (angle) { return angle/this.factor},
  }
)