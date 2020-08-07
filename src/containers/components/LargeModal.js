import React, { useState } from 'react';

function LargeModal(){

  const [numOfHoles, setNumOfHoles] = useState("18")

  const handleSelectChange = (e) => {
    setNumOfHoles(e.target.value)
  }

  return(
    <div className="large-modal">
      <div className="large-modal-exit text-success">X</div>
      <form>
        <div className="add-course">
          <h2 className="text-success">New Golf Course Info</h2>
          <div className="course-info text-success">
            <div><label htmlFor="courseName" type="text">Course Name:</label></div>
            <div><input name="courseName" className="course-name text-success" required/></div>
            <div><label htmlFor="numOfHoles">Number of Holes:</label></div>
            <select name="numOfHoles" id="numOfHoles" className="holes text-success" onChange={handleSelectChange} required>
              <option></option>
              <option>18</option>
              <option>27</option>
              <option>36</option>
            </select>
            <div><label htmlFor="courseRating" type="text">Course Rating:</label></div>
            <div><input name="courseRating" className="course-rating text-success" required/></div>
            <div><label htmlFor="courseSlope" type="text">Course Slope:</label></div>
            <div><input name="courseSlope" className="course-slope text-success" required/></div>
          </div>
          <h2 className="scorecard-header text-success">Enter Scorecard</h2>
          {
            (numOfHoles === "18" || numOfHoles === "") ? (
              <div className="scorecard-table-18 text-success">
                <div><label htmlFor="holeName" type="text">Hole Name:</label><input name="holeName" className="course-name text-success" required/></div>
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">Hole</th>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                      <td>7</td>
                      <td>8</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <th scope="row">Par</th>
                      <td><input type="number" min="3" max="5" required/></td>
                      <td><input type="number" min="3" max="5" required/></td>
                      <td><input type="number" min="3" max="5" required/></td>
                      <td><input type="number" min="3" max="5" required/></td>
                      <td><input type="number" min="3" max="5" required/></td>
                      <td><input type="number" min="3" max="5" required/></td>
                      <td><input type="number" min="3" max="5" required/></td>
                      <td><input type="number" min="3" max="5" required/></td>
                      <td><input type="number" min="3" max="5" required/></td>
                    </tr>
                  </tbody>
                </table>
                <div><label htmlFor="holeName" type="text">Hole Name:</label><input name="holeName" className="course-name text-success" required/></div>
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">Hole</th>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                      <td>7</td>
                      <td>8</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <th scope="row">Par</th>
                      <td><input type="number" min="3" max="5" required/></td>
                      <td><input type="number" min="3" max="5" required/></td>
                      <td><input type="number" min="3" max="5" required/></td>
                      <td><input type="number" min="3" max="5" required/></td>
                      <td><input type="number" min="3" max="5" required/></td>
                      <td><input type="number" min="3" max="5" required/></td>
                      <td><input type="number" min="3" max="5" required/></td>
                      <td><input type="number" min="3" max="5" required/></td>
                      <td><input type="number" min="3" max="5" required/></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              (numOfHoles === "27") ? (
                <div className="scorecard-table-27 text-success">
                  <div><label htmlFor="holeName" type="text">Hole Name:</label><input name="holeName" className="course-name text-success" required/></div>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row">Hole</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                      </tr>
                      <tr>
                        <th scope="row">Par</th>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                      </tr>
                    </tbody>
                  </table>
                  <div><label htmlFor="holeName" type="text">Hole Name:</label><input name="holeName" className="course-name text-success" required/></div>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row">Hole</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                      </tr>
                      <tr>
                        <th scope="row">Par</th>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                      </tr>
                    </tbody>
                  </table>
                  <div><label htmlFor="holeName" type="text">Hole Name:</label><input name="holeName" className="course-name text-success" required/></div>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row">Hole</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                      </tr>
                      <tr>
                        <th scope="row">Par</th>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="scorecard-table-36 text-success">
                  <div><label htmlFor="holeName" type="text">Hole Name:</label><input name="holeName" className="course-name text-success" required/></div>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row">Hole</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                      </tr>
                      <tr>
                        <th scope="row">Par</th>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                      </tr>
                    </tbody>
                  </table>
                  <div><label htmlFor="holeName" type="text">Hole Name:</label><input name="holeName" className="course-name text-success" required/></div>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row">Hole</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                      </tr>
                      <tr>
                        <th scope="row">Par</th>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                      </tr>
                    </tbody>
                  </table>
                  <div><label htmlFor="holeName" type="text">Hole Name:</label><input name="holeName" className="course-name text-success" required/></div>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row">Hole</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                      </tr>
                      <tr>
                        <th scope="row">Par</th>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                      </tr>
                    </tbody>
                  </table>
                  <div><label htmlFor="holeName" type="text">Hole Name:</label><input name="holeName" className="course-name text-success" required/></div>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row">Hole</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                      </tr>
                      <tr>
                        <th scope="row">Par</th>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                        <td><input type="number" min="3" max="5" required/></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )
            )
          }
        </div>
       <button type="submit" class="btn btn-success btn-lg">Add Course</button>
      </form>
    </div>
  )
}

export default LargeModal;
