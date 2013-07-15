define(['paper'],function (s) {
  return {
    darken: function (color,offset){
      console.log(color, offset)
      if(offset>1){
          offset = offset/100;
      }
      if(offset){
          color.brightness = color.brightness - offset;
      }
      console.log(color,offset);
    },
    lighten: function (color,offset){
      console.log(color,offset);
      if(offset>1){
          offset = offset/100;
      }
      if(offset){
          color.brightness = color.brightness+offset
      }
      console.log(color,offset);
    },
    spin: function (color,angle){
      console.log(color,offset);
      color.hue = (color.hue+angle)%360;
      console.log(color,offset);
    }
  }
})