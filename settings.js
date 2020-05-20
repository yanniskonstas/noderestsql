const APIServerPort = 3099;
const database = {
    host: 'localhost',
    post: 3306,
    user: 'root',
    password: '74787478',
    database: 'project'
};

module.exports = {
    database,
    APIServerPort
}

/*
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;
*/