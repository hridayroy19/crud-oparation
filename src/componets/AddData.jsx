
import toast from "react-hot-toast";
import UseAxiosPublic from "./sheradComponet/UseAxiosPublic";


const AddData = () => {

  const axiosPublic = UseAxiosPublic();
  const handeltSubmit = e => {
    e.preventDefault();
    const fromData = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    e.target.reset();

    const allData = {
      fromData,
      email,
      phone
    }

    axiosPublic.post('/data', allData)
      .then(data => {
        console.log(data.data)
        if (data.data) {
          toast.success("success full data send")
        }
      })
      .catch(error => console.log(error.message));

  }







  return (
    <div className="hero ">
      <div className="card bg-[#ee74c9] w-full max-w-sm shadow-2xl ">
        <form onSubmit={handeltSubmit} className="card-body" >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="enter your name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" />
          </div>
          <label className="label">
            <span className="label-text">phone</span>
          </label>
          <input type="number" name="phone" placeholder="Phne" className="input input-bordered" />
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddData;