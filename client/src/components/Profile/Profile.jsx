import React from "react";
import My23 from "../My23/My23";
import chevronImg from "../../assets/Icons/chevron_right-24px.svg";
import "./Profile.scss";
import axios from "axios";
import { API_URL } from "../../utils/utils";

class Profile extends React.Component {
  state = {
    homeList: this.props.homeList,
  };

  componentDidMount() {
    this.setState({ homeList: this.props.homeList });
  }
  componentDidUpdate(prevProps) {
    axios.get(`${API_URL}/profile`).then((response) => {
      if (this.state.homeList !== prevProps.match.params) {
        axios
          .get(`${API_URL}/profile`)
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
      <div className="profile__title profile">
        Welcome to ChromaGene
        <div className="profile__subtitle">My 23
        <img className="profile__arrow" src={chevronImg} alt="" />
        </div>
        <div className="profile__table-body profile__words">
          {this.state.homeList.map((profileObj) => (
            <My23 key={profileObj.id} single23={profileObj} />
          ))}
        </div>
        <div className="profile__about">
          About: Upload DNA .txt or .csv file create unique art.A SNP
          Single-Nucleotide Polymorphism is a variation of a single nucleotide
          (A, G, C or T).
          <div className="profile__buttons">
            <button className="profile__button-upload" type="submit">
              {" "}
              UPLOAD{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
/*  <canvas id="kanvas" />
        <iframe
          id="phrame"
          title="playbox3"
          src="https://shaderpark.netlify.com/embed/-MWzRDAljWc9zYg1Y_xK"
          frameBorder="0"
          style={{ top: "15px" }}
        ></iframe>*/

