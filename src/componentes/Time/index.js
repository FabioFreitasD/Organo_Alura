import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const corDeFundo = { backgroundColor: props.corSecundaria }
    const sublinhado = { borderColor: props.corPrimaria }
    
    //se colaboradores estiver vazio vai esconder se tiver algem vai retornar com props.colaboradores.length > 0
    return (
        (props.colaboradores.length > 0) ? <section className='time' style={corDeFundo} >
            <h3 style={ sublinhado }>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={ colaborador.cargo } imagem={colaborador.iamgem}/> )}
            </div>
        </section>
        : ''
    )
}

export default Time