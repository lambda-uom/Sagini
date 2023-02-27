import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import { useState } from "react";

const ChapterReport = () => {
  const [selectedOption, setSelectedOption] = useState("Chapter Report");
  //get props
  const location = useLocation();
  const propsData = location.state;
  //send props
  const navigate = useNavigate();
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    navigate(event.target.value, {
      state: {
        empId: propsData?.empId,
        firstName: propsData?.firstName,
        lastName: propsData?.lastName,
      },
    });
  };

  return (
    <div className="">
      <h1 className="py-4 result-head card ps-5">ChapterReport</h1>
      <div className="chap-name-select">
        <div className=" d-flex ps-4">
          <Avatar name={`${propsData?.firstName}`} round />
          <div className="d-flex flex-column ps-4">
            <h3>
              {propsData?.firstName} {propsData?.lastName}
            </h3>

            <h5 className="text-secondary ms-2">{propsData?.empId}</h5>
          </div>
        </div>
        <select
          className="form-select"
          aria-label="Default select example"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="/chapterreport">Chapter Report</option>
          <option value="/overviewreport">OverviewReport</option>
        </select>
      </div>

      <div class=" chapter-content m-3 pt-5">
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link active"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            HTML
          </button>
          <button
            className="nav-link"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            React
          </button>
          <button
            class="nav-link"
            id="v-pills-disabled-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-disabled"
            type="button"
            role="tab"
            aria-controls="v-pills-disabled"
            aria-selected="false"
          >
            Java
          </button>
          <button
            class="nav-link"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            Messages
          </button>
          <button
            class="nav-link"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            Settings
          </button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
            tabindex="0"
          >
            <table className="table leaderboard-table">
              <thead>
                <tr className="table-head">
                  <th className="leaderboard-th align-middle text-center">
                    Unit Name
                  </th>
                  <th className="leaderboard-th align-middle text-center">
                    Grade
                  </th>
                  <th className="leaderboard-th align-middle text-center">
                    Range
                  </th>
                  <th className="leaderboard-th align-middle text-center">
                    Percentage
                  </th>
                </tr>
              </thead>
              <tbody>
                {true && (
                  <tr className=" bg-info bg-opacity-10 leaderboard-tr fw-semibold">
                    <td className="leaderboard-td align-middle text-center">
                      HTML basics
                    </td>
                    <td className="leaderboard-td align-middle text-center">
                      50
                    </td>
                    <td className="leaderboard-td align-middle text-center">
                      0 -100
                    </td>
                    <td className="leaderboard-td align-middle text-center">
                      50%
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
            tabindex="0"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-disabled"
            role="tabpanel"
            aria-labelledby="v-pills-disabled-tab"
            tabindex="0"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
            tabindex="0"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
            tabindex="0"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterReport;
