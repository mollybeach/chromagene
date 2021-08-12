import React from "react";
import { Link } from 'react-router-dom';
//import chevronImg from "../../assets/Icons/chevron_right-24px.svg";
import "./Home.scss";


const Home = () => {
  
    return (
      <div >
      <main className="main background-dna">
      <section className="featured emblem">
          <article className="sector sector-featured">
              <div className="sector__partiton">
                <div className="sector__maintitle imgborderround">ChromaGene 
                          <img className="sector__arrow " src="https://res.cloudinary.com/chromagene/image/upload/v1628704653/dna/chevron_right-24px_p2z0sa.svg" alt="img"/></div>
                          <div className="sector__subtitle imgborderround"> Welcome to ChromaGene!</div> 
                          <a href="/#" className=""><img className="hero__image hide-3 imgborderround"src="https://res.cloudinary.com/chromagene/image/upload/v1628720174/dna/imgs/transparentdnagif_uzrqua.gif" alt="" /></a>
                          <h1 className="sector-title imgborderround"><p>Start your journey by uploading a DNA.txt or.csv file. A SNP (Single-Nucleotide Polymorphism) is a single nucleotide polymorphism (A, G, C or T). a 25-megabyte text file containing which represents a minuscule variation against a common shared source code Even though it represents millions of years of development,the data can be moved to your device in seconds.We provide an identifier (an rsid or an internal id) for each SNP, as well as its position on the reference human genome and the genotype call oriented toward the plus strand on the human reference sequence.</p></h1>
                        <Link to="/upload">  <button className="btn btn--delta " type="submit"><span>Get Started</span></button></Link>
                </div>
                </article>
                <div className="featured-column">
          <article className="sector">
              <div className="sector-card">
                    <h4 className="sidebar-list__label imgborderround">INFO</h4>
                    <a href="/#"><img className="sidebar-list__image"src='https://res.cloudinary.com/chromagene/image/upload/v1628704643/dna/DNA-Circle_ixxq6g.svg' alt="Facial" /></a>
                    <h6 className="sector-date">07.15.21</h6> 
                      <div className="sector__text">
                          <h1 className="sector-title imgborderround"><a href="/#">TEMPLATES</a></h1>
                          <p className="excerpt imgborderround">Homo J est A diu DNA molecule ex parte aut ex toto geneticae materia of an organism. Quo dicitur servo histones Eukaryotic maxime chromosomata includunt packaging adiutus chaperone servo obligant et conprehensa DNA moleculae servare integrit</p>
                          <p className="sector-link-more"><a href="/#">MORE</a></p>
                      </div>
                  </div>
            </article>
            <article className="sector">
                <div className="sector-card ">
                    <h4 className="sidebar-list__label imgborderround">DATA</h4>
                    <img  className="sidebar-list__image imgborderround" src="https://res.cloudinary.com/chromagene/image/upload/v1628720174/dna/imgs/transparentdnagif_uzrqua.gif" width="256" height="256" alt="" />   
                    <h6 className="sector-date">07.15.21</h6> 
                    <div className="sector__text">
                          <h1 className="sector-title imgborderround"><a href="/#">STUDIES</a></h1>
                          <p className="excerpt imgborderround">Geneticae tamen experientia certissima est vexillum, etiam maior modi est, inter coetus, Patrem omnipotentem sanguis typing, analysis de variis aliorum proteins quod enzymes, vel per humanae leukocyte antigen antigens. Nam paternitas temptationis quae per artes in current Encephalitis (PCR) et Dictyostelium discoideum (RFLP). Temptationis potest fieri paternitas nunc et usque dum femina gravida ducatur a sanguine..</p>
                          <p className="sector-link-more"><a href="/#">MORE</a></p>
                      </div>
                </div>
            </article>
          </div>
        </section>

        <aside className="home-side-col emblem">
        <ul className="sidebar-list"> 
            <li className="sidebar-list__item">
                <h4 className="sidebar-list__label imgborderround">SEQUENCES</h4>
                <a href="/#"><img className="sidebar-list__image imgborderround" src= 'https://res.cloudinary.com/chromagene/image/upload/v1628704643/dna/DNA-Circle_ixxq6g.svg' width="256" height="256" alt="" /> </a>
                <span></span>
            </li>
            <li className="sidebar-list__item">
                <h4 className="sidebar-list__label imgborderround">DESIGNS</h4>
                <a href="/#"><img className="sidebar-list__image imgborderround" src="https://res.cloudinary.com/chromagene/image/upload/v1628719490/dna/snpnoback/ACLIGHTVIOLET15_eifkto.png" width="256" height="256" alt="" /></a>
                <span></span>
            </li>
            <li className="sidebar-list__item">
                <h4 className="sidebar-list__label imgborderround">PROJECTS</h4>
                <a href="/#"><img className="sidebar-list__image imgborderround" src='https://res.cloudinary.com/chromagene/image/upload/v1628720585/dna/imgs/jellybeantransparent_xaibze.gif' width="256" height="256" alt="" /></a>
                <span></span>
            </li>
            <li className="sidebar-list__item">
                <h4 className="sidebar-list__label">TESTIMONALS</h4>
                <a href="/#"><img className="sidebar-list__image" src="https://res.cloudinary.com/chromagene/image/upload/v1628720461/dna/imgs/glslgiftransparent_zrqwxu.gif" width="196" height="196" alt="" /> </a>
                <span></span>
            </li>
            <li className="sidebar-list__item">
                <h4 className="sidebar-list__label"> ABOUT US</h4>
                <img  className="sidebar-list__image" src="https://res.cloudinary.com/chromagene/image/upload/v1628719491/dna/snpnoback/CClightblue2_vyxfrn.png"width="256" height="256" alt="" />
                <li className="sidebar-list__item">
                    <h1 className="sector-title"><a href="/#"> ChromaGene </a></h1>
                    <p className="excerpt">Adenin, Guanin, Cytosin und Thymin. Das Aufkommen schneller DNA-Sequenzierungsmethoden hat die biologische und medizinische Forschung und Entdeckung stark beschleunigtAntikörperrepertoire charakterisieren und kann als Leitfaden für die Patientenbehandlung verwendet werden. Die schnelle DNA-Sequenzierung ermöglicht eine schnellere und individuellere medizinische Versorgung sowie die Identifizierung und Katalogisierung von mehr Organismen</p>
                </li>
            </li>
                <p className="sector-link-more"><a href="/#">MORE</a></p>
                <li className="sidebar-list__item"></li>
        </ul>
    </aside>
      <div className="slider">
          <h2 className="slider__title">more creations</h2>
          <div className="shop-list">
              <div className="shop">
              <button className="slider__button"type="button" name="button"><img src="https://res.cloudinary.com/dmoo9az8w/image/upload/v1475715813/arrow_left_h5ibyg.svg" alt="arrow"/></button>
              <div className="shop-list__item hide-1">
                  <a href="/#"><img  src="https://res.cloudinary.com/chromagene/image/upload/v1628719490/dna/snpnoback/ACLIGHTVIOLET15_eifkto.png"  width="290" height="256" alt="dna"/></a>
              </div>
              <div className="shop-list__item">
                  <a href="/#"><img src="https://res.cloudinary.com/chromagene/image/upload/v1628720538/dna/imgs/chromosome2_joxlju.png"  alt="chromosome2" /></a>
              </div>
              <div className="shop-list__item hide-2"> 
                  <a href="/#"><img src="https://res.cloudinary.com/chromagene/image/upload/v1628719490/dna/snpnoback/GGLIGHTGREEN21_o0hgvt.png" width="290" height="256" alt=""/></a>
              </div>
              </div>
          </div>
      </div>    
  </main>
</div>
    );
  
};

export default Home;
  
  