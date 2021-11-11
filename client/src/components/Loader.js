import React from "react";

const LoaderFrame = ({ children, frame, layers, variant }) => {
  let duration = (frame * 1.2) / layers;
  return (
    <>
      <div className="loader">{children}</div>
    </>
  );
};
const Loader = ({ frames = 2, variant }) => {
  let loader = <LoaderFrame layers={frames}  variant={variant} frame={1} />;
  for (let i = 0; i < frames - 1; i++) {
    loader = (
      <LoaderFrame layers={frames} variant={variant} frame={i + 2}>
        {loader}
      </LoaderFrame>
    );
  }
  return (
    <>
      <div className="loaderContainer">{loader}</div>
      <style jsx>{`
        div.loaderContainer {
          display: flex;
          margin: 0;
          padding: 0;
          justify-content: center;
          align-items: center;
          width: 150px;
          height: 150px;
        }
      `}</style>
    </>
  );
};

export default Loader;
