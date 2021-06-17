export const SETTINGS = {
    url: 'http://localhost:3000',
    imageURL: 'https://image.tmdb.org/t/p/w500/',
    userPermissionURL: 'https://www.themoviedb.org/authenticate/',
    paths: {
        movies: '/movies',
    },
    style: {
        fonts: {
            roboto: "'Roboto', sans-serif",
        },
        colors: {
            primary: '#0D253F',
            secondary: '#01B4E4',
            tertiary: '#90CEA1',
            light: '#f9f9f9',
        }
    },
    getPermissionURL(requestToken) {
        return `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${this.url}`;
    },
}