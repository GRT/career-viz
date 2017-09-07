export function setViewState(viewState) {
  return {
    type: 'view.SET.VIEWSTATE',
    viewState: viewState
  };
}

export function setJobListRes(jobListRes) {
  return {
    type: 'data.SET.JOBLISTRES',
    jobListRes: jobListRes
  };
}
