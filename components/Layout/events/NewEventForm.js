import { useRef } from "react";

function NewEventForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const dateInputRef = useRef();
  const descriptionInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const eventData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      date: enteredDate,
      description: enteredDescription,
    };

    props.onCreateEvent(eventData);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="m-auto mt-12 flex w-[90%] flex-col items-center gap-5 rounded-md bg-gray-800/50 p-12 text-white xl:w-3/4"
      >
        <div className="flex w-full flex-col gap-2 text-left lg:w-3/4">
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className="flex w-full flex-col gap-2 text-left lg:w-3/4">
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className="flex w-full flex-col gap-2 text-left lg:w-3/4">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={addressInputRef} />
        </div>
        <div className="flex w-full flex-col gap-2 text-left lg:w-3/4">
          <label htmlFor="date">Date</label>
          <input type="date" required id="date" ref={dateInputRef} />
        </div>
        <div className="flex w-full flex-col gap-2 text-left lg:w-3/4">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            required
            id="description"
            ref={descriptionInputRef}
          />
        </div>
        <button className="mt-6 flex bg-red-500 p-3 transition-colors hover:bg-red-900">
          Create Event
        </button>
      </form>
    </div>
  );
}

export default NewEventForm;
