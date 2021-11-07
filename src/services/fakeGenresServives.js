export const genres =[
    { _id:'1a', name: 'Ation'},
    { _id:'1b', name: 'Comedy'},
    { _id:'1c', name: 'Thriller'},
]

export function getGenres() {
    return genres.filter(g => g);
} 