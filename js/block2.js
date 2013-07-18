define(["jquery", "Geometry", "Triangle", "alphabet", "Args"], function ($, Geometry, Triangle, Alphabet, Args) {
    'use strict'; // ;_;
    /*
        Class Block
        @constructor: Block(
            'String' character,
            [   Array <int> position || 'Object' <{x:int,y:int} position,
                int px moduleSize, 
            ])
    */
    var Block = function () {
        Geometry.call(this);

        // =====================
        // = Arguments parsing =
        // =====================

        if (arguments !== 'undefined' && arguments.length > 0) {
            var x = 0,
                y = 0,
                size = 0,
                xModules = 0,
                yModules = 0,
                character,
                _left=0, _right=0, _width=0, _size=0;
            
            character = Args.process(arguments[0], 'String', function (arg) {
                if (arg.length > 1 || arg.length < 1) {
                    throw new TypeError("El argumento debe ser 1 caracter");
                } else {
                    var charCase = '';
                    if ((/[a-zA-Z]/).test(arg)) {
                        charCase = (/[a-z]/).test(arg) ? 'lowercase' : 'uppercase';
                    }
                    return Alphabet[charCase][arg];
                }
            });

            if (arguments.length > 1) {
                if ($.isArray(arguments[1])) {
                    x = arguments[1][0];
                    y = arguments[1][1];
                } else if (typeof arguments[1] === 'object') {
                    x = arguments[1]["x"];
                    x = arguments[1]["y"];
                } else {
                    throw new TypeError("Argumentos mal formados");
                }
                if (arguments.length > 2) {
                    size = Args.process(arguments[2], 'Number', function (arg) {
                        return arg;
                    });
                }
            }
        } else {
            console.log("no arguments used");
        }

        // ==============================
        // = Private Members: functions =
        // ==============================

        function loadMorph() {
            _left = character.left;
            _right = character.right;
            _width = character.width;
            _size = {
                width: _left + _right + _width,
                height: 0
            };
        }


        // ==========================================
        // = Public Access to ReadOnly 'properties' =
        // ==========================================

        this.getMorph = function getMorph() {
            return {
                l: _left,
                r: _right,
                w: _width,
                size: _size
            }
        }
        //*/

        // ==================
        // = Public Members =
        // ==================

        this.x = x || 0;
        this.y = y || 0;
        this.xModules = xModules || 8;
        this.yModules = yModules || 13;
        this.modules = [];
        this.size = size;
        this.character = character;

        //this.moduleWidth = size || 1; // definido en el macrobloque
        //this.moduleHeight = size || 1; // definido en el macrobloque

        this.render = function render() {
            console.log(_left, _width, _right);
            var mods = [];
            var character = this.character
            var modules = character.modules;
            
            //utility functions to use on tests
            
            
            /*
            var offset = function offset(cad, num) {
                return new Array(num + 1).join(cad);
            }
            
            
            var lookModule = function lookModule(x, y) {
                var length = mods.length;
                var charc = '';
                for (var i = 0; i < length; i++) {
                    if (x === mods[i][0] && y === mods[i][1]) {
                        return '*';
                    }
                }
                return ' ';
            }
            //*/
            
            var renderTriangles = function () {
                for(y = 0; y < character.height; y++){
                    for(x = 0; x < _size; x++){
                        v0 = this.vertices[x+0][y+0];
                        v1 = this.vertices[x+0][y+1];
                        v2 = this.vertices[x+1][y+0];
                        v3 = this.vertices[x+1][y+1];
                        var rect = new paper.Rectangle(v0,v3);
                        vc = rect.center;
                        t0 = new Triangle(v0,v2,vc);
                        t1 = new Triangle(v2,v3,vc);
                        t2 = new Triangle(v3,v1,vc);
                        t3 = new Triangle(v1,v0,vc);
                        this.modules.push(t0,t1,t2,t3);
                    }
                }
            }
            
            var makeMesh = function(offsetX,offsetY){
                
                var x,y,vertex;
                offsetX = offsetX||0;
                offsetY = offsetY||0;
                for (x = 0; x <= _size; x++) {
                  this.vertices.push([]);
                  for (y = 0; y <= character.height; y++) {
                    vertex = new Vertex(
                    offsetX + x * this.segmentSize.width,
                    offsetY + y * this.segmentSize.height);
                    this.vertices[x].push(vertex);
                    //this.vertices.push(vertex);
                }
              }
              console.log(offsetX, offsetY, _size, character.height)
            }
              
            for (var i in modules) {
                for (var j = 0; j < modules[i].length; j++) {
                    mods.push([modules[i][j][0], modules[i][j][1], parseInt(i)]);
                }
            }
            
            mods.sort(function (a, b) {
                if ((a[0] - b[0]) === 0) {
                    return a[1] - b[1];
                }
                return a[0] - b[0];
            });

            // Test function
            /*
            for (var j = 0; j < this.yModules; j++) {
                var sLine = '';
                sLine += offset(' ', _left);
                for (var i = 0; i < _width; i++) {
                    sLine += lookModule(i, j);
                }
                sLine += offset(' ', _right);
                console.log(sLine);
            }
            //*/
            /*
            the overall algorythm should go as follows:
            create a new array taking all the arrays in the modules object pairing
            it with its correspondent module number. Each element in the new
            array should be in this form:
            [x,y,module]
            array by y, then by x
            cycle all the modules in the block, if the coordinates of this module
            coincides with any array of the previously constructed array, create
            the figure
            Order all the arrays with modules and pair it with its module number
        
            //*/
            makeMesh();
            renderTriangles();
            console.log(this.vertices);
            console.log(this.modules);
        }
        this.init = function init() {
            console.log(this);
            this.makeVertices();
            this.render();
        }
        this.makeVertices = function makeVertices(offsetX, offsetY) {
            offsetX = offsetX || 0;
            offsetY = offsetY || 0;
            // ======================
            // = Fill in the blanks =
            // ======================
            loadMorph();
            console.log("created");
        }

        // ==========================
        // = Constructor correction =
        // ==========================

        Block.prototype = new Geometry();
        Block.prototype.constructor = Block;


        // ============================
        // = Static (Prototype) Stuff =
        // ============================



        console.log("vertices created");
    }
    return Block;
});
