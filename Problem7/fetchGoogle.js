async function fetchGooglePage() {
    try {
        const response = await fetch('https://www.google.com');
        const data = await response.text();
        console.log(' Google Page Fetched Successfully');
        console.log(data.substring(0, 500));
    } catch (err) {
        console.error(' Error fetching Google page:', err.message);
    }
}

fetchGooglePage();
