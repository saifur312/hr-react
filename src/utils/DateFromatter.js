

import { format } from 'date-fns';

export const dateFormatter = (date) => {
    //const parsedDate = parseISO(dobStr);

    //return format(date, 'dd/MM/yyyy', { awareOfUnicodeTokens: true });
    const formattedDate = format(date, 'dd-MM-yyyy');
    return formattedDate.toString();
};

export const timeFormatter = (time) => {
    const formattedDate = format(time, 'HH:mm');
    return formattedDate.toString();
};
