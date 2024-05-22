import React, { useState } from 'react';
import './style.css';

const Checklist = () => {
  const [data, setData] = useState([
    {
      id: 1,
      nome: 'Obter o e-mail da definição da avaliação',
      feito: false,
      naoSeAplica: false,
      data: '2024-05-22',
      responsavel: 'João',
      observacao: ''
    },
    {
      id: 2,
      nome: 'Obter os documentos da avaliação EP02 e EP05',
      feito: false,
      naoSeAplica: false,
      data: '2024-05-22',
      responsavel: 'Maria',
      observacao: ''
    },
    {
      id: 3,
      nome: 'Obter os documentos da avaliação P12 e P13',
      feito: false,
      naoSeAplica: false,
      data: '2024-05-22',
      responsavel: 'Carlos',
      observacao: ''
    },
    {
      id: 4,
      nome: 'Recebimento da tabela TB_BASE_IMPORTACAO criticada da equipe T2',
      feito: false,
      naoSeAplica: false,
      data: '2024-05-22',
      responsavel: 'Ana',
      observacao: ''
    },
    {
      id: 5,
      nome: 'Recebimento do relatório de crítica pertinente da equipe T2',
      feito: false,
      naoSeAplica: false,
      data: '2024-05-22',
      responsavel: 'Pedro',
      observacao: ''
    },
    {
      id: 6,
      nome: 'Selecionar o publico alvo de acordo com a documentação obtida da avaliação',
      feito: false,
      naoSeAplica: false,
      data: '2024-05-22',
      responsavel: 'Laura',
      observacao: ''
    },
  ]);

  const handleChange = (id, field, value) => {
    setData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <div>
      <h3>Checklist de Obtenção dos documentos e da tabela de importação (PL_SUJEITO)</h3>
      <table>
        <thead>
          <tr>
            <th>Ordem</th>
            <th>Itens</th>
            <th>Feito</th>
            <th>N/A</th>
            <th>Observação</th>
            <th>Data</th>
            <th>Responsável</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td className='ordem'>{item.id}</td>
              <td className='Itens'>{item.nome}</td>
              <td className='Feito'>
                <input
                  type="checkbox"
                  checked={item.feito}
                  onChange={e => handleChange(item.id, 'feito', e.target.checked)}
                />
              </td>
              <td className='N/A'>
                <input
                  type="checkbox"
                  checked={item.naoSeAplica}
                  onChange={e => handleChange(item.id, 'naoSeAplica', e.target.checked)}
                />
              </td>
              <td className='Observação'>
                <input
                  type="text"
                  value={item.observacao}
                  onChange={e => handleChange(item.id, 'observacao', e.target.value)}
                />
              </td>
              <td className='Data'>
                <input
                  type="date"
                  value={item.data}
                  onChange={e => handleChange(item.id, 'data', e.target.value)}
                />
              </td>
              <td className='Responsavel'>
                <input
                  type="text"
                  value={item.responsavel}
                  onChange={e => handleChange(item.id, 'responsavel', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Checklist;
