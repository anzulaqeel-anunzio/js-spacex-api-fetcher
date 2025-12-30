// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel

/*
 * Developed for Anunzio International by Anzul Aqeel
 * Contact +971545822608 or +971585515742
 */

const axios = require('axios');

class SpaceXFetcher {
    constructor() {
        this.baseUrl = 'https://api.spacexdata.com/v4';
    }

    async getNextLaunch() {
        try {
            const response = await axios.get(`${this.baseUrl}/launches/next`);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch next launch: ${error.message}`);
        }
    }

    async getLaunches() {
        try {
            const response = await axios.get(`${this.baseUrl}/launches`);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch launches: ${error.message}`);
        }
    }

    async getRockets() {
        try {
            const response = await axios.get(`${this.baseUrl}/rockets`);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch rockets: ${error.message}`);
        }
    }

    async getCapsules() {
        try {
            const response = await axios.get(`${this.baseUrl}/capsules`);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch capsules: ${error.message}`);
        }
    }
}

module.exports = SpaceXFetcher;

// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel
