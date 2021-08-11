import React, { useState, useEffect } from "react";
import chevronImg from "../../assets/Icons/chevron_right-24px.svg";
import "./My23.scss";
const My23 = () => {
  let [my23Api, setMy23Api] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/my23Api")
      .then(response => response.json())
      .then(response => {
        setMy23Api(response);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
        <div className='my23__textbox '>
        <div className="my23__title ">ChromaGene
          <img className="my23__arrow" src={chevronImg} alt="img" />
          </div>
          <div className="my23__subtitle ">Welcome to ChromaGene!</div>
          </div>
        <div className="my23__header">Chromosome Data</div>
      <table  id="content" className="my23__content">
        <thead>
          <tr>
            <th>id</th>
            <th>img</th>
            <th>chromosome</th>
            <th>genotype</th>
            <th>data</th>
            <th>scientificname</th>
            <th>position</th>
            <th>type</th>
            <th>ribosome</th>
          </tr>
        </thead>
        <tbody>
          {my23Api.map(my23 => {
            return (
              <tr key={my23.id}>
                <td>{my23.id}</td>
                <td>{my23.img}</td>
                <td>{my23.chromosome}</td>
                <td>{my23.genotype}</td>
                <td>{my23.data}</td>
                <td>{my23.scientificname}</td>
                <td>{my23.position}</td>
                <td>{my23.type}</td>
                <td>{my23.ribosome}</td>
              </tr>
            );
          }
          )}
        </tbody>
      </table>
    </div>
  );
        }
export default My23;