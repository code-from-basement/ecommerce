function useMetaDataUpdater(value: string) {
  if (value) {
    let metaDataTitle = value;
    metaDataTitle = metaDataTitle.replace(/\//g, " ").replace(/%20/g, " ");
    return (document.title = metaDataTitle);
  }

  if (!value) {
    return (document.title = "Nuphy - Clone website");
  }
}

export default useMetaDataUpdater;
