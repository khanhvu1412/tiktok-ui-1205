const routes = {
    home: '/',
    following: '/following',
    profile: '/:nickname',
    // Không cho @ vào /:nickname đc sẽ lỗi 
    upload: '/upload',
    search: '/search',
}

export default routes;