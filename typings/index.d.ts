
/**
 * Returns a decomposed version of the given timezone
 * @param timezone The timezone to decompose into `TimezoneData`
 */
export function getTimezoneData(timezone: string): TimezoneData;

export interface TimezoneData {
    timezone: string;
    timezoneType: string;
    type: '+' | '-';
    number: number;
}

export interface TimezoneAbbreviations {
    AEST: "UTC+10",
    ACST: "UTC+9:30",
    AFT: "UTC+4:30",
    AKST: "UTC-9",
    AST: "UTC-4",
    AWST: "UTC+9",
    CAT: "UTC+2",
    CET: "UTC+1",
    CST: "UTC-6",
    EAT: "UTC+3",
    EET: "UTC+2",
    EST: "UTC-5",
    MSK: "UTC+3",
    MST: "UTC-7",
    PST: "UTC-8",
    WAT: "UTC+1",
    WET: "UTC+0"
}