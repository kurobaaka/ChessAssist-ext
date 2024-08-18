/*!
 * Chess Assist (https://chessassist.net)
 * Copyright (c) ENDGAME SOFTWARE, LLC. All rights reserved.
 */
function bakne() {
    var _0x51d6d5 = (function () {
            var _0x543b4d = !![];
            return function (_0x5eef8a, _0x3562eb) {
                var _0x43be8e = _0x543b4d ? function () {
                    if (_0x3562eb) {
                        var _0x51199b = _0x3562eb['apply'](_0x5eef8a, arguments);
                        return _0x3562eb = null, _0x51199b;
                    }
                } : function () {};
                return _0x543b4d = ![], _0x43be8e;
            };
        }()),
        _0x429c90 = _0x51d6d5(this, function () {
            return _0x429c90['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x429c90)[
                'search']('(((.+)+)+)+$');
        });
    _0x429c90();
    var _0x3301d8 = (function () {
            var _0x46287f = !![];
            return function (_0x4cb497, _0x3629bb) {
                var _0xaae292 = _0x46287f ? function () {
                    if (_0x3629bb) {
                        var _0x209626 = _0x3629bb['apply'](_0x4cb497, arguments);
                        return _0x3629bb = null, _0x209626;
                    }
                } : function () {};
                return _0x46287f = ![], _0xaae292;
            };
        }()),
        _0x2201bd = _0x3301d8(this, function () {
            var _0x36bfad = typeof window !== 'undefined' ? window : typeof process === 'object' &&
                typeof require === 'function' && typeof global === 'object' ? global : this,
                _0x1b7818 = _0x36bfad['console'] = _0x36bfad['console'] || {},
                _0x572815 = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
            for (var _0x17f63e = 0x1 * -0xc7a + -0x1e73 * 0x1 + -0x21 * -0x14d; _0x17f63e < _0x572815[
                'length']; _0x17f63e++) {
                var _0x2f9e7a = _0x3301d8['constructor']['prototype']['bind'](_0x3301d8),
                    _0x4b1882 = _0x572815[_0x17f63e],
                    _0x441cb3 = _0x1b7818[_0x4b1882] || _0x2f9e7a;
                _0x2f9e7a['__proto__'] = _0x3301d8['bind'](_0x3301d8), _0x2f9e7a['toString'] = _0x441cb3['toString']
                    ['bind'](_0x441cb3), _0x1b7818[_0x4b1882] = _0x2f9e7a;
            }
        });
    _0x2201bd(), (chrome['debugger']['onDetach']['addListener'](function () {
        chrome['storage']['local']['set']({
            'function_atpl': !(0x47 * 0x35 + -0x22c1 + 0x140f * 0x1)
        });
    }), chrome['runtime']['onMessage']['addListener'](function (_0x52e102, _0x40c590) {
        if ('string' == typeof _0x52e102) 'lga-datas-atch' == _0x52e102 ? chrome['debugger']['attach']({
            'tabId': _0x40c590['tab']['id']
        }, '1.3') : 'lga-datas-dtch' == _0x52e102 && chrome['debugger']['getTargets'](function (
            _0x5bedd5) {
            for (var _0x56a85c = _0x5bedd5['length'] - (0x2479 * -0x1 + 0xc * 0xc3 +
                0x1b56); _0x56a85c >= -0x67 * 0x7 + -0x187 + 0x458; _0x56a85c--) void(0x42b * 0x5 +
                -0x20a + -0x1 * 0x12cd) !== _0x5bedd5[_0x56a85c] && 'page' == _0x5bedd5[
                _0x56a85c]['type'] && 0x1 * -0x2089 + -0xa01 * -0x2 + 0x4 * 0x322 == _0x5bedd5[
                _0x56a85c]['attached'] && chrome['debugger']['detach']({
                'tabId': _0x5bedd5[_0x56a85c]['tabId']
            });
        });
        else {
            if ('object' == typeof _0x52e102 && 'lga-datas-snmd' == _0x52e102['val0']) switch (_0x52e102[
                    'val1']) {
                case 'p':
                    chrome['debugger']['sendCommand']({
                        'tabId': _0x40c590['tab']['id']
                    }, 'Input.dispatchMouseEvent', {
                        'type': 'mousePressed',
                        'x': _0x52e102['val2'],
                        'y': _0x52e102['val3'],
                        'button': 'left',
                        'clickCount': 0x1
                    });
                    break;
                case 'r':
                    chrome['debugger']['sendCommand']({
                        'tabId': _0x40c590['tab']['id']
                    }, 'Input.dispatchMouseEvent', {
                        'type': 'mouseReleased',
                        'x': _0x52e102['val2'],
                        'y': _0x52e102['val3'],
                        'button': 'left',
                        'clickCount': 0x1
                    });
            }
        }
    }));
}
bakne();