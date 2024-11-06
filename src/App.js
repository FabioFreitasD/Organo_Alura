import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    { nome: 'Clicheria',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Design-Grafico',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Tintas',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Peças',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Rebobinadeira',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Impressão',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
    {
      nome: 'Engenharia',
      corPrimaria: '#f5a3af',
      corSecundaria: '#FFEEDF'
    },
    {
      nome: 'Gerencia',
      corPrimaria: '#540045',
      corSecundaria: '#f6ebdd'
    },
    {
      nome: 'Diretoria',
      corPrimaria: '#eaff87',
      corSecundaria: '#f6ebdd'
    },
    {
      nome: 'SAC',
      corPrimaria: '#acffe9',
      corSecundaria: '#f6ebdd'
    },
    {
      nome: 'PCP',
      corPrimaria: '#a75293',
      corSecundaria: '#f6ebdd'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovocolaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])             
  }

  return (
    <div className="App">
      <Banner />
      <Formulario listaDeTimes={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovocolaboradorAdicionado(colaborador)}/>
      
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome}
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

    </div>
  );
}

export default App;
