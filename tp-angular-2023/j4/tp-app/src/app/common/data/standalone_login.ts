export class StandaloneLoginRequest{
    constructor(
        public  username : string ="",
        public  password : string =""){}
}

export class StandaloneLoginResponse{
    constructor(
        public username: string = "",
        public status : boolean = false,
        public message: string ="",
        public token: string | null = null,
        public scope : string =""){}
}