define(function () {
    'use strict';
    return {
        block: {
            width: 8,
            height: 13,
            x: 5,
            asc: 4,
            desc: 3,
            cap: 1
        },
        lowercase: {
            'a': {
                left: 2,
                right: 2,
                width: 4,
                modules: {
                    '3': [[0, 8]],
                    '6': [[0, 4], [2, 5], [0, 6]],
                    '9': [[0, 5], [1, 6], [3, 8]],
                    '12': [[3, 4]],
                    '15': [[1, 4], [2, 4], [3, 5], [3, 6], [0, 7], [3, 7],
                        [1, 8], [2, 8]]
                }
            },
            'b': {
                left: 2,
                right: 2,
                width: 4,
                modules: {
                    '6': [[1, 4]],
                    '9': [[3, 8]],
                    '12': [[0, 0], [3, 4]],
                    '15': [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
                        [0, 7], [0, 8], [2, 4], [3, 5], [3, 6], [3, 7],
                        [1, 8], [2, 8]]
                }
            },
            'c': {
                left: 2,
                right: 2,
                width: 4,
                modules: {
                    '3': [[0, 8]],
                    '6': [[0, 4]],
                    '9': [[3,5],[3, 8]],
                    '12': [[3, 4]],
                    '15': [[1, 4], [2, 4], [0, 5], [0, 6], [0, 7], [1, 8],
                        [2, 8]]
                }
            },
            'd': {
                left: 2,
                right: 1,
                width: 5,
                modules: {
                    '3':  [[0, 8]],
                    '6':  [[3, 0], [0, 4]],
                    '11': [[3, 8]],
                    '12': [[4, 8]],
                    '15': [[3, 1], [3, 2], [3, 3], [1, 4], [2, 4], [3, 4],
                        [0, 5], [3, 5], [0, 6], [3, 6], [0, 7], [3, 7],
                        [1, 8], [2, 8]]
                }
            },
            'e': {
                left: 2,
                right: 2,
                width: 4,
                modules: {
                    '3': [[0, 8]],
                    '6': [[0, 4], [2, 5]],
                    '9': [[1, 6], [3, 5], [2, 8]],
                    '12': [[3, 4]],
                    '15': [[1, 4], [2, 4], [0, 5], [0, 6], [0, 7], [1, 8]]
                }
            },
            'f': {
                left: 1,
                right: 3,
                width: 4,
                modules: {
                    '3': [[0, 4]],
                    '6': [[1, 0]],
                    '9': [[1, 9]],
                    '12': [[3, 0], [2, 4]],
                    '15': [[2, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5],
                        [1, 6], [1, 7], [1, 8]]
                }
            },
            'g': {
                left: 2,
                right: 2,
                width: 4,
                modules: {
                    '3': [[0, 8], [0, 11]],
                    '6': [[0, 0]],
                    '9': [[3, 11]],
                    '15': [[1, 4], [2, 4], [2, 4], [0, 5], [3, 5], [0, 6],
                        [3, 6], [0, 7], [3, 7], [1, 8], [2, 8], [3, 8],
                        [3, 9], [3, 10], [1, 11], [2, 11]]
                }
            },
            'h': {
                left: 2,
                right: 2,
                width: 4,
                modules: {
                    '6': [[0, 0]],
                    '12': [[3, 4]],
                    '15': [[0, 1], [0, 2], [0, 3], [0, 4], [1, 4], [2, 4],
                        [0, 5], [3, 5], [0, 6], [3, 6], [0, 7], [3, 7],
                        [0, 8], [3, 8]]
                }
            },
            'i': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'j': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'k': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'l': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'm': {
                left: 0,
                right: 0,
                width: 8,
                modules: {}
            },
            'n': {
                left: 1,
                right: 2,
                width: 5,
                modules: {}
            },
            'o': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'p': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'q': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'r': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            's': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            't': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'v': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'w': {
                left: 1,
                right: 0,
                width: 7,
                modules: {}
            },
            'x': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'y': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'z': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            }
        },
        uppercase: {
            'A': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'B': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'C': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'D': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'E': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'F': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'G': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'H': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'I': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'J': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'K': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'L': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'M': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'N': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'O': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'P': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'Q': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'R': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'S': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'T': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'U': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'V': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'W': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'X': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            },
            'Y': {
                left: 2,
                right: 2,
                width: 4,
                modules: {}
            }
        }
    };
});