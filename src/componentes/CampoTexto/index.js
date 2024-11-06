import './CampoTexto.css'

//usando a props como argumento da arrow function podemos imprimir na tela o que recebemos nessa propriedade la no app.js
// com onchange toda vez que o usuario digitar algo estaremos ouvindo e podemos capturar o valor e armazenar para usar depois
// para pegar o valor digitado que estamos observando com o onchange vamos usar o evento.target.value
// para armazenar os valores digitados no form devemos usar o useState
const CampoTexto = (props) => {

    const placeholderModificada = `${ props.placeholder }...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label> 
                { props.label } 
            </label> 
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={ placeholderModificada }/>
        </div>
    )
}

export default CampoTexto