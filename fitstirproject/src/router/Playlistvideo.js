export  default  {
    path : "playlist",
    component : () => import('../views/Playlisvideo/Templelate'),
    children : [
        {
            path : "index",
            name : "PlaylistIndex",
            component : () => import('../views/Playlisvideo/index')
        },
    ]
}