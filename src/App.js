import React, { useState } from "react";
import useFetchjobs from "./useFetchjobs";
import Job from "./Job";
import { Container } from "react-bootstrap";
import JobsPagination from "./JobsPagination";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);

  const { jobs, loading, error } = useFetchjobs(params, page);
  return (
    <Container className="my-5">
      <h1 className="mb-4">Latest GitHub Jobs</h1>

      <JobsPagination page={page} setPage={setPage} />
      {loading && <h2>...Loading</h2>}
      {error && <h2>Error occured ..refresh agains</h2>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
      <JobsPagination page={page} setPage={setPage} />
    </Container>
  );
}

export default App;
