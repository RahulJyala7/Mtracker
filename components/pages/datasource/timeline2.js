import React from 'react';


export default class TimeLine2 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <div className="timeline">
                  <div className="timeline__group">
                    <span className="timeline__year">2018</span>
                    <div className="timeline__box">
                      <div className="timeline__date">
                        <span className="timeline__day">2</span>
                        <span className="timeline__month">July</span>
                      </div>
                      <div className="timeline__post">
                        <div className="timeline__content">
                          <p>Heading toward Noida</p>
                        </div>
                      </div>
                    </div>
                    <div className="timeline__box">
                      <div className="timeline__date">
                        <span className="timeline__day">3</span>
                        <span className="timeline__month">July</span>
                      </div>
                      <div className="timeline__post">
                        <div className="timeline__content">
                        <p>Heading Toward DND</p>          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline__group">
                    <span className="timeline__year">2018</span>
                    <div className="timeline__box">
                      <div className="timeline__date">
                        <span className="timeline__day">14</span>
                        <span className="timeline__month">Jul</span>
                      </div>
                      <div className="timeline__post">
                        <div className="timeline__content">
                        <p>
                            Stoped
                        </p> </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline__group">
                    <span className="timeline__year">2018</span>
                    <div className="timeline__box">
                      <div className="timeline__date">
                        <span className="timeline__day">25</span>
                        <span className="timeline__month">July</span>
                      </div>
                      <div className="timeline__post">
                        <div className="timeline__content">
                         <p>headling toward next container</p> </div>
                      </div>
                    </div>
                  </div>
                </div>
          
        )
    }
}
