const routes = {
    home: '/',
    following: '/following',
    profile: '/:nickname',
    // Không cho @ vào /:nickname đc sẽ lỗi 
    upload: '/upload',
    search: '/search',
    live: '/live',
}

export default routes;