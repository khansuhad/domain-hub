const Coupon = () => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="p-2 md:p-3 rounded-md text-black font-bold  uppercase bg-secondColor hover:bg-thirdColor hover:text-white text-sm"
        onClick={() => document.getElementById("my_modal_99").showModal()}
      >
        Coupon
      </button>
      <dialog id="my_modal_99" className="modal">
        <div className="modal-box bg-fourthColor border shadow-2xl  border-secondColor dark:border-sixthColor text-white dark:text-sixthColor text-lg lg:text-xl  font-bold text-center">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-xl">Coupon!</h3>
          <p className="text-2xl md:text-3xl lg:text-4xl font-instrumentSans font-bold  my-5">
            &quot;FreePalestine&quot;
          </p>
        </div>
      </dialog>
    </div>
  );
};

export default Coupon;
