/**
 * Created by chenqiming on 16/4/16.
 */
import pinyin from 'pinyin';
export default function py(arr){
    let data = {};
    for (let i = 0, length = arr.length; i < length; i++) {
        let first = pinyin(arr[i].name, {style: pinyin.STYLE_NORMAL})[0][0].substring(0, 1);
        switch (first) {
            case 'a':
                if (data.a) {
                    data.a.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.a = [];
                    data.a.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'b':
                if (data.b) {
                    data.b.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.b = [];
                    data.b.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'c':
                if (data.c) {
                    data.c.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.c = [];
                    data.c.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'd':
                if (data.d) {
                    data.d.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.d = [];
                    data.d.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'e':
                if (data.e) {
                    data.e.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.e = [];
                    data.e.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'f':
                if (data.f) {
                    data.f.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.f = [];
                    data.f.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'g':
                if (data.g) {
                    data.g.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.g = [];
                    data.g.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'h':
                if (data.h) {
                    data.h.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.h = [];
                    data.h.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'i':
                if (data.i) {
                    data.i.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.i = [];
                    data.i.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'j':
                if (data.j) {
                    data.j.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.j = [];
                    data.j.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'k':
                if (data.k) {
                    data.k.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.k = [];
                    data.k.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'l':
                if (data.l) {
                    data.l.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.l = [];
                    data.l.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'm':
                if (data.m) {
                    data.m.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.m = [];
                    data.m.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'n':
                if (data.n) {
                    data.n.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.n = [];
                    data.n.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'o':
                if (data.o) {
                    data.o.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.o = [];
                    data.o.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'p':
                if (data.p) {
                    data.p.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.p = [];
                    data.p.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'q':
                if (data.q) {
                    data.q.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.q = [];
                    data.q.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'r':
                if (data.r) {
                    data.r.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.r = [];
                    data.r.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 's':
                if (data.s) {
                    data.s.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.s = [];
                    data.s.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 't':
                if (data.t) {
                    data.t.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.t = [];
                    data.t.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'u':
                if (data.u) {
                    data.u.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.u = [];
                    data.u.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'v':
                if (data.v) {
                    data.v.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.v = [];
                    data.v.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'w':
                if (data.w) {
                    data.w.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.w = [];
                    data.w.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'x':
                if (data.x) {
                    data.x.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.x = [];
                    data.x.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'y':
                if (data.y) {
                    data.y.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.y = [];
                    data.y.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            case 'z':
                if (data.z) {
                    data.z.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.z = [];
                    data.z.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
                break;
            default:
                if (data.zz) {
                    data.zz.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                } else {
                    data.zz = [];
                    data.zz.push({
                        name: arr[i].name,
                        url: 'http://www.0739i.com.cn/data/attachment/portal/201603/09/120158ksjocrjsoohrmhtg.jpg'
                    });
                }
        }
    }
    return [data];
}