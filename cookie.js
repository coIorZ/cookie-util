(function (name, factory) {
    if (typeof define === 'function') {
        define(factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        this[name] = factory(this[name]);
    }
})('cookie', function (originalCookie) {
    cookie.orginalCookie = originalCookie;
    
    function cookie(name, value, options) {
        var argLen = arguments.length;
        if (argLen === 0) {
            return all();
        } else if (argLen === 1) {
            return get(name);
        } else {
            return set(name, value, options);
        }
    }

    function all() {
        var str = document.cookie,
            res = {},
            pairs, pair, name, value, i, len;
        if (str === '') {
            return res;
        }
        pairs = str.split(/;\s/g);
        for (i = 0, len = pairs.length; i < len; i++) {
            pair = pairs[i].split('=');
            name = decodeURIComponent(pair[0]);
            value = decodeURIComponent(pair[1]);
            try {
                value = JSON.parse(value);
            } catch(e) {
                
            }
            res[name] = value;
        }
        return res;
    }

    function get(name) {
        return all()[name];
    }

    function set(name, value, settings) {
        var str, d,
            options = settings || {};
        if(value === null) {
            options.maxAge = 0;
            options.expires = -1;
        }
        if(value && typeof value === 'object') {
            value = JSON.stringify(value);
        }
        str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        if(options.maxAge != null) {
            str += '; max-age=' + options.maxAge;
        }
        if(options.expires != null) {
            d = new Date();
            d.setTime(d.getTime() + options.expires * 1000);
            str += '; expires=' + d.toUTCString();
        }
        if(options.path) {
            str += '; path=' + options.path;
        }
        if(options.domain) {
            str += '; domain=' + options.domain;
        }
        if(options.secure) {
            str += '; secure';
        }
        document.cookie = str;
    }

    return cookie;
});
