import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create( ID.unique(), email, password, name )
            if(userAccount){
                return this.login({email,password})
            } else {
                return false
            }
        } catch (error) {
            console.log("auth.js :: createAccount :: error", error);
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            console.log("auth.js :: login :: error", error)
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("auth.js :: getCurrentUser :: error", error);
        }

        return null
    }

    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("auth.js :: logout :: error", error);
        }
    }
}

const authService = new AuthService()

export default authService