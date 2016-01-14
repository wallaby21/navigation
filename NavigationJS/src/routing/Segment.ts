﻿class Segment {
    path: string;
    optional: boolean;
    defaults: any;
    pattern: string = '';
    params: { name: string; splat: boolean }[] = [];
    private subSegments: { name: string; param: boolean; splat: boolean }[] = [];
    private subSegmentPattern: RegExp = /[{]{0,1}[^{}]+[}]{0,1}/g;
    private escapePattern: RegExp = /[\.+*\^$\[\](){}']/g;

    constructor(path: string, optional: boolean, defaults?: any) {
        this.path = path;
        this.optional = optional;
        this.defaults = defaults;
        this.parse();
    }

    private parse() {
        if (this.path.length === 0)
            return;
        var matches = this.path.match(this.subSegmentPattern);
        for (var i = 0; i < matches.length; i++) {
            var subSegment = matches[i];
            if (subSegment.charAt(0) == '{') {
                var param = subSegment.substring(1, subSegment.length - 1);
                var optional = param.slice(-1) === '?'; 
                var splat = param.slice(0, 1) === '*';
                var name = optional ? param.slice(0, -1) : param;
                name = splat ? name.slice(1) : name;
                this.params.push({ name: name, splat: splat });
                this.subSegments.push({ name: name, param: true, splat: splat });
                var optionalOrDefault = optional || this.defaults[name];
                this.optional = this.optional && this.path.length === subSegment.length && optionalOrDefault;
                var subPattern = !splat ? '[^/]+' : '.+';
                this.pattern += !this.optional ? `(${subPattern})` : `(\/${subPattern})?`;
            } else {
                this.optional = false;
                this.subSegments.push({ name: subSegment, param: false, splat: false });
                this.pattern += subSegment.replace(this.escapePattern, '\\$&');
            }
        }
        if (!this.optional)
            this.pattern = '\/' + this.pattern;
    }

    build(data: any, urlEncode: (name: string, val: string) => string): { path: string; optional: boolean } {
        var routePath = '';
        var optional = this.optional;
        var blank = false;
        for(var i = 0; i < this.subSegments.length; i++) {
            var subSegment = this.subSegments[i];
            if (!subSegment.param) {
                routePath += subSegment.name;
            } else {
                var val = data[subSegment.name];
                var defaultVal = this.defaults[subSegment.name];
                optional = optional && (!val || val === defaultVal);
                val = val ? val : defaultVal;
                blank = blank || !val;
                if (val) {
                    if (!subSegment.splat || typeof val === 'string' ) {
                        routePath += urlEncode(subSegment.name, val);
                    } else {
                        var encodedVals = [];
                        for(var i = 0; i < val.length; i++)
                            encodedVals[i] = urlEncode(subSegment.name, val[i]); 
                        routePath += encodedVals.join('/');
                        if (routePath.slice(-1) === '/')
                            routePath += '/';
                    }
                }
            }
        }
        return { path: !blank ? routePath : null, optional: optional };
    }
}
export = Segment;
