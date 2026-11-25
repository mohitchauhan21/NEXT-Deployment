export default function Blog({ params }) {
    return(
        <div>
            <h1>Blog Page</h1>
            <p>Blog ID: {params.id}</p>
            
        </div>
    );
}