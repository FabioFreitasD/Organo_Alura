import './ListaSuspensa.css'

//para o react saber o que renderizar precisamos da chave key apontando para item assim ele não irá se perder
const ListaSuspensa = (props) => {

    return (
        <div className='lista-suspensa'>
            <label>{ props.label }</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)} 
            </select>
        </div>
    )
}

export default ListaSuspensa