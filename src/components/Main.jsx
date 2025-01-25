import restaurentFood from '/restauranfood.jpg';

export default function Main() {
    return(
        <main >
            <div className="main">
                <div className="bg">
                <div className="hero">
                    <div className="details">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button type="button"> Reserve a Table</button>
                    </div>
                        <img className='hero-img' src={restaurentFood} alt="" />
                    </div>   
                </div>
                
            </div>
            
            
        </main>
    )
};