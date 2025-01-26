import restaurentFood from '/restauranfood.jpg';
import bruchetta from '/bruchetta.svg';
import greekSalad from '/greek salad.jpg'
import lemon from '/lemon dessert.jpg'

export default function Main() {
    return(
        <main >
            <div className="main">
                <section className="bg">
                <div className="hero">
                    <div className="details">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button type="button"> Reserve a Table</button>
                    </div>
                        <img className='hero-img' src={restaurentFood} alt="" />
                    </div>   
                </section>
                <section className="menu">
                    <div className="special">
                        <h2>This weeks specials!</h2>
                        <button type="button">Menu</button>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <img src={greekSalad} alt="" />
                            <div className="info">
                            <div className="heading">
                                <h3>Greek Salad</h3>
                                <p>$12.99</p>
                            </div>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                            <h3> Order a delivery <img src='/Delivery van.png' alt='Delivery van' style={{width:'24px', height:'24px'}} /></h3>
                            </div>
                        </div>
                        <div className="card">
                            <img src={bruchetta} alt="" />
                            <div className="info">
                            <div className="heading">
                                <h3>Bruchetta</h3>
                                <p>$5.99</p>
                            </div>
                            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                            <h3> Order a delivery <img src='/Delivery van.png' alt='Delivery van' style={{width:'24px', height:'24px'}} /></h3>
                            </div>
                        </div>
                        <div className="card">
                            <img src={lemon} alt="" />
                            <div className="info">
                            <div className="heading">
                                <h3>Lemon Dessert</h3>
                                <p>$5.00</p>
                            </div>
                            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <h3> Order a delivery <img src='/Delivery van.png' alt='Delivery van' style={{width:'24px', height:'24px'}} /></h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="feedback">
                    <div className='row'>
                        <h2>What our customers say!</h2>
                    </div>
                </section>
            </div>
            
            
        </main>
    )
};