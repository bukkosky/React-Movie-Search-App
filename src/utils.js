
export const ratingNames = [
    'Not rated yet',
    'very poor',
    'poor',
    'avg',
    'good',
    'very good',
];

export const getStats = data => data.reduce((prev, current) => {
    const ratingName = ratingNames[current.rating]

    if(prev[ratingName]) {
        prev[ratingName] += 1
    }else {
        prev[ratingName] = 1
    }
    return prev
}, {});
