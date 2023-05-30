export const getDateFormattedInText = (startingDate: string, finishingDate: string, onCouse: boolean): string => {
    try {
        
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let startDateFormattedInText = '';
        let finishingDateFormattedInText = '';
        
        if(startingDate !== null && startingDate !== 'No disponible') {
            const startingDateParsed: Date = new Date(Date.parse(startingDate));
            console.log(startingDateParsed)
            startDateFormattedInText = `${monthNames[startingDateParsed.getMonth()]} de ${startingDateParsed.getFullYear()}`
        }  

        if(finishingDate !== null) {
            const finishingDateParsed: Date = new Date(Date.parse(finishingDate));
            finishingDateFormattedInText = `${monthNames[finishingDateParsed.getMonth()]} de ${finishingDateParsed.getFullYear()}`;

        }

        if(onCouse) finishingDateFormattedInText = 'Actualmente';

        return `${startDateFormattedInText} - ${finishingDateFormattedInText}`;


    } catch(err) {
        console.log(err)
        return '';
    }
}