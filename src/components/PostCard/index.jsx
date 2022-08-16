export const PostCard = ({title, cover, body}) => (
   
        <div className="post">
            <img src={cover} alt={title} />

            <div className='posts--content' >
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        </div>
)