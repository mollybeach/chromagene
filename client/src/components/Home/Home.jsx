import React, { Component } from "react";
import axios from "axios";
import chevronImg from "../../assets/Icons/chevron_right-24px.svg";
import Framie from "./Framie";
import "./Home.scss";
import { API_URL } from "../../utils/utils";

class Home extends Component {
  state = {
    homeList: this.props.homeList,
  };

  componentDidMount() {
    this.setState({ homeList: this.props.homeList });
  }
  componentDidUpdate(prevProps) {
    axios.get(`${API_URL}/home`).then((response) => {
      if (this.state.homeList !== prevProps.match.params) {
        axios
          .get(`${API_URL}/home`)
          .then((res) => {
            this.setState({
              homeList: res.data,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }

  render() {
    return (
      <>
        <div className="home">
          {" "}
          Welcome to ChromaGene
          <div className="home__subtitle">
            Featured
            <img className="home__arrow" src={chevronImg} alt="img" />
          </div>
          <div className="home__title">ChromeGene</div>
          <div className="home__titleb">Welcome to ChromeGene!</div>
          <div className="home__about">
            Upload DNA .txt or .csv file create unique art to begin your
            journey! A SNP Single-Nucleotide Polymorphism is a variation of a
            single nucleotide (A, G, C or T). I find it fascinating that you can
            get a text file, roughly 25meg big that contains what is essentially
            a diff against a common shared genetic code, it's certainly millions
            of years of progress, but yet can be transferred to your computer in
            a matter of seconds. Maybe at some point in the future bad things
            could happen because of this. But it's worth it for this one simple
            line.Each line corresponds to a single SNP. For each SNP, we provide
            its identifier (an rsid or an internal id), its location on the
            reference human genome, and the genotype call oriented with respect
            to the plus strand on the human reference sequence.
            <div className="home__buttons">
              <button className="home__button-upload" type="submit">
                {" "}
                UPLOAD{" "}
              </button>
            </div>
          </div>
        </div>
      
      <Framie/>
      </>
    );
  }
}

export default Home;

