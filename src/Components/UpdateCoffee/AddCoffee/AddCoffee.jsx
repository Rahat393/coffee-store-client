import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const Supplier = form.Supplier.value;
    const Taste = form.Taste.value;
    const Category = form.Category.value;
    const Details = form.Details.value;
    const Photo = form.Photo.value;
    const data = { name, chef, Supplier, Taste, Category, Details, Photo };
    console.log(data);

    fetch("http://localhost:5000/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfuly",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        console.log(data);
      });
  };
  return (
    <div className="bg-slate-100 h-full pt-10">
      <div className="text-center   ">
        <h1 className=" text-3xl font-semibold mb-3 font-rancho">
          Add New Coffee
        </h1>
        <p className="w-4/5 text-center mx-auto">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="p-20 pt-10 space-y-5 gap-y-4 ">
        <div className="  lg:flex gap-10 space-y-5 md:space-y-0 ">
          <div className="  md:w-1/2">
            <label className="block text-xl font-semibold" htmlFor="">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className=" w-full p-1 rounded-md mt-1"
              id=""
            />
          </div>
          <div className="md:w-1/2">
            <label className="block text-xl font-semibold" htmlFor="">
              Chef
            </label>
            <input
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
              className=" w-full  p-1 rounded-md mt-1"
              id=""
            />
          </div>
        </div>
        <div className="  lg:flex gap-10 space-y-5 md:space-y-0 ">
          <div className="  md:w-1/2">
            <label className="block text-xl font-semibold" htmlFor="">
              Supplier
            </label>
            <input
              type="text"
              name="Supplier"
              placeholder="Enter coffee supplier"
              className=" w-full p-1 rounded-md mt-1"
              id=""
            />
          </div>
          <div className="md:w-1/2">
            <label className="block text-xl font-semibold" htmlFor="">
              Taste
            </label>
            <input
              type="text"
              name="Taste"
              placeholder="Enter coffee Taste"
              className=" w-full  p-1 rounded-md mt-1"
              id=""
            />
          </div>
        </div>
        <div className="  lg:flex gap-10 space-y-5 lg:space-y- ">
          <div className="  md:w-1/2">
            <label className="block text-xl font-semibold" htmlFor="">
              Category
            </label>
            <input
              type="text"
              name="Category"
              placeholder="Enter coffee Category"
              className=" w-full p-1 rounded-md mt-1"
              id=""
            />
          </div>
          <div className="md:w-1/2">
            <label className="block text-xl font-semibold" htmlFor="">
              Details
            </label>
            <input
              type="text"
              name="Details"
              placeholder="Enter coffee  Details "
              className=" w-full  p-1 rounded-md mt-1"
              id=""
            />
          </div>
        </div>
        <div className="      md:space-y-0 ">
          <div className="md:w-full">
            <label className="block text-xl font-semibold" htmlFor="">
              Photo
            </label>
            <input
              type="text"
              name="Photo"
              placeholder="Enter Photo URL"
              className=" w-full  p-2 rounded-md mt-1"
              id=""
            />
          </div>
        </div>
        <input
          type="submit"
          className=" bg-[#D2B48C] p-3 rounded-md text-xl border-2 border-black font-semibold w-full font-rancho"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};
export default AddCoffee;
