define(['Geometry', 'Triangle', 'Scales', 'T', 'paper'], 
function (Geometry, Triangle, Scales, T, p) {
    var Plane = function() {
        //Inherits from Geometry 
        Geometry.call(this);
        Plane.prototype = new Geometry();
        Plane.prototype.constructor = Plane;

        this.render = function() {
            var x, y, v0, v1, v2, v3, vc, t0, t1, t2, t3;

            var CalcSize = function() {
                var sizeIdx, sizes = [1, 2, 3, 5, 8];
                sizeIdx = ~~ (Math.random() * (sizes.length));
                return sizes[sizeIdx];
            }

            for (x = 0; x < this.xSegments; x++) {
                for (y = 0; y < this.ySegments; y++) {

                    size = CalcSize();

                    if (x + size > this.xSegments || y + size > this.ySegments) {
                        size = Math.min(this.xSegments - x, this.ySegments - y);
                    }

                    v0 = this.vertices[x + 0][y + 0];
                    v1 = this.vertices[x + 0][y + size];
                    v2 = this.vertices[x + size][y + 0];
                    v3 = this.vertices[x + size][y + size];
                    var rect = new paper.Rectangle(v0, v3);
                    vc = rect.center;
                    t0 = new Triangle(v0, v2, vc);
                    t1 = new Triangle(v2, v3, vc);
                    t2 = new Triangle(v3, v1, vc);
                    t3 = new Triangle(v1, v0, vc);
                    this.modules.push(t0, t1, t2, t3);
                }
            }
        }

        this.update = function() {
            this.render();
        }

        this.init = function init () {
            Geometry.prototype.init.call(this);
            this.render();
        };
    }
    return Plane;
})
