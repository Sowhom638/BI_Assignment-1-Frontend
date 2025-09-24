import React from "react";
import useFetch from "../../useFetch";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const MeetDetails = () => {
  const { meetId } = useParams();
  const { data, loading, error } = useFetch(
    `https://bi-assignment-1-backend-one.vercel.app/meets/${meetId}`
  );
  //   console.log(data);

  return data ? (
    <>
      <Header />
      <main className="container py-3">
        <div className="row">
          <div className="left col-md-6 my-2">
            <h1>{data.meet.title}</h1>
            <p className="fs-4">
              Hosted by: <b>{data.meet.host}</b>
            </p>
            <div className="card fs-4">
              <img
                className="card-img-top"
                src={data.meet.coverImage}
                alt={data.meet.title}
              />
              <div className="card-body">
                <h5 className="card-title">Details:</h5>
                <p className="card-text">{data.meet.details}</p>
              </div>
            </div>
            <div className="mt-5 mb-3 mx-2">
              <h3>Additional Information:</h3>
              <span className="fs-5">
                <b>Dress Code:</b> {data.meet.dressCode}
              </span>{" "}
              <span className="mx-3 fs-5">
                <b>Age Restrictions:</b> {data.meet.ageRestrictions}
              </span>
            </div>
            <div className="my-4">
              <h3 className="mx-2">Event Tags:</h3>
              <div className="d-flex flex-wrap">
                {data.meet.tags.map((tag) => (
                  <span className="btn btn-danger fw-bols fs-5 m-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="right col-md-6 my-2">
            <div className="card">
              <div className="card-body d-grid gap-3">
                <h4 className="card-title">
                  {data.meet.started.split("T")[0]} at{" "}
                        {data.meet.started
                          .split("T")[1]
                          .slice(0, data.meet.started.split("T")[1].length - 1)} to{" "}
                  {data.meet.ended.split("T")[0]} at{" "}
                        {data.meet.ended
                          .split("T")[1]
                          .slice(0, data.meet.ended.split("T")[1].length - 1)}
                </h4>
                <p className="card-text fs-5">{data.meet.address}</p>
                <p className="card-text fs-5">₹{data.meet.price}</p>
              </div>
            </div>
            <div className="mt-5 mb-3 mx-2">
              <h3 className="mb-4">Speakers: ({data.meet.speakers.length})</h3>
              <div className="d-flex flex-wrap">
                {data.meet.speakers.map((speaker)=>(<span className="fs-5 border border-danger py-2 px-3 rounded m-2">
                  <b>{speaker}</b>
                </span>))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  ) : (
    <main className="container">
      <div>{loading && <p>loading...</p>}</div>
      <div>{error && <p>{error}</p>}</div>
    </main>
  );
};

export default MeetDetails;
