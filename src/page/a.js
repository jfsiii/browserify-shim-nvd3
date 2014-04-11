var nv = require('nvd3');
alert('PAGE A: local nv keys:\n\t' + Object.keys(nv).join('\n\t'));
alert('PAGE A: window nv keys:\n\t' + Object.keys(window.nv).join('\n\t'));
