document.getElementById('eventForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;

    const response = await fetch('http://localhost:3000/api/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description, date })
    });

    if (response.ok) {
        alert('Event registered!');
    } else {
        alert('Failed to register event: ' + await response.text());
    }
});
