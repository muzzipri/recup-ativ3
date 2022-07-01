import "./Noticia.css";

function Noticia({numeral, desc}){
    
    return(
        <div className="card">
            <p className="numeral">{numeral}</p>
            <p className="desc">{desc}</p>
        </div>
    );

}
export default Noticia;