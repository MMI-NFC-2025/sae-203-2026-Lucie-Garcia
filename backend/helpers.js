const options = {
    day: "numeric",
    month: "long",
    //year: "numeric",
    hour: "numeric",
    minute: "numeric",
    //hour12: false,
    timeZone: "Europe/Paris",
};

const timeFormatter = new Intl.DateTimeFormat("fr-FR", { hour: "numeric", minute: "numeric" });
const dateFormatter = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" });

const formatter = new Intl.DateTimeFormat("fr-FR", options);

export function formatDate(dateString) {
    const date = new Date(dateString);

    const formattedDate = formatter.format(date);

    return formattedDate;
}

export function formatTime(dateString) {
    const date = new Date(dateString);

    const formattedTime = timeFormatter.format(date);

    return formattedTime;
}

export function formatDay(dateString) {
    const date = new Date(dateString);

    const formattedDay = dateFormatter.format(date);

    return formattedDay;
}