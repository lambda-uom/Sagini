import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

const Report = () => {
  const { employee } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [show, setShow] = useState(true);
  const [userRole] = useState("Supervisor");
  const [isSupervisor, setIsSupervisor] = useState(true);
  useEffect(() => {
    if (userRole == "Supervisor") {
      setIsSupervisor(true);
    } else if (userRole == "Content creator") {
      setIsSupervisor(false);
    }
  }, []);

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
        {isSupervisor == true ? (
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
            <div id="content-creator" className="mt-2">
              <form className="d-flex justify-content-end ">
                <input
                  className="form-control me-2"
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
            {show ? (
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
            ) : (
              <table className=" empTable table table-striped table-hover mt-sm-5 mt-lg-5">
                <thead>
                  <tr className="table-head">
                    <th>ID</th>
                    <th className="">Name</th>
                    <th>Job Title</th>
                  </tr>
                </thead>
                <tbody>
                  <>
                    {employee
                      .filter((emp) => {
                        let name = emp.firstName + emp.lastName;
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
                            routeToRatingsReport(
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
                  </>
                </tbody>
              </table>
            )}
          </div>
        ) : (
          <div className="container-md ">
            <ul className="nav nav-tabs ms-5">
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
            <div id="content-creator" className="mt-2">
              <form className="d-flex justify-content-end ">
                <input
                  className="form-control me-2"
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
            {show ? (
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
                      let name = emp.firstName + emp.lastName;
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
            ) : (
              <table className=" empTable table table-striped table-hover mt-sm-5 mt-lg-5">
                <thead>
                  <tr className="table-head">
                    <th>ID</th>
                    <th className="">Name</th>
                    <th>Job Title</th>
                  </tr>
                </thead>
                <tbody>
                  <>
                    {employee
                      .filter((emp) => {
                        let name = emp.firstName + emp.lastName;
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
                            routeToRatingsReport(
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
                  </>
                </tbody>
              </table>
            )}
          </div>
        )}
        {/* <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          width="773"
          height="612"
          viewBox="0 0 773 612"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M850.4211,442.927l32.63119-35.49645-26.706-21.07259-13.19279,29.16777-59.85542,19.77364a11.99113,11.99113,0,1,0,3.85641,17.25776Z"
            transform="translate(-213.5 -144)"
            fill="#ffb6b6"
          />
          <path
            d="M910.23781,362.72613c5.91493,13.18947-30.17271,50.86966-30.17271,50.86966-9.86955,7.98163-11.43422,27.95951-23.66746,30.18374-33,6-12.47561-.27862-21,3-8.02175,3.08529-.63334-23.32158-6-25-3.06911-.95987,14-12,14-12s15.38283-30.16748,24.84111-45.81544a30.64419,30.64419,0,0,1,25.32877-15.25847S904.32285,349.53668,910.23781,362.72613Z"
            transform="translate(-213.5 -144)"
            fill="#e6e6e6"
          />
          <path
            d="M757.45673,754.81488H382.499a33.5588,33.5588,0,0,1-33.5209-33.52087V177.5209A33.55882,33.55882,0,0,1,382.499,144H757.45673a33.5588,33.5588,0,0,1,33.52087,33.5209V721.294A33.55885,33.55885,0,0,1,757.45673,754.81488Z"
            transform="translate(-213.5 -144)"
            fill="#3f3d56"
          />
          <path
            d="M758.1167,733.4278H381.839a10.345,10.345,0,0,1-10.33319-10.3332V175.72026A10.345,10.345,0,0,1,381.839,165.38707H758.1167a10.345,10.345,0,0,1,10.33319,10.33319V723.0946A10.345,10.345,0,0,1,758.1167,733.4278Z"
            transform="translate(-213.5 -144)"
            fill="#fff"
          />
          <path
            d="M400.196,417.2599c1.05037-14.2625,2.78468-31.7964,16.89581-39.41573,6.65845-3.59524,13.70893-2.32332,20.40314.47908,6.46856,2.70794,12.5627,5.93585,19.5296,7.209a56.69026,56.69026,0,0,0,35.241-5.28468,54.16607,54.16607,0,0,0,24.92977-25.51437c2.67184-5.633,4.87982-11.73757,8.81615-16.6538a18.52389,18.52389,0,0,1,17.12456-7.08681c14.79633,1.82667,24.61523,14.7913,36.411,22.42333,5.67289,3.67045,12.18724,6.35048,19.05617,6.02185,7.04576-.33709,13.43255-3.67234,18.8321-8.02664,11.45675-9.23894,17.721-23.52709,29.74471-32.13629a41.19514,41.19514,0,0,1,39.53916-4.20191c12.32294,5.31576,21.04815,17.22645,23.353,30.334a38.96032,38.96032,0,0,1,.42437,9.78081c-.15032,1.92512,2.85044,1.91536,3,0a44.17215,44.17215,0,0,0-15.07446-36.23715c-10.63764-9.177-25.49968-12.15953-39.01706-8.62818a43.23533,43.23533,0,0,0-18.41555,10.1792c-5.56136,5.129-9.94759,11.34335-14.642,17.23377-4.57972,5.74648-9.632,11.2958-16.0599,15.00727a24.80725,24.80725,0,0,1-20.73557,2.35807c-6.93861-2.34062-12.81731-7.16276-18.36864-11.77972-5.72247-4.7593-11.41756-9.52111-18.2958-12.54508-6.39549-2.81172-13.72966-4.17555-20.38691-1.40649-6.00209,2.49655-9.97475,7.67868-12.919,13.28345-2.98866,5.68924-5.11718,11.82387-8.60435,17.249A48.90736,48.90736,0,0,1,498.2217,373.1771a54.78012,54.78012,0,0,1-35.33956,10.097c-6.84117-.486-13.06129-2.64742-19.25621-5.47945-6.83726-3.12568-14.03863-6.37658-21.7318-4.86232-6.63609,1.3062-12.21923,5.8149-16.09561,11.20076-4.47547,6.21822-6.44192,13.84154-7.46832,21.32868-.53695,3.91679-.84393,7.85686-1.13419,11.79815-.14184,1.926,2.85882,1.917,3,0Z"
            transform="translate(-213.5 -144)"
            fill="#e4e4e4"
          />
          <polygon
            points="716.987 596.364 702.742 596.363 695.965 541.418 716.989 541.419 716.987 596.364"
            fill="#ffb6b6"
          />
          <path
            d="M930.10726,735.70841l-15.19932-6.174-.44841-.184-8.393,6.358a17.86958,17.86958,0,0,0-17.85526,17.0964c-.023.2529-.023.51739-.023.7818v.58637h45.93151V735.70841Z"
            transform="translate(-213.5 -144)"
            fill="#2f2e41"
          />
          <polygon
            points="683.627 583.107 670.189 587.835 645.56 538.254 665.392 531.277 683.627 583.107"
            fill="#ffb6b6"
          />
          <path
            d="M895.22382,722.84182l-16.38691-.77921-.48406-.02474-5.8069,8.7833a17.86958,17.86958,0,0,0-11.1686,22.05356c.06223.24621.15.4957.23777.74512l.19463.55313,43.3277-15.24512L899.00888,721.51Z"
            transform="translate(-213.5 -144)"
            fill="#2f2e41"
          />
          <path
            d="M935.52078,503.45349c13.0322-.50537-3.1115,103.34849-3.1115,103.34849s4.7223,91.17944,3.72132,95.96437-.12622,17.69007-.12622,17.69007c-2.55325-4.6471-28.89515-1.13983-28.89515-1.13983l-3.58349-92.41012-18.29605-74.04172-25.3655,49.6313,24.31166,76.18146s9.8455,9.11035,8.79858,12.71055-26.83566,11.71936-31.57464,11.90315-2.5992-5.83187-2.82892-11.75557-22.52965-60.82569-30.3732-79.506-1.74582-45.02029,2.25809-64.16,25.0679-55.05869,25.0679-55.05869C881.67017,463.32037,922.48858,503.95885,935.52078,503.45349Z"
            transform="translate(-213.5 -144)"
            fill="#2f2e41"
          />
          <circle cx="685.55127" cy="162.05023" r="24.85645" fill="#ffb6b6" />
          <path
            d="M886.623,347.33507c-5.355,3.18356-8.55835,9.03292-10.39722,14.98516a142.0083,142.0083,0,0,0-6.10242,33.92893l-7.07371,68.7046-13.652,33.82577c29.19531-2.53425,93.93828,9.36166,93.93828,9.36166s2.40545-.80179,0-3.20728-4.74722-.27435-2.34176-2.67984.74721.27435-.0546-2.13113,0-.80179.80181-1.60364-6.20727-8.01825-6.20727-8.01825l6.41455-42.13666,8.01819-84.993c-9.62189-12.02731-28.97268-19.11734-28.97268-19.11734l-5-9-25,2Z"
            transform="translate(-213.5 -144)"
            fill="#e6e6e6"
          />
          <path
            d="M959.3844,442.358l-6.16847-36.36025L931.75,409.88738l1.88573,31.80434-9.39558,66.20083a11.99112,11.99112,0,1,0,15.6682,8.19816Z"
            transform="translate(-213.5 -144)"
            fill="#ffb6b6"
          />
          <path
            d="M941.65067,357.27688c13.89076,3.99945,19.36275,55.88559,19.36275,55.88559,6.292,25.04128-5.616,35.58679-8.638,35.47662-8.58891-.31311-13.34671-7.6646-18.0935-4.65028-2.71462,1.72383-3.22167-18.08506-3.22167-18.08506s-9.74017-18.43066-15.58211-35.75664a30.6442,30.6442,0,0,1,4.7027-29.19336S927.75992,353.27747,941.65067,357.27688Z"
            transform="translate(-213.5 -144)"
            fill="#e6e6e6"
          />
          <path
            d="M927.49412,298.45407c-.08172-4.03775-.53943-9.2034-3.36751-13.32291-2.38666-3.46558-7.20091-6.21189-11.68819-4.83874a4.85958,4.85958,0,0,0-2.41939-4.47909,12.76551,12.76551,0,0,0-5.54983-1.3977c-4.55269-.425-9.26885-.8664-13.8787.00818-5.17388.98084-9.40779,3.64538-11.60648,7.31535l-.049.11439-.44953,2.1742a2.0638,2.0638,0,0,1-1.0217,1.38952,2.0281,2.0281,0,0,1-1.72466.12257,1.87211,1.87211,0,0,0-2.50929,2.02708l.12262.86639-1.29957-.24524a1.86654,1.86654,0,0,0-2.10061,2.493l.35964.989a2.00066,2.00066,0,0,0-1.43037.62939,1.82861,1.82861,0,0,0-.24525,2.14147,17.01108,17.01108,0,0,0,5.99942,6.03209,14.143,14.143,0,0,0,3.57184,1.52845q.39234.11038.80918.19616a84.23836,84.23836,0,0,0,30.5283.91544,17.29319,17.29319,0,0,0-.67842,6.17921,6.49,6.49,0,0,0,3.89881,5.4763,8.17511,8.17511,0,0,0,1.42219.34328,8.77312,8.77312,0,0,1,1.365.33514,3.97518,3.97518,0,0,1,1.16063,6.80041s2.14147,1.77365,2.41122,1.68376a5.50348,5.50348,0,0,0,2.51747-2.23955C925.72047,315.82289,927.69028,308.009,927.49412,298.45407Z"
            transform="translate(-213.5 -144)"
            fill="#2f2e41"
          />
          <path
            d="M276.29766,673.35948l-2.92,14.65c-.22,1.12-.45,2.26-.7,3.39a14.28762,14.28762,0,0,0-7.34.41,68.51085,68.51085,0,0,1,5.04,8.43c-1.84,5.67-4.54,10.91-9.06,14.7a22.71967,22.71967,0,0,1-21.95,3.86l.13-.58c-4.86-9.43-2.22-21.32,3.82-30.03a58.38488,58.38488,0,0,1,10.85-11.47c4.07995-3.4,8.49-6.45,12.86-9.46A5.99007,5.99007,0,0,1,276.29766,673.35948Z"
            transform="translate(-213.5 -144)"
            fill="#e4e4e4"
          />
          <path
            id="a14ee49e-0bc4-4fe7-9ff0-205b8984b39e-90"
            data-name="a4b268fa-75d0-4ac1-9d87-14bdca948464-2189"
            d="M240.40753,754.04932c-1.229-8.953-2.493-18.02-1.631-27.069.766-8.036,3.217-15.885,8.209-22.321a37.13191,37.13191,0,0,1,9.527-8.633c.953-.6,1.829.909.881,1.507a35.29987,35.29987,0,0,0-13.963,16.847c-3.04,7.732-3.528,16.161-3,24.374.317,4.967.988,9.9,1.665,14.83a.9.9,0,0,1-.61,1.074.878.878,0,0,1-1.074-.61Z"
            transform="translate(-213.5 -144)"
            fill="#f2f2f2"
          />
          <circle cx="355.05203" cy="10.2658" r="2.85162" fill="#fff" />
          <path
            d="M735.275,418.23648H397.033a1.05859,1.05859,0,0,1-1.05853-1.05853l.51373-1.178,338.78677.11938a1.05854,1.05854,0,0,1,.00782,2.11707H735.275Z"
            transform="translate(-213.5 -144)"
            fill="#3f3d56"
          />
          <rect
            x="245.79616"
            y="266.83099"
            width="2.07614"
            height="5.91575"
            fill="#3f3d56"
          />
          <rect
            x="307.95251"
            y="232.83099"
            width="2.07614"
            height="39.91578"
            fill="#3f3d56"
          />
          <rect
            x="370.23685"
            y="184.83099"
            width="2.07614"
            height="87.91575"
            fill="#3f3d56"
          />
          <rect
            x="432.52121"
            y="143.83099"
            width="2.07614"
            height="128.91575"
            fill="#3f3d56"
          />
          <rect
            x="494.80554"
            y="237.83099"
            width="2.07614"
            height="34.91578"
            fill="#3f3d56"
          />
          <circle cx="433.68729" cy="130.29436" r="6.35126" fill="#6c63ff" />
          <circle cx="372.40295" cy="167.55074" r="6.35126" fill="#6c63ff" />
          <circle cx="495.97165" cy="226.13194" r="6.35126" fill="#6c63ff" />
          <path
            id="a2bcaba5-fcc7-43c7-8c54-c107139343be-91"
            data-name="ba0cc859-1ca5-421a-9acf-7fb9aa3b4e23-2190"
            d="M520.83246,638.51V563.57122c0-.96109,1.11786-1.74023,2.49679-1.74023h11.14209c1.37894,0,2.49677.77914,2.49677,1.74023h0v75.13416Z"
            transform="translate(-213.5 -144)"
            fill="#3f3d56"
          />
          <path
            id="b02c718b-b277-4e02-ad4f-2608dd9924ba-92"
            data-name="a524792d-c043-478e-a7da-ec48af772355-2191"
            d="M557.63309,638.762V581.50324c0-.92355,1.11789-1.67225,2.49679-1.67225H571.272c1.37891,0,2.49677.7487,2.49677,1.67225h0v57.13553Z"
            transform="translate(-213.5 -144)"
            fill="#3f3d56"
          />
          <path
            id="a6f13ee1-90c9-41e9-aa52-bae832a2d909-93"
            data-name="fd6a765d-e5c4-40cb-8615-8d176b643a05-2192"
            d="M631.23431,638.62915V609.50729c-.09747-.34818,1.0163-.64986,2.49677-.6763h11.14209c1.48053.02642,2.59436.32812,2.49676.6763v29.19809Z"
            transform="translate(-213.5 -144)"
            fill="#3f3d56"
          />
          <path
            id="fa174473-4e9f-4d8b-98c3-8d6761a9e9bb-94"
            data-name="bd64d803-c830-42f7-b93c-47122685f128-2193"
            d="M484.03156,638.62947V609.50728c0-.37343,1.11788-.67629,2.49679-.67629h11.14209c1.37888,0,2.49677.30316,2.49677.67629v29.1981Z"
            transform="translate(-213.5 -144)"
            fill="#3f3d56"
          />
          <path
            id="e966b75a-f3f6-4a21-bd4c-c130f0d0c74e-95"
            data-name="f4fc54bd-288c-4bcd-8f44-6b7e88ac2463-2194"
            d="M594.43341,638.33881V497.71231c0-1.8035,1.11792-3.26562,2.49677-3.26562h11.14209c1.3789,0,2.49676,1.46212,2.49676,3.26562V638.70538Z"
            transform="translate(-213.5 -144)"
            fill="#6c63ff"
          />
          <path
            d="M695.38977,640h-252a1,1,0,0,1,0-2h252a1,1,0,0,1,0,2Z"
            transform="translate(-213.5 -144)"
            fill="#3f3d56"
          />
          <path
            d="M985.5,756h-771a1,1,0,0,1,0-2h771a1,1,0,0,1,0,2Z"
            transform="translate(-213.5 -144)"
            fill="#cacaca"
          />
          <circle cx="247.11862" cy="253.9035" r="6.35126" fill="#6c63ff" />
          <circle cx="309.11862" cy="218.9035" r="6.35126" fill="#6c63ff" />
        </svg> */}
      </div>
    </>
  );
};

export default Report;
