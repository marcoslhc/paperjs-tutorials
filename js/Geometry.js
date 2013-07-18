define(["Vertex", "paper"], function(Vertex) {
    // ==================
    // = Class Geometry =
    // ==================
    var Geometry = function(xSegments, ySegments) {
	this.vertices = [];
	this.modules = [];

	Geometry.prototype._parent = paper.project;
	//var size = Geometry.prototype._parent.view.size;
	var size;
	var MESH = {
	    speed: 0.001,
	    size: (function() {
		return size || new paper.Size({
		    width: 80,
		    height: 130
		});
	    }()),
	    xRange: 16,
	    yRange: 18,
	    xSegments: 16,
	    ySegments: 9
	};

	this.size = MESH.size
	this.xSegments = xSegments || MESH.xSegments;
	this.ySegments = ySegments || MESH.ySegments;
	this.segmentSize = new paper.Size({
	    width: this.size.width / this.xSegments,
	    height: this.size.height / this.ySegments
	});
	this.makeMesh = function(offsetX, offsetY) {
	    var x, y, vertex;
	    offsetX = offsetX || 0;
	    offsetY = offsetY || 0;
	    for (x = 0; x <= this.xSegments; x++) {
		this.vertices.push([]);
		for (y = 0; y <= this.ySegments; y++) {
		    vertex = new Vertex(
		    offsetX + x * this.segmentSize.width,
		    offsetY + y * this.segmentSize.height);
		    this.vertices[x].push(vertex);
		    //this.vertices.push(vertex);
		}
	    }
	    this.rectangle = new paper.Rectangle(this.vertices[0][0], this.vertices[this.xSegments][this.ySegments]);
	    this.rectangle.selected = true;
	}
    }
    Geometry.prototype.init = function() {
	this.makeMesh();
	console.log(this.rectangle);
	var p = new paper.Path.Line(this.vertices[this.xSegments][0],this.vertices[this.xSegments][this.ySegments]);
	p.strokeColor = new paper.Color('black')
	p.strokeWidth = 1

    }
    Geometry.prototype.render = function() {
    }

    Geometry.prototype.update = function() {
    }


    return Geometry;
});
