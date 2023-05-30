export const getDateFormattedInText = (startingDate: string, finishingDate: string, onCouse: boolean): string => {
    try {
        
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const startingDateParsed: Date = new Date(Date.parse(startingDate));
        const startDateFormattedInText = `${monthNames[startingDateParsed.getMonth()]} de ${startingDateParsed.getFullYear()}`
        let result = `${startDateFormattedInText} - Actualmente`;

        if(!onCouse && finishingDate !== null) {
            const finishingDateParsed: Date = new Date(Date.parse(finishingDate));
            const finishingDateFormattedInText = `${monthNames[finishingDateParsed.getMonth()]} de ${finishingDateParsed.getFullYear()}`;
            result = `${startDateFormattedInText} - ${finishingDateFormattedInText}`;
        }

        return result;

    } catch(err) {
        console.log(err)
        return '';
    }
}