// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel

const SpaceXFetcher = require('./index');

const fetcher = new SpaceXFetcher();

(async () => {
    try {
        console.log("Fetching next launch info...");
        const nextLaunch = await fetcher.getNextLaunch();
        console.log(`\nNext Mission: ${nextLaunch.name}`);
        console.log(`Flight Number: ${nextLaunch.flight_number}`);
        console.log(`Details: ${nextLaunch.details || 'No details available yet.'}`);

        console.log("\nFetching rocket info...");
        const rockets = await fetcher.getRockets();
        console.log(`Available Rockets: ${rockets.map(r => r.name).join(', ')}`);

    } catch (error) {
        console.error("Error:", error.message);
    }
})();

// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel
