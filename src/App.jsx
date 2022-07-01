import Title from './Title';
import Noticia from './Noticia';
import "./App.css"
function App() {

    const lista_noticias = [
      {
        numero:"1",
        description: "Funcionária que denunciou procurador diz que agressor 'desprezava mulheres' e teme sair na rua;'Muito medo'"
      },
      {
        numero: "2",
        description: "Imposto de Renda 2022: Receita abre consultas ao 2° lote de restituição nesta quinta; veja se você está no grupo"
      },
      {
        numero: "3",
        description: "Governo opera para evitar CPI do MEC, que ganhou força após prisão de Milton Ribeiro"
      },
      {
        numero: "4",
        description: "Em Itajubá, assaltantes armados atacam agência da Caixa Econômica Federal; 7 ficam feridos"
      },{
        numero: "5",
        description: "Almir Sater é 'parado em blitz' e policiais tietam cantor: 'o senhor é o dono dessa chalana?'"
      },
    ];

  return(
    <div className='container'>
      <Title />
      
      { lista_noticias.map( (noticia) => {
        return <Noticia numeral={noticia.numero} desc={noticia.description}/>
      } ) }
    </div>
    
  );
}

export default App;