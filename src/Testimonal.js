import React from 'react'
import './Testimonal.css'
function Testimonal() {
    return (
        <div className="testimonals" id="testimonals">
            <div className="quote__icon">
                <i class="fa fa-quote-left" aria-hidden="true"></i>
            </div>
            <div className="quotes">
                <div className="first__quote">
                  <p>  “Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”</p>
                    <h3>- Martin Flower</h3>
                 </div>
                 <div className="first__quote">
                  <p>  
            “The best programs are written so that computing machines can perform them quickly and so that human beings can understand them clearly. A programmer is ideally an essayist who works with traditional aesthetic and literary forms as well as mathematical concepts, to communicate the way that an algorithm works and to convince a reader that the results will be correct.”</p>
                    <h3>― Donald E. Knuth, Selected Papers on Computer Science</h3>
                 </div>
            </div>
        </div>
    )
}
export default Testimonal
