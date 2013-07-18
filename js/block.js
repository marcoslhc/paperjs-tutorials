// ===============
// = Class Block =
// ===============
/*
    Defines a block of one character
*/
define(["Geometry","Alphabet","Args"],function (Geometry, Alphabet, Args) {
    
    var Block = function (character) {
        // Extends Geometry
        Geometry.call(this, Alphabet.block.width, Alphabet.block.height);
        Block.prototype = new Geometry;
        Block.prototype.constructor = Block;
        
        // Save a variable for auto-reference
        _this = this;
        
        function extractModules(){
            /*
                function extractModules
                returns an array of the modules and its position
                used in the selected character in the form [X,Y,Module #]
            */
            var modules = _this.character.modules;
            var mods = [];
            for (var i in modules) {
                for (var j = 0; j < modules[i].length; j++) {
                    mods.push([modules[i][j][0], modules[i][j][1], parseInt(i)]);
                }
            }
            return mods;
        }
        
        
        this.character = Args.process(character, 'String', function (arg) {
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
        
        /*
            Own properties
        */
        this.activeModules = [];
        this.xSegments = this.character.left +
                        this.character.width +
                        this.character.right;
        this.ySegments = Alphabet.block.height;
        
        /*
        For performance optimization the active modules array must be ordered
        by coordinates (X first,Y later)
        */
        this.activeModules = extractModules();
        this.activeModules.sort(function (a, b) {
            if ((a[0] - b[0]) === 0) {
                return a[1] - b[1];
            }
            return a[0] - b[0];
        });
        
        this.render = function(offsetX, offsetY){
            /*
                The actual render function. Its originaly defined in Geometry
                and should be overriden by the child objects.
            */
            
            //Excecute super method
            Geometry.prototype.render.call(this);
            var size = 1,x,y;
            var count = 0;
            var offsetX = offsetX || 0;
            var offsetY = offsetY || 0;
            for(x = 0; x < this.xSegments-this.character.right; x++){
                for(y = 0; y < this.ySegments-offsetY; y++) {
                    console.log(x, y);
                    v0 = this.vertices[x + offsetX][y + offsetY];
                    v1 = this.vertices[x + offsetX][y + offsetY + size];
                    v2 = this.vertices[x + offsetX + size][y + offsetY];
                    v3 = this.vertices[x + offsetX + size][y + offsetY + size];
                    this.activeModules.forEach(function (elm){
                        count++
                        if(x == elm[0]&&y==elm[1]){
                              _this.modules.push(Alphabet.modules[elm[2]](v0,v1,v2,v3));
                        }
                    });
                }
            }
        }
        
        this.init = function(){
            Geometry.prototype.init.call(this);
            this.render(this.character.left,0);
        }
        
    }
    return Block;
});