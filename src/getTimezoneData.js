const { TimezoneAbbreviations } = require('./Util/Constants');
module.exports = getTimezone = (timezone = '') => {

    if (TimezoneAbbreviations[timezone]) {
        timezone = TimezoneAbbreviations[timezone];
    }
    //UTC+# || UTC-#
    const timezoneType = timezone.substring(0, 3);
    const type = timezone.substring(3, 4);// + or -
    const number = timezone.substring(4, timezone.length)
   
    return {
        timezone,
        timezoneType,
        type,
        number
    }
}