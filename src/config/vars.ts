const env = process?.env?.NODE_ENV || 'development';
const config:any = {}

switch ( env ) {
    case 'development':
        config['dbName']= 'libraryDb';
        config['dbHost']= 'localhost';
        config['dbUserName']= 'root';
        config['dbPassword']= 'password';
        config['jwtSecToken']= 'Test@$#123';
        break;
    case 'stage':
        config['dbName']= 'libraryDb';
        config['dbHost']= 'localhost';
        config['dbUserName']= 'root';
        config['dbPassword']= 'password';
        config['jwtSecToken']= 'Test@$#123';
        break;
    case 'prod':
        config['dbName']= 'libraryDb';
        config['dbHost']= 'localhost';
        config['dbUserName']= 'root';
        config['dbPassword']= 'password';
        config['jwtSecToken']= 'Test@$#123';
        break;
}

export const CONFIG = config;