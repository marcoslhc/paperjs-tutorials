define(['Triangle', 'paper'], function(Triangle, p) {
    'use strict';
    var Alphabet = {};
    Alphabet.block = {
        width: 8,
        height: 13,
        x: 5,
        asc: 4,
        desc: 3,
        cap: 1
    };
    Alphabet.center = function center(tl, bl) {
        var rect = new paper.Rectangle(tl, bl);
        return rect.center;
    };
    Alphabet.module1 = function module1(points) {
        var vc;
        vc = Alphabet.center(points[0], points[3]);
        return new Triangle(points[0], vc, points[2])
    };

    Alphabet.module2 = function module2(points) {
        var vc;
        vc = Alphabet.center(points[0], points[3]);
        return new Triangle(vc, points[3], points[2])
    };


    Alphabet.module8 = function module8(points) {
        var vc;
        vc = Alphabet.center(points[0], points[3]);
        return new Triangle(points[0], points[1], vc)
    };

    Alphabet.module4 = function module4(points) {
        var vc;
        vc = Alphabet.center(points[0], points[3]);
        return new Triangle(points[1], vc, points[3]);
    }

    Alphabet.modules = [

    function(v0, v1, v2, v3) { // 0
        return [];
    },

    function(v0, v1, v2, v3) { // 1 2^0
        var points = [v0, v1, v2, v3]
        return [Alphabet.module1(points)];
    },

    function(v0, v1, v2, v3) { // 2 2@1
        var points = [v0, v1, v2, v3]
        return [Alphabet.module2(points)];
    },

    function(v0, v1, v2, v3) { //  3 2@0 + 2@1
        var points = [v0, v1, v2, v3]
        return [Alphabet.module2(points), Alphabet.module1(points)];
    },

    function(v0, v1, v2, v3) { //  4 2@2
        var points = [v0, v1, v2, v3]
        return [Alphabet.module4(points)];
    },

    function(v0, v1, v2, v3) { //  5 2@2 + 2@0
        var points = [v0, v1, v2, v3]
        return [Alphabet.module4(points), Alphabet.module1(points)];
    },

    function(v0, v1, v2, v3) { //  6 2@2 + 2@1
        var points = [v0, v1, v2, v3]
        return [Alphabet.module4(points), Alphabet.module2(points)];

    },

    function(v0, v1, v2, v3) { //  7 2@2 + 2@1 + 2@0
        var points = [v0, v1, v2, v3]
        return [Alphabet.module4(points), Alphabet.module2(points), Alphabet.module1(points)];
    },

    function(v0, v1, v2, v3) { //  8 2@3
        var points = [v0, v1, v2, v3]
        return [Alphabet.module8(points)];
    },

    function(v0, v1, v2, v3) { //  9 2@3 + 2@0
        var points = [v0, v1, v2, v3]
        return [Alphabet.module8(points), Alphabet.module1(points)];
    },

    function(v0, v1, v2, v3) { // 10 2@3 + 2@1
        var points = [v0, v1, v2, v3]
        return [Alphabet.module8(points), Alphabet.module2(points)];
    },

    function(v0, v1, v2, v3) { // 11 2@3 + 2@1 + 2@0
        var points = [v0, v1, v2, v3]
        return [Alphabet.module8(points), Alphabet.module2(points), Alphabet.module1(points)];
    },

    function(v0, v1, v2, v3) { // 12 2@3 + 2@2
        var points = [v0, v1, v2, v3]
        return [Alphabet.module8(points), Alphabet.module4(points)];
    },

    function(v0, v1, v2, v3) { // 13 2@3 + 2@2 + 2@0
        var points = [v0, v1, v2, v3]
        return [Alphabet.module8(points), Alphabet.module4(points), Alphabet.module1(points)];
    },

    function(v0, v1, v2, v3) { // 14 2@3 + 2@2 + 2@1
        var points = [v0, v1, v2, v3]
        return [Alphabet.module8(points), Alphabet.module4(points), Alphabet.module2(points)];
    },

    function(v0, v1, v2, v3) { // 15 2@3 + 2@2 + 2@1 +2@0
        var points = [v0, v1, v2, v3]
        return [Alphabet.module8(points), Alphabet.module4(points), Alphabet.module2(points), Alphabet.module1(points)];
    }];
    Alphabet.lowercase = {
        'a': {
            left: 1,
            right: 1,
            width: 4,
            modules: {
                '3': [
                    [0, 8]
                ],
                '6': [
                    [0, 4],
                    [2, 5],
                    [0, 6]
                ],
                '9': [
                    [0, 5],
                    [1, 6],
                    [3, 8]
                ],
                '12': [
                    [3, 4]
                ],
                '15': [
                    [1, 4],
                    [2, 4],
                    [3, 5],
                    [3, 6],
                    [0, 7],
                    [3, 7],
                    [1, 8],
                    [2, 8]
                ]
            }
        },
        'b': {
            left: 1,
            right: 1,
            width: 4,
            modules: {
                '6': [
                    [1, 4]
                ],
                '9': [
                    [3, 8]
                ],
                '12': [
                    [0, 0],
                    [3, 4]
                ],
                '15': [
                    [0, 1],
                    [0, 2],
                    [0, 3],
                    [0, 4],
                    [0, 5],
                    [0, 6],
                    [0, 7],
                    [0, 8],
                    [2, 4],
                    [3, 5],
                    [3, 6],
                    [3, 7],
                    [1, 8],
                    [2, 8]
                ]
            }
        },
        'c': {
            left: 1,
            right: 1,
            width: 4,
            modules: {
                '3': [
                    [0, 8]
                ],
                '6': [
                    [0, 4]
                ],
                '9': [
                    [3, 5],
                    [3, 8]
                ],
                '12': [
                    [3, 4]
                ],
                '15': [
                    [1, 4],
                    [2, 4],
                    [0, 5],
                    [0, 6],
                    [0, 7],
                    [1, 8],
                    [2, 8]
                ]
            }
        },
        'd': {
            left: 1,
            right: 1,
            width: 5,
            modules: {
                '3': [
                    [0, 8]
                ],
                '6': [
                    [3, 0],
                    [0, 4]
                ],
                '11': [
                    [3, 8]
                ],
                '12': [
                    [4, 8]
                ],
                '15': [
                    [3, 1],
                    [3, 2],
                    [3, 3],
                    [1, 4],
                    [2, 4],
                    [3, 4],
                    [0, 5],
                    [3, 5],
                    [0, 6],
                    [3, 6],
                    [0, 7],
                    [3, 7],
                    [1, 8],
                    [2, 8]
                ]
            }
        },
        'e': {
            left: 1,
            right: 1,
            width: 4,
            modules: {
                '3': [
                    [0, 8]
                ],
                '6': [
                    [0, 4],
                    [2, 5]
                ],
                '9': [
                    [1, 6],
                    [3, 5],
                    [2, 8]
                ],
                '12': [
                    [3, 4]
                ],
                '15': [
                    [1, 4],
                    [2, 4],
                    [0, 5],
                    [0, 6],
                    [0, 7],
                    [1, 8]
                ]
            }
        },
        'f': {
            left: 1,
            right: 1,
            width: 4,
            modules: {
                '3': [
                    [0, 4]
                ],
                '6': [
                    [1, 0]
                ],
                '9': [
                    [1, 9]
                ],
                '12': [
                    [3, 0],
                    [2, 4]
                ],
                '15': [
                    [2, 0],
                    [1, 1],
                    [1, 2],
                    [1, 3],
                    [1, 4],
                    [1, 5],
                    [1, 6],
                    [1, 7],
                    [1, 8]
                ]
            }
        },
        'g': {
            left: 1,
            right: 1,
            width: 4,
            modules: {
                '3': [
                    [0, 8],
                    [0, 11]
                ],
                '6': [
                    [0, 4]
                ],
                '9': [
                    [3, 11]
                ],
                '15': [
                    [1, 4],
                    [2, 4],
                    [2, 4],
                    [3, 4],
                    [0, 5],
                    [3, 5],
                    [0, 6],
                    [3, 6],
                    [0, 7],
                    [3, 7],
                    [1, 8],
                    [2, 8],
                    [3, 8],
                    [3, 9],
                    [3, 10],
                    [1, 11],
                    [2, 11]
                ]
            }
        },
        'h': {
            left: 1,
            right: 1,
            width: 4,
            modules: {
                '6': [
                    [0, 0]
                ],
                '12': [
                    [3, 4]
                ],
                '15': [
                    [0, 1],
                    [0, 2],
                    [0, 3],
                    [0, 4],
                    [1, 4],
                    [2, 4],
                    [0, 5],
                    [3, 5],
                    [0, 6],
                    [3, 6],
                    [0, 7],
                    [3, 7],
                    [0, 8],
                    [3, 8]
                ]
            }
        },
        'i': {
            left: 1,
            right: 1,
            width: 4,
            modules: {
                '9': [
                    [0, 2],
                    [0, 9]
                ],
                '15': [
                    [0, 4],
                    [0, 5],
                    [0, 6],
                    [0, 7],
                    [0, 8]
                ]
            }
        },
        'j': {
            left: 1,
            right: 1,
            width: 4,
            modules: {
                '6': [
                    [0, 11]
                ],
                '9': [
                    [1, 2],
                    [1, 11]
                ],
                '15': [
                    [1, 4],
                    [1, 5],
                    [1, 6],
                    [1, 7],
                    [1, 8],
                    [1, 9],
                    [1, 10]
                ]
            }
        },
        'k': {
            left: 1,
            right: 1,
            width: 4,
            modules: {
                '3': [
                    [0, 9]
                ],
                '6': [
                    [2, 5]
                ],
                '9': [
                    [1, 6],
                    [3, 8]
                ],
                '12': [
                    [0, 0]
                ],
                '13': [
                    [3, 5]
                ],
                '15': [
                    [0, 1],
                    [0, 2],
                    [0, 3],
                    [0, 4],
                    [0, 5],
                    [0, 6],
                    [0, 7],
                    [0, 8],
                    [3, 4],
                    [3, 6],
                    [3, 7]
                ]
            }
        },
        'l': {
            left: 1,
            right: 1,
            width: 4,
            modules: {
                '3': [
                    [0, 8]
                ],
                '6': [
                    [0, 0]
                ],
                '12': [
                    [1, 8]
                ],
                '15': [
                    [0, 1],
                    [0, 2],
                    [0, 3],
                    [0, 4],
                    [0, 5],
                    [0, 6],
                    [0, 7]
                ]
            }
        },
        'm': {
            left: 0,
            right: 0,
            width: 8,
            modules: {
                '6': [
                    [0, 4]
                ],
                '12': [
                    [7, 4]
                ],
                '14': [
                    [4, 4]
                ],
                '15': [
                    [1, 5],
                    [4, 5],
                    [7, 5],
                    [1, 6],
                    [4, 6],
                    [7, 6],
                    [1, 7],
                    [4, 7],
                    [7, 7],
                    [1, 8],
                    [4, 8],
                    [7, 8],
                    [1, 4],
                    [2, 4],
                    [3, 4],
                    [5, 4],
                    [6, 4]
                ]
            }
        },
        'n': {
            left: 1,
            right: 1,
            width: 5,
            modules: {
                '6': [
                    [0, 4]
                ],
                '12': [
                    [4, 4]
                ],
                '14': [
                    [1, 4]
                ],
                '15': [
                    [2, 4],
                    [3, 4],
                    [1, 5],
                    [4, 5],
                    [1, 6],
                    [4, 6],
                    [1, 7],
                    [4, 7],
                    [1, 8],
                    [4, 8]
                ]
            }
        },
        'o': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'p': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'q': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'r': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        's': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        't': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'v': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'w': {
            left: 0,
            right: 0,
            width: 7,
            modules: {}
        },
        'x': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'y': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'z': {
            left: 1,
            right: 1,
            width: 4,
            modules: {
                '1': [
                    [0, 0]
                ],
                '2': [
                    [0, 1]
                ],
                '4': [
                    [0, 2]
                ],
                '8': [
                    [0, 3]
                ]
            }
        }
    };
    Alphabet.uppercase = {
        'A': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'B': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'C': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'D': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'E': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'F': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'G': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'H': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'I': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'J': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'K': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'L': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'M': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'N': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'O': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'P': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'Q': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'R': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'S': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'T': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'U': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'V': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'W': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'X': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        },
        'Y': {
            left: 1,
            right: 1,
            width: 4,
            modules: {}
        }
    };
    return Alphabet;
});
