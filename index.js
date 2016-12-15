const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// 告诉app去哪儿查找静态文件
app.use(express.static('./server/static/'))
app.use(express.static('./client/dist/'));
// 解析HTTP body
app.use(bodyParser.urlencoded({extend: false}));

//路由
const authRoutes = require('./server/routes/auth');
app.use('/auth', authRoutes);

// 开启 server
app.listen(3000, () => {
    console.log('server 正在运行 http://localhost:3000');
});
