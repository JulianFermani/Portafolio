function updateTime() {
    // Get the current date and time in Córdoba, Argentina time zone
    let now = new Date().toLocaleString("en-US", { timeZone: "America/Argentina/Cordoba" });
    let time = new Date(now);
    
    // Format time as HH:MM:SS AM/PM
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    
    let timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    // Display the time
    document.getElementById('time').textContent = `HORA EN CÓRDOBA, ARGENTINA - ${timeString}`;
}

// Update the time every second
setInterval(updateTime, 1000);

// Call the function initially to display the time immediately
updateTime();
