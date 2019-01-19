const Mali = require('mali');
const path = require('path');
const PROTO_PATH = path.join(__dirname, 'proto', 'hello.proto');

const hw = async ctx => {
    const st = Number(new Date());
    console.time(`gRPC::${st}`);
    ctx.res = {
        msg: ctx.request.req.msg,
        ts: Number(new Date()),
    };
    console.timeEnd(`gRPC::${st}`);
    return;
}

const add = async ctx => {
    const ts = Number(new Date());
    const { v1, v2 } = ctx.request.req.nums;
    const v = v1 + v2;
    ctx.res = {
        result: {
            v, ts,
        },
    };
}

const sub = async ctx => {
    const ts = Number(new Date());
    const { v1, v2 } = ctx.request.req.nums;
    const v = v1 - v2;
    ctx.res = {
        result: {
            v, ts,
        },
    };
}

const multi = async ctx => {
    const ts = Number(new Date());
    const { v1, v2 } = ctx.request.req.nums;
    const v = v1 * v2;
    ctx.res = {
        result: {
            v, ts,
        },
    };
}

const divi = async ctx => {
    const ts = Number(new Date());
    const { v1, v2 } = ctx.request.req.nums;
    if (!v2 || v2 === 0) {
        return ctx.res = {
            result: {
                v: 0,
                ts,
            },
            error: 'v2 cannot be zero',
        };
    }
    const v = v1 / v2;
    ctx.res = {
        result: {
            v, ts,
        },
        error: '',
    };
}

module.exports = main = (port) => {
    const app = new Mali(PROTO_PATH, 'HelloWorld', { defaults: true });
    app.use({
        hw,
        add,
        sub,
        multi,
        divi,
    });
    app.start(`127.0.0.1:${port}`);
    console.log(`Mali listening : ${port}`);
};