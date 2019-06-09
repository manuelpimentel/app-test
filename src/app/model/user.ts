export class User {

    private _id: number;
    private _firstname: String;
    private _lastname: String;
    private _username: String;
    private _password: String;

    constructor()
    {}

    get id(): number
    {
        return this._id;
    }
    set id( id: number )
    {
        this._id = id;
    }

    get firstname(): String
    {
        return this._firstname;
    }
    set firstname( firstname: String )
    {
        this._firstname = firstname;
    }
    
    get lastname(): String
    {
        return this._lastname;
    }
    set lastname( lastname: String )
    {
        this._lastname = lastname;
    }
    
    
    get username(): String
    {
        return this._username;
    }
    set username( username: String )
    {
        this._username = username;
    }
    
    get password(): String
    {
        return this._password;
    }
    set password( password: String )
    {
        this._password = password;
    }

}