

export default function Hero(){
    return(
        <section className="hero">
        <img src={require("../images/photo-grid.png")} clasName="hero--photo"/>
        <h1 clasName="hero--header">Online Experiences</h1>
        <p clasName="hero--text">Join unique interactivities led by one-of-a-kind host-all without leaving home.</p>
        </section>
    )
}