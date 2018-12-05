const errorHandler = (response) => {
  import(/* webpackChunkName: "errorPopup" */ '../ErrorPopup/index')
    .then((module) => {
      const ErrorPopup = new module.default();
      ErrorPopup.show();
      throw new Error(response.statusText);
    });
};

export default errorHandler;
