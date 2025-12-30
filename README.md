# SpaceX API Data Fetcher (JS)

A lightweight Node.js wrapper for fetching data from the [SpaceX API](https://github.com/r-spacex/SpaceX-API).

## Features

-   **Next Launch**: Get info about the upcoming launch.
-   **Past Launches**: Fetch history of past launches.
-   **Rockets**: Get detailed rocket information.
-   **Capsules**: Fetch capsule data.

## Installation

```bash
npm install
```

## Usage

```javascript
const SpaceXFetcher = require('./index');

const fetcher = new SpaceXFetcher();

async function main() {
    try {
        const nextLaunch = await fetcher.getNextLaunch();
        console.log(`Next Mission: ${nextLaunch.name}`);
        console.log(`Date: ${nextLaunch.date_utc}`);

        const rockets = await fetcher.getRockets();
        console.log(`Found ${rockets.length} rockets.`);
    } catch (error) {
        console.error(error);
    }
}

main();
```

## Contact

Developed for Anunzio International by Anzul Aqeel.
Contact +971545822608 or +971585515742.

## License

MIT


---
### 🔗 Part of the "Ultimate Utility Toolkit"
This tool is part of the **[Anunzio International Utility Toolkit](https://github.com/anzulaqeel/ultimate-utility-toolkit)**.
Check out the full collection of **180+ developer tools, scripts, and templates** in the master repository.

Developed for Anunzio International by Anzul Aqeel.
