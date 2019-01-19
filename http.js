const http = require('http');
const Url = require('url');

module.exports = (port) => {
    http.createServer((req, res) => {
        const st = Number(new Date());
        console.time(`http::${st}`);
        const url = Url.parse(req.url, true);
        const qs = url.query;
        res.write(JSON.stringify({
            msg: qs.msg,
            ts: st,
        }));
        res.end();
        console.timeEnd(`http::${st}`);
    }).listen(port, () => {
        console.log(`Http listening : ${port}`);
    });
}