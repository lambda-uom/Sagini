import { useLocation } from "react-router-dom";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const OverviewReport = () => {
  const location = useLocation();
  const propsData = location.state;
  return (
    <div className="">
      <h1 className="py-4 result-head card ps-5 ">Overview Report</h1>
      <div className="d-flex justify-content-between ms-5">
        <div className=".emp-name-and-id d-flex py-4 ms-5">
          <Avatar name={`${propsData?.name}`} round />
          <div className="d-flex flex-column ps-4">
            <h2>{propsData?.name}</h2>

            <h4 className="text-secondary ms-2">{propsData?.id}</h4>
          </div>
        </div>
        <div className="select animated zoomIn">
          <input type="radio" name="option" />
          <span className="placeholder">Choose...</span>
          <label className="option">
            <input type="radio" name="option" />
            <span className="title animated fadeIn">
              <Link
                to="/chapterreport"
                className="text-decoration-none text-dark"
                state={{ id: propsData?.id, name: propsData?.name }}
              >
                Chapter report
              </Link>
            </span>
          </label>
          <label className="option">
            <input type="radio" name="option" />
            <span className="title animated fadeIn">Overview Report </span>
          </label>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <table className="overview-table table-primary table-hover table w-50">
          <thead>
            <tr>
              <th>#</th>
              <th>Chapter</th>
              <th>Score</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>React</td>
              <td>78</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Java</td>
              <td>48</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Flutter</td>
              <td>26</td>
            </tr>
            <tr>
              <td>4</td>
              <td>MongoDB</td>
              <td>54</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OverviewReport;
