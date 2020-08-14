export  default  {
    path : "video",
    component : () => import('../views/Videoexercise/Templelate'),
    children : [
        {
            path : "index",
            name : "VideoexerciseIndex",
            component : () => import('../views/Videoexercise/index')
        },
    ]
}