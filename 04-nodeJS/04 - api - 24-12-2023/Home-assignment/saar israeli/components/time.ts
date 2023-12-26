const liveDate = function(timezone: string): string {
    const options: Intl.DateTimeFormatOptions = {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    };
    return new Date().toLocaleString(undefined,options);
}

export default liveDate;