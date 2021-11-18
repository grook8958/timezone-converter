const getTimezoneData = require('./getTimezoneData');

module.exports = convert = (startTimezone = '', startTime = '', endTimezone = '', endTime = '') => {
    startTimezone = getTimezoneData(startTimezone);
    endTimezone = getTimezoneData(startTimezone);

    
}