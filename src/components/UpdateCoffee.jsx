import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = {name, chef, supplier, taste, category, details, photo}
        console.log(updateCoffee);

        // send data to the server
        fetch(`http://localhost:3000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            
        })
    }

    return (
        <div>
            <div className='bg-[#F4F3F0] p-24 w-[1000px] mx-auto'>
                <h2 className='text-3xl font-extrabold text-center'>Update A Coffee</h2>
                <p className='text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleUpdateCoffee} className='mt-10'>
                    <div className='lg:flex gap-10 mb-5'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='name' defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full"></input>
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='chef' defaultValue={chef} placeholder="Enter coffee chef" className="input input-bordered w-full"></input>
                            </label>
                        </div>

                    </div>
                    <div className='lg:flex gap-10 mb-5'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='supplier' defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered w-full"></input>
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='taste' defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered w-full"></input>
                            </label>
                        </div>

                    </div>
                    <div className='lg:flex gap-10 mb-5'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='category' defaultValue={category} placeholder="Enter coffee category" className="input input-bordered w-full"></input>
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='details' defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-full"></input>
                            </label>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='photo' defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full"></input>
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Update Coffee" className='btn btn-neutral w-full' />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;