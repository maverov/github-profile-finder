class GitHub {
    constructor() {
        this.client_id = 'ec8a4d25b170b13b7694';
        this.client_secret = '9e2126b3a1450696c333194f610e3dbff149c54b';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}