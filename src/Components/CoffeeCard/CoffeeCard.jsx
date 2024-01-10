import { MdDelete, MdEdit, MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffee, coffees }) => {
  const { name, chef, Photo, _id } = coffee;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((data) => data._id !== _id);
              setCoffee(remaining);
            }
            console.log(data);
          });
      }
    });
    console.log(_id);
  };
  return (
    <div className="bg-[#F5F4F1] rounded-md flex  lg:w-3/4   items-center">
      <img className="w-48" src={Photo} alt="" />
      <div className="space-y-3 text-xl">
        <h1>
          {" "}
          <span className="font-semibold">Name:</span> {name}
        </h1>
        <h1>
          {" "}
          <span className="font-semibold">Chef:</span> {chef}
        </h1>
        <h1>
          {" "}
          <span className="font-semibold">Price:</span> {"890 Taka"}
        </h1>
      </div>
      <div className="space-y-5 ms-9">
        <MdRemoveRedEye className="bg-[#D2B48C] text-white text-4xl rounded px-2" />
        <div>
          <Link to={`/coffee/${_id}`}>
            <MdEdit className="bg-[#3C393B] text-4xl text-white rounded px-2" />
          </Link>
        </div>
        <MdDelete
          onClick={() => handleDelete(_id)}
          className="bg-[#EA4744] text-4xl text-white rounded px-2"
        />
      </div>
    </div>
  );
};

export default CoffeeCard;
