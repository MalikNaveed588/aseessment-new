import React, { useState } from "react";
import "./index.scss";

const SearchTool = () => {
  const [searchValue, setSeachValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [data, setData] = useState([
    {
      address: "street address",
      Poscode: "Mark",
      rooms: "Otto",
      floorArea: "@mdo",
    },
    {
      address: "lahore",
      Poscode: "Jacob",
      rooms: "Thornton",
      floorArea: "@fat",
    },
  ]);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const change = (index) => {
    const newData = [...data];
    newData[index].checked = !newData[index].checked;
    setData(newData);
  };

  return (
    <React.Fragment>
      <div>
        <nav className="navbar navbar-grey bg-light ">
          <div className="container py-3">
            <a className="navbar-brand " href="#">
              <img
                src="https://play-lh.googleusercontent.com/Fto1xcq6wMHJ8RiXHFjsgwxMEoTVj4wpLQO1ucBL0VP7we7OsvS1FHxf2viW-lGzHA"
                alt=""
                width="30"
                height="24"
              />
            </a>
            <h5 className="navbar-heading">property search tool</h5>
          </div>
        </nav>
        <div className="row">
          <div className="col-3 "></div>
          <div className="col-9">
            <div className="row">
              <div className="pt-2">
                <h4>search</h4>
              </div>
              <div className="row">
                <div className="col-11">
                  <form
                    className="d-flex"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setIsSearch(true);
                    }}
                  >
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={searchValue}
                      onChange={({ target: { value } }) => setSeachValue(value)}
                    />
                    <button className="btn btn-warning" type="submit">
                      Search
                    </button>
                  </form>
                </div>
                <div className="col-6"></div>
              </div>
              <div className="py-3">
                <h4>selected properties</h4>
              </div>
              <div className="col-11">
                <table className="table table-secondary ">
                  <thead>
                    <tr>
                      <th scope="col">Address</th>
                      <th scope="col">Poscode</th>
                      <th scope="col">Number of Rooms</th>
                      <th scope="col">Floor area</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td scope="row">{item.address}</td>
                        <td>{item.Poscode}</td>
                        <td>{item.rooms}</td>
                        <td>{item.floorArea}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {Boolean(isSearch && searchValue) && (
          <div className="row">
            <div className=" col-3 d-flex justify-content-end">
              <div className="property-type">
                {["all", "Flat", "Terraced House", "Semi-detached"].map(
                  (item, index) => (
                    <div
                      key={index}
                      style={
                        selectedFilter === item
                          ? { fontWeight: "600", cursor: "not-allowed" }
                          : { cursor: "pointer" }
                      }
                      onClick={() => setSelectedFilter(item)}
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="col-9">
              <div className="row">
                <div className="row">
                  <div className="col-6"></div>
                </div>
                <div className="py-3">
                  <h4>search result</h4>
                </div>
                <div className="col-11">
                  <table className="table table-secondary ">
                    <thead>
                      <tr>
                        <th scope="col">good</th>
                        <th scope="col">Address</th>
                        <th scope="col">Poscode</th>
                        <th scope="col">Number of Rooms</th>
                        <th scope="col">Floor area</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data
                        .filter(({ address }) =>
                          address.startsWith(searchValue)
                        )
                        .map((item, index) => (
                          <tr key={index}>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                  checked={item.checked}
                                  onChange={() => change(index)}
                                />
                              </div>
                            </td>
                            <td scope="row">{item.address}</td>
                            <td>{item.Poscode}</td>
                            <td>{item.rooms}</td>
                            <td>{item.floorArea}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default SearchTool;
