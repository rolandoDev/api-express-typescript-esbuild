
// import mongoose, { ConnectOptions } from 'mongoose';
import Logger from './logger';
export default class DB {
    private _connection: string = '';
    constructor(connection: string) {
        this._connection = connection;
    }
    init(){
        console.log('DB init');
        
        // mongoose.connect( this._connection, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // } as ConnectOptions)
        // .then(() => {
        //     Logger.debug(`Conectado a la BD`);
        // })
        // .catch(err => {
        //     Logger.error(`Error DB Connect, ${err.message}`);
        // });
    }
}

