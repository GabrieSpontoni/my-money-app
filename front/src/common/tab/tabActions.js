export function selectTab(tabID) {
  return {
    type: "TAB_SELECTED",
    payload: tabID,
  };
}
