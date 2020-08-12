import React, { useState, useEffect } from 'react';

function AddCourse(){

  const [numOfHoles, setNumOfHoles] = useState("18")

  useEffect(() => {
    document.addEventListener("keydown", function(e){
      if(e.keyCode === 27){
        document.querySelector(".addcourse-modal").style.visibility = "hidden"
        document.querySelector("#course-form").reset()

        document.querySelector(".new-round-modal").style.visibility = "hidden"
        document.querySelector("#new-round-form").reset()

        document.querySelector(".carousel-indicators").style.visibility = "visible";
      }
    })
  })

  const handleSelectChange = (e) => {
    setNumOfHoles(e.target.value)
  }

  const closeModal = (e) => {
    e.target.parentElement.style.visibility = "hidden";
    document.querySelector("#course-form").reset()
    document.querySelector(".carousel-indicators").style.visibility = "visible";
  }

  const submitData = (e) => {
    e.preventDefault()
    console.log("Data Saved!")
  }

  const clearInputFields = (e) => {
    const response = window.confirm("Are you sure?")
    if(response === true){
      document.querySelector("#course-form").reset()
    }
  }

  return(
    <div className="addcourse-modal bg-light">
      <div className="addcourse-modal-exit text-success" onClick={closeModal}>X</div>
      <form id="course-form">
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
            <div><input name="courseRating" type="number" className="course-rating text-success" required/></div>
            <div><label htmlFor="courseSlope" type="text">Course Slope:</label></div>
            <div><input name="courseSlope" type="number" className="course-slope text-success" required/></div>
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
                      <td><input type="number" name="par" min="3" max="5" required/></td>
                      <td><input type="number" name="par" min="3" max="5" required/></td>
                      <td><input type="number" name="par" min="3" max="5" required/></td>
                      <td><input type="number" name="par" min="3" max="5" required/></td>
                      <td><input type="number" name="par" min="3" max="5" required/></td>
                      <td><input type="number" name="par" min="3" max="5" required/></td>
                      <td><input type="number" name="par" min="3" max="5" required/></td>
                      <td><input type="number" name="par" min="3" max="5" required/></td>
                      <td><input type="number" name="par" min="3" max="5" required/></td>
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
                      <td><input type="number" name="par" min="3" max="5" required/></td>
                      <td><input type="number" name="par" min="3" max="5" required/></td>
                      <td><input type="number" name="par" min="3" max="5" required/></td>
                      <td><input type="number" name="par" min="3" max="5" required/></td>
                      <td><input type="number" name="par" min="3" max="5" required/></td>
                      <td><input type="number" name="par" min="3" max="5" required/></td>
                      <td><input type="number" name="par" min="3" max="5" required/></td>
                      <td><input type="number" name="par" min="3" max="5" required/></td>
                      <td><input type="number" name="par" min="3" max="5" required/></td>
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
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
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
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
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
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
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
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
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
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
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
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
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
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                        <td><input type="number" name="par" min="3" max="5" required/></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )
            )
          }
        </div>
       <button type="submit" className="submit btn btn-success btn-lg mr-4" onSubmit={submitData}>Add Course</button>
       <button type="button" className="reset-fields btn btn-success btn-lg ml-4" onClick={clearInputFields}>Clear All</button>
      </form>
    </div>
  )
}

export default AddCourse;
