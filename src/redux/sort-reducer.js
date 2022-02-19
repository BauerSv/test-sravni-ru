const RATE = 'RATE';

let initialState = {

};

function byRate(sort) {
    if(sort) {
        return (a, b) => a.rate.periods[0].rate.from > b.rate.periods[0].rate.from ? 1 : -1;
    }
}

const sortReducer = (state=initialState, action) => {

    switch (action.type) {
        case RATE: state.byRate()

    }
}
