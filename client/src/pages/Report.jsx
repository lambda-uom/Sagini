import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

const Report = () => {
  const { employee } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  const routeToChapterReport = (empId, firstName, lastName) => {
    navigate("/chapterreport", {
      state: { empId: empId, firstName: firstName, lastName: lastName },
    });
  };
  const routeToRatingsReport = (empId, firstName, lastName) => {
    navigate("/ratings", {
      state: { empId: empId, firstName: firstName, lastName: lastName },
    });
  };

  return (
    <>
      <h1 className="py-4 result-head card ps-5">Employee Report</h1>
      <div className="d">
        <div className="container-md ">
          <ul className="nav nav-tabs ms-5">
            <li className="nav-item">
              <a
                className={`nav-link ${show ? "active" : ""}`}
                aria-current="page"
                href="#hired-employee"
                onClick={() => setShow(true)}
              >
                Hired Employees
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${show ? "" : "active"}`}
                href="#content-creator"
                onClick={() => setShow(false)}
              >
                Content Creators
              </a>
            </li>
          </ul>
          <div className=" justify-content-end ">
            <form className=" d-flex justify-content-end w-100 mt-5">
              <input
                className="form-control me-2 w-25"
                type="text"
                placeholder="Search Name"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={() => setShowSearch(false)}
              >
                Search
              </button>
            </form>
          </div>

          <table className=" empTable table table-striped table-hover mt-sm-5 mt-lg-5 ">
            <thead>
              <tr className="table-head">
                <th>ID</th>
                <th>Name</th>
                <th>Job Title</th>
              </tr>
            </thead>
            <tbody>
              {employee
                .filter((emp) => {
                  let name = emp.firstName + " " + emp.lastName;
                  if (showSearch) {
                    return emp;
                  } else if (
                    name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return emp;
                  }
                })
                .map((emp, index) => (
                  <tr
                    key={index}
                    onClick={() =>
                      routeToChapterReport(
                        emp.empId,
                        emp.firstName,
                        emp.lastName
                      )
                    }
                  >
                    <td>{emp.empId}</td>
                    <td>
                      {emp.firstName} {emp.lastName}
                    </td>
                    <td>{emp.jobTitle}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Report;
