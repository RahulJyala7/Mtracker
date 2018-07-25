import React from 'react';


export default class TimeLine2 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <div className="timeline">
                  <div className="timeline__group">
                    <span className="timeline__year">2008</span>
                    <div className="timeline__box">
                      <div className="timeline__date">
                        <span className="timeline__day">2</span>
                        <span className="timeline__month">Feb</span>
                      </div>
                      <div className="timeline__post">
                        <div className="timeline__content">
                          <p>Heading toward Noida</p>
                        </div>
                      </div>
                    </div>
                    <div className="timeline__box">
                      <div className="timeline__date">
                        <span className="timeline__day">1</span>
                        <span className="timeline__month">Sept</span>
                      </div>
                      <div className="timeline__post">
                        <div className="timeline__content">
                        <p>Heading Toward DND</p>          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline__group">
                    <span className="timeline__year">2014</span>
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
                    <span className="timeline__year">2016</span>
                    <div className="timeline__box">
                      <div className="timeline__date">
                        <span className="timeline__day">28</span>
                        <span className="timeline__month">Aug</span>
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
