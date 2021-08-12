import React, { useState, useEffect } from "react";
//import chevronImg from "../../assets/Icons/chevron_right-24px.svg";
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
        <main class="main background-dna">
        <section class="featured emblem">
            <article class="sector sector-featured">
                <div class="my23__partition">
                    <div class="sector__maintitle imgborderround">ChromaGene 
                    <img class="home__arrow " src="https://res.cloudinary.com/chromagene/image/upload/v1628704653/dna/chevron_right-24px_p2z0sa.svg" alt="img"/>
                        <div class="sector__subtitle imgborderround"> Chromosome Data</div> 
                    </div>
                </div>
              <table  id="content" class="my23__table">
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
                      <tr >
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
            </article>
          </section>    
        </main>
    </div>
  );
        }
export default My23;