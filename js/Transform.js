// ================
// = Class Matrix =
// ================
define(['paper','m'],function (s,m) {
  var Transform = function (_super,type){
    this.scale = 0.8602;
    switch (type){
      case 'top':
	this.shear_h = Math.asin(0.57);
	this.rotate = -30;
	break;
      case 'left':
	this.shear_h = Math.asin(0.57);
	this.rotate = 30;
	break;
      case 'right':
	this.shear_h = -Math.asin(0.57);
	this.rotate = -30;
	break;
    }
    this._super = _super;
  };
  Transform.prototype.applyTransform = function () {
    this._super.polygon.scale(1,this.scale);
    console.log(this.shear_h)
    this._super.polygon.shear(this.shear_h,0);
    this._super.polygon.rotate(this.rotate);
  }
  return Transform;
});