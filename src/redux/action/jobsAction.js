import { addErrorMessageAction, hasErrorTrueAction, isLoadingFalseAction, isLoadingTrueAction } from ".";

export const GENERAL_JOBS_LIST = "GENERAL_JOBS_LIST";
export const GENERAL_JOBS_LIST_COMPANY = "GENERAL_JOBS_LIST_COMPANY";
export const GENERAL_JOBS_LIST_CATEGORY = "GENERAL_JOBS_LIST_CATEGORY";

export const generalJobsList = (data) => ({ type: GENERAL_JOBS_LIST, payload: data });
export const generalJobsListCategory = (data) => ({ type: GENERAL_JOBS_LIST_CATEGORY, payload: data });
export const generalJobsListCompany = (data) => ({ type: GENERAL_JOBS_LIST_COMPANY, payload: data });

export const fetchGeneralJobs = () => {
  return async (dispatch) => {
    dispatch(isLoadingTrueAction());
    try {
      const resp = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o",
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        dispatch(generalJobsList(data.data));
      } else {
        dispatch(hasErrorTrueAction());
        throw new Error(resp.status);
      }
    } catch (error) {
      dispatch(addErrorMessageAction(error.message));
      console.log("si e' verificato un errore", error.message);
    } finally {
      dispatch(isLoadingFalseAction());
    }
  };
};

export const fetchByCompany = (companyName) => {
  return async (dispatch) => {
    dispatch(isLoadingTrueAction());
    try {
      const resp = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?company=${companyName}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o",
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        dispatch(generalJobsListCompany(data.data));
      } else {
        dispatch(hasErrorTrueAction());
        throw new Error(resp.status);
      }
    } catch (error) {
      dispatch(addErrorMessageAction(error.message));
      console.log("si e' verificato un errore", error.message);
    } finally {
      dispatch(isLoadingFalseAction());
    }
  };
};

export const fetchByCategory = (category) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?category=${category}&limit=10`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o",
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        dispatch(generalJobsListCategory(data.data));
      } else {
        dispatch(hasErrorTrueAction());
        throw new Error(resp.status);
      }
    } catch (error) {
      dispatch(addErrorMessageAction(error.message));
      console.log("si e' verificato un errore", error.message);
    } finally {
      dispatch(isLoadingFalseAction());
    }
  };
};
