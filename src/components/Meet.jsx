import React, { useState } from "react";
import useFetch from "../../useFetch";
import { Link } from "react-router-dom";

const Meet = () => {
  const [type, setType] = useState("Both");
  const [search, setSearch] = useState("");
  const { data, loading, error } = useFetch(
    `https://bi-assignment-1-backend-one.vercel.app/meets`
  );

  return data ? (
    <main className="container py-3">
      <div className="d-flex justify-content-between flex-wrap">
        <h2>Meetup Events</h2>
        <input
          type="text"
          className="border border-danger rounded-pill px-3 text-center"
          placeholder="Search by title or tag"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="/createMeet" className="btn btn-success fw-bold fs-5">
          Create New
        </Link>
      </div>
      <hr />
      <select
        className="form-select my-3 text-danger border border-danger"
        aria-label="Default select example"
        onChange={(e) => setType(e.target.value)}
      >
        <option selected>Open this select menu</option>
        <option value="Both">Both</option>
        <option value="Online">Online</option>
        <option value="Offline">Offline</option>
      </select>
      <div className="row">
        {type === "Both"
          ? data.meet
              .filter((meet) => {
                if (
                  meet.title.toLowerCase().includes(search.toLowerCase()) ||
                  meet.tags.some((tag) =>
                    tag.toLowerCase().includes(search.toLowerCase())
                  )
                )
                  return meet;
              })
              .map((meet) => (
                <div className="col-md-4 my-2" key={meet._id}>
                  <div className="card h-100 d-flex flex-column">
                    <img
                      src={meet.coverImage}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{meet.title}</h5>
                      <p className="card-text text-muted flex-grow-1">
                        {meet.started.split("T")[0]} at{" "}
                        {meet.started
                          .split("T")[1]
                          .slice(0, meet.started.split("T")[1].length - 1)}
                      </p>
                      <b className="mb-2 p-2 text-center">{meet.type}</b>
                      <Link
                        to={`/meets/${meet._id}`}
                        className="btn btn-danger mt-auto"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))
          : data.meet
              .filter((meet) => {
                if (meet.type === type) {
                  if (
                    meet.title.toLowerCase().includes(search.toLowerCase()) ||
                    meet.tags.some((tag) =>
                      tag.toLowerCase().includes(search.toLowerCase())
                    )
                  )
                    return meet;
                }
              })
              .map((meet) => (
                <div className="col-md-4 my-2" key={meet._id}>
                  <div className="card h-100 d-flex flex-column">
                    <img
                      src={meet.coverImage}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{meet.title}</h5>
                      <p className="card-text text-muted flex-grow-1">
                        {meet.started.split("T")[0]} at{" "}
                        {meet.started
                          .split("T")[1]
                          .slice(0, meet.started.split("T")[1].length - 1)}
                      </p>
                      <p className="btn btn-light">{meet.type}</p>
                      <Link
                        to={`/meets/${meet._id}`}
                        className="btn btn-danger mt-auto"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
      </div>
    </main>
  ) : (
    <main className="container py-3">
      <div>{loading && <p className="fs-3 text-danger text-center">loading...</p>}</div>
      <div>{error && <p>{error}</p>}</div>
    </main>
  );
};

export default Meet;
