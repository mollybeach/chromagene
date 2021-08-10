import React, { Component } from "react";
import axios from "axios";
import chevronImg from "../../assets/Icons/chevron_right-24px.svg";
import "./My23.scss";
require('dotenv').config();

class My23 extends Component {
  state = {
    my23Data: this.props.my23Data,
  };
  componentDidMount() {
    this.setState({ my23Data: this.props.my23Data });
  }
  componentDidUpdate(prevProps) {
    axios.get(process.env.REACT_APP_API_URL + "/my23Api")
    .then((response) => {
      if (this.state.my23Data !== prevProps.match.params) {
        axios.get(process.env.REACT_APP_API_URL + "/my23Api")
          .then((res) => {
            this.setState({
              my23Data: res.data,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }
  newTable() {
    let arr = this.state.my23Data;
    return !arr
      ? null
      : arr.map((item, index) => {
          const { id, img, chromosome, genotype, data } = item;
          const { scienticname, position, type, ribosome } = item.contact;
          return (
            <tr key={id}>
              <td>
                <img src={img} alt="" className="my23__img" />
              </td>
              <td>{chromosome}</td>
              <td>{genotype}</td>
              <td>{data}</td>
              <td>{scienticname}</td>
              <td>{position}</td>
              <td>{type}</td>
              <td>{ribosome}</td>
            </tr>
          );
        });
  }
  render() {
    return (
      <div>
         <div className='my23__textbox '>
         <div className="my23__title ">ChromaGene
          <img className="my23__arrow" src={chevronImg} alt="img" />
          </div>
          <div className="my23__subtitle ">Welcome to ChromaGene!</div>
          </div>
        <div className="my23__header">Chromosome Data</div>
        <table id="content" className="my23__content">
          <tbody>{this.newTable()}</tbody>
        </table>
      </div>
    );
  }
}
export default My23;
