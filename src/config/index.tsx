import * as config from "./environment"
class Config {
    static DEV:string = "development";
    static PRODUCTION:string = "production";
    static allKeys:string[] = ["development", "pre", "production"];
    static currentDev: string = process.env.REACT_APP_DEV_TEST || Config.PRODUCTION
    
    static isDev(): boolean {
        return Config.currentDev === Config.DEV;
    }

    static isProduction(): boolean {
        return Config.currentDev === Config.PRODUCTION;
    }

    static getCurrentDev(): string {
        return Config.currentDev
    }

    static getUrlLinks(key:string):string{
        console.log("currentDev", process.env.REACT_APP_DEV_TEST)
        return config[Config.currentDev].links[key];
    }

    static getApiUrl(key: string):string {
        return config[Config.currentDev].Apis[key];
    }

    static getVersion():string {
        return config[Config.currentDev].version;
    }
}

export default Config