const convertTime = time => {
    // Split time into hours and minutes
    const timeParts = time.split(':');
    let hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);

    let meridiem = 'am';

    if (hours >= 12) {
        meridiem = 'pm';

        if (hours > 12) {
            hours -= 12;
        }
    } else if (hours === 0) {
        hours = 12; // Convert midnight (0 hours) to 12 AM
    }

    return (
        hours.toString().padStart(2, '0') + 
        ":" + 
        minutes.toString().padStart(2, '0') + 
        " " + 
        meridiem
    );
};

export default convertTime;
