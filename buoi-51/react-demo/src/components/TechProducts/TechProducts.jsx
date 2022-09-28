import React from "react";

const TechProduct = () => {
  return (
    <a href="#" className="block">
      <img
        alt="Headphones"
        src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="object-cover w-full h-[350px] sm:h-[450px]"
      />
      <div className="mt-2 space-y-3">
        <p className="text-xs text-gray-500">Space Grey</p>
        <div className="flex gap-1">
          <button type="button">
            <span className="sr-only"> Space Grey </span>
            <span className="block rounded-full w-4 h-4 bg-[#595759]"> </span>
          </button>
          <button type="button">
            <span className="sr-only"> Silver </span>
            <span className="block rounded-full w-4 h-4 bg-[#d2d3d4]"> </span>
          </button>
          <button type="button">
            <span className="sr-only"> Pink </span>
            <span className="block rounded-full w-4 h-4 bg-[#d89f97]" />
          </button>
          <button type="button">
            <span className="sr-only"> Green </span>
            <span className="block rounded-full w-4 h-4 bg-[#afbfab]"> </span>
          </button>
          <button type="button">
            <span className="sr-only"> Sky Blue </span>
            <span className="block rounded-full w-4 h-4 bg-[#91a5bb]"> </span>
          </button>
        </div>
        <div className="flex justify-between text-xs">
          <p>Small Headphones</p>
          <p>$299</p>
        </div>
      </div>
    </a>
  );
};

const TechProducts = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      <TechProduct />
      <TechProduct />
      <TechProduct />
      <TechProduct />
      <TechProduct />
      <TechProduct />
      <TechProduct />
    </div>
  );
};

export default TechProducts;
