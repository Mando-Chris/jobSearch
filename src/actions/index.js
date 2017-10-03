
// fetch job list on pageload
// fetch joblist when 'JobSearch' title is clicked.
export function fetchJobsSuccess(jobs) {
    return {
        type: 'FETCH_JOBS',
        jobs
    };
}

export function fetchJobs(url) {
    return (dispatch) => {
        dispatch(searchIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(searchIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((jobs) => dispatch(fetchJobsSuccess(jobs)))
            .catch(() => dispatch(searchHasErrored(true)));
    };
}

// fetch skills from search input

export function fetchSkillsSearchDataSuccess(jobs) {
    return {
        type: 'FETCH_SKILL_SEARCH_DATA',
        jobs
    };
}

export function fetchSkillsSearchData(url) {
    return (dispatch) => {
        dispatch(searchIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(searchIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((jobs) => dispatch(fetchSkillsSearchDataSuccess(jobs)))
            .catch(() => dispatch(searchHasErrored(true)));
    };
}
// fetch skills by job{id}
export function fetchSkillsByIdSuccess(jobs) {
    return {
        type: 'FETCH_SKILLS_BY_ID',
        jobs
    };
}

export function searchHasErrored(bool) {
    return {
        type: 'SEARCH_HAS_ERRORED',
        hasErrored: bool
    };
}
export function searchIsLoading(bool) {
    return {
        type: 'SEARCH_IS_LOADING',
        isLoading: bool
    };
}


