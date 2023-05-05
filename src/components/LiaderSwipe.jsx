import React, { useEffect, useState } from "react";

function LoaderSwipe() {
  const [Load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(false);
    setTimeout(() => {
      setLoad(true);
    }, 1000);
  }, []);

  return (
    <>
      {" "}
      <section className=" bg-black">
        <div className={Load ? "SwipeLoader-Show" : "SwipeLoader-Hide"}>
          <div className="loadercomp">
            <div>
              {Load ? (
                <h2 className=" ff_gilroy fs_2xl fw-semibold text-white">
                  <i> Loading compleat</i>
                </h2>
              ) : (
                <h2 className=" ff_gilroy fs_2xl fw-semibold text-white">
                  <i> Loading</i> <span className=" text_Gray">.....</span>
                </h2>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoaderSwipe;
