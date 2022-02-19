export function byRate(sort) {
    if(sort) {
        return (a, b) => a.rate.periods[0].rate.from > b.rate.periods[0].rate.from ? 1 : -1;
    }
}

export function bySum(sort) {
    if(sort) {
        return (a, b) => a.rate.creditAmount.from > b.rate.creditAmount.from ? 1 : -1;
    }
}

