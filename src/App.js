import React, { useState } from "react";
import useFetchjobs from "./useFetchjobs";
import Job from "./Job";
import { Container } from "react-bootstrap";
import JobsPagination from "./JobsPagination";
import Search from "./Search";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);

  const { jobs, loading, error, hasNextPage } = useFetchjobs(params, page);

  const handleParamsChange = (e) => {
    const paramName = e.target.name;
    const value = e.target.value;
    setPage(1);

    setParams((prev) => {
      return { ...prev, [paramName]: value };
    });
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4 text-center text-primary font-weight-bold">
        Latest GitHub Jobs
      </h1>

      <Search params={params} onParamChange={handleParamsChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage />
      {loading && <h2>...Loading</h2>}
      {error && <h2>Error occured ..refresh agains</h2>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage />
    </Container>
  );
}

export default App;
