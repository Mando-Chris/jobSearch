
export function jobs(state = [], action) {
    switch (action.type) {
        case 'JOBS_FETCH_DATA_SUCCESS':
            return action.jobs;
        break;
        case 'JOBS_FETCH_SEARCH_DATA':
            return action.jobs;
        default:
            return state;
    }
}
